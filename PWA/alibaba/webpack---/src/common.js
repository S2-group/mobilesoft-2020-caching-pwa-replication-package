/**
 * Created by 易晓峰(林异)<yxf@106063@alibaba-inc.com> on 10/01/2018.
 */
import store from './store';
import storeProxy from '@alife/bc-store-proxy';

const CID = {
    // 通用的打点，根据类型来区分
  common: 27126,
    // 性能的cid
  performance: 27122,
    // api的cid
  api: 27123,
};

/**
 * 黄金令箭的打点
 * @type {{common: string, performance: string, api: string}}
 */
const GOLDLOG = {
  // 通用的打点，根据类型来区分
  common: '/sc.bb.common',
  // 性能的cid
  performance: '/sc.bb.perf',
  // api的cid
  api: '/sc.bb.api',
};

/**
 * 缓存
 * @type {{counter: null, spm: null, version: number}}
 */
const CACHE = {
  counter: null,
  spm: null,
  // 来源
  source: 'sentry',
  // 提交数据的版本，这样可以知道哪些客户端部署是不正确的
  version: 18,
};

/**
 * 错误信息
 * @type {{}}
 */
const ERR = {
  timeout: 1,
};

const VISIT_TYPE = {
  //没有
  noSPM: -2,
  // 读写Store出错了
  storeError: -3,
  // 全站首次
  newForSite: -9,
  // 页面首次
  newForPage: 0,
  // 多次
  oldUser: 1,
};

/**
 * 从Url中提取参数
 * @param url
 * @param key
 */
const extractParam = function(url, key) {
  if (!url) return;
  const pattern = new RegExp(`[?&]${key}=(([^&#]*)|&|#|$)`, 'i');
  const list = url.match(pattern);
  return list && list.length > 1 ? list[1] : undefined;
};

/**
 * 从body和meta中读取spm
 * @returns {*|HTMLElement|string}
 */
const extractSpm = function() {
  const spmA = readMetaContent('data-spm');
  const spmB = document.body && document.body.getAttribute('data-spm');
  return spmA && spmB && `${spmA}.${spmB}`;
};

/**
 * 读取meta的值
 * @param key
 * @returns {*}
 */
function readMetaContent(key) {
  const meta = document.querySelector(`meta[name="${key}"]`);

  if (!meta) return;
  return meta.getAttribute('content');
}

/**
 * 返回访问的计数器，每次都可能会读localstorage
 */
const visitCounter = function(spm, callback) {
  //屏蔽chrome 3x，这部分的量占总量的3%，iframe会出现异常，暂时先返回storeError的问题
  if(/(chrome\/3)|(rv\:11)/ig.test(navigator.userAgent)) return callback(VISIT_TYPE.storeError);
  
  // 没有找到SPM
  if (!spm) return callback(VISIT_TYPE.noSPM);

  // 第一次访问我们网站的人，这个永远不会删除，除非用户手动删除，用于获取真正的首次用户的性能
  const fingerprintKey = 'fingerprint';
  // 访问当前页面的key
  const currentKey = `counter_${spm}`;

  //临时清除storage，过段时间再处理
  storeProxy.remove('big-brother.bb_counter_' + spm);
  
  store.get(fingerprintKey, function(err, siteMarked) {
    if (err) return callback(VISIT_TYPE.storeError);
    // 全站没有写入
    if (!siteMarked) {
      // 写入全站
      return store.set(fingerprintKey, true, function(err1) {
        if (err1) return callback(VISIT_TYPE.storeError);
        // 并且写入当前页
        store.set(currentKey, true, function(err2) {
          if (err2) return callback(VISIT_TYPE.storeError);
          callback(VISIT_TYPE.newForSite);
        });
      });
    }

    // 读取当前页是否已经写入
    store.get(currentKey, days2ms(7), function(err3, pageMarked) {
      if (err3) return callback(VISIT_TYPE.storeError);
      const flag = pageMarked ? VISIT_TYPE.oldUser : VISIT_TYPE.newForPage;

      // 写入当前页的Key
      store.set(currentKey, true, function(err4) {
        callback(err4 ? VISIT_TYPE.storeError : flag);
      });
    });
  });
};

/**
 * 打点
 * @param cid
 * @param ext
 */
const send = function(type, ext) {
  ext = objectToParam(ext);
    // 用户指定的发送方法
  if (window.__BB && window.__BB.send) {
    window.__BB.send(type, ext);
    return;
  }

  const func = (window.dmtrack || {}).dotstat;
  if (func) {
    // 默认用cid的方式打点
    func(CID[type], { ext });
  } else if (window.goldlog) {
    // 使用黄金令箭的方式打点
    goldlog.record(GOLDLOG[type], 'OTHER', ext, 'GET');
  }
};

/**
 * 打点
 * @param ext
 */
const sendARMS = function(ext) {
  if (ext.c_arms) {
    const group = ext.group || '';
    const keepKey = ['dns', 'tcp', 'ssl', 'download', 'fetch', 'ttfb', 'exposed'];
    const result = {};
    for (const key in ext) {
      if (/^c_/.test(key) || keepKey.indexOf(key) !== -1) {
        const val = ext[key];
        if (typeof val === 'number' && val >= 0 && val <= 15000) {
          result[key] = val;
        }
      }
    }

    if (result.ttfb && result.ttfb > 0 && ßßresult.ttfb < 3000 && result.exposed > 0 && result.exposed < 15000) {
      // 打点
      for (const key in result) {
        window.__bl && __bl.avg('perf|' + group + '|' + key, result[key]);
      }
    }
  }
}

/**
 * 根据url检查是否为静态文件主机
 * @param url
 */
const isResource = function(url) {
  return /alicdn\.com/.test(url);
};

/**
 * 将object转换为String
 * @param data
 * @param stringify
 * @param spliter
 * @returns {*}
 */
function objectToParam(data, stringify = true, spliter = '|', connect = '=') {
    // 强制要求返回非字符
  if (stringify === false) return data;

  const result = [];
  for (const key in data) {
    const value = data[key];
    if (value === undefined) continue;
    result.push(`${key}${connect}${value}`);
  }
  return result.join(spliter);
}

/**
 * 对数据的有效性进行过滤
 * @param value
 * @returns {number}
 */
const filterValue = function(value) {
  return parseInt((value > 120000 || value < -120000) ? 0 : value);
};

/**
 * 根据概率确定要不要执行后面的操作
 * @param rate
 */
const chance = function(rate, callback) {
    // 只有在概率以内的才执行
  if (matchRate(rate)) callback();
};

/**
 * 是否匹配概率
 * @param rate
 * @returns {boolean}
 */

function matchRate(rate) {
  return Math.random() * 100 < rate;
}

/**
 * 获取天的毫秒
 * @param days
 * @returns {number}
 */
function days2ms(days) {
  return days * 24 * 60 * 60 * 1000;
}

/**
 * 获取配置，先从window.__BB中取，如果没有取到
 * @param key
 */
const getConfig = function(key, allowReadMeta = true) {
  const bb = window.__BB || {};
  let value = bb[key];
  if (value !== undefined) return value;

    // 没有找到，且允许读取meta，则则从meta中取
  if (allowReadMeta) return readMetaContent(`bb-${key}`);
};

// 对于spm以及mode等配置信息，实时获取的原因是考虑用户可能会通过window.__BB进行变更
/**
 * 获取当前的模式
 */
const getMode = function() {
  const mode = parseInt(getConfig('mode'));
  return isNaN(mode) ? 0 : mode;
};

/**
 * 获取当前的SPM
 */
const getSpm = function() {
  return getConfig('spm') || extractSpm();
};

/**
 * 简单前端分桶，一个用户一旦命中，就会保存到localStorage中，除非清除，都是这个桶
 * 返回是否命中A桶
 * @param {Integer} rate - 概率，rate取值从1到5，1表示1,9，2表示2,8，...，5表示5,5分桶
 * @param {Integer} maxAge - 分桶最大有效期
 */
const hitBucketA = function(rate, maxAge, callback) {
  // 如果几率大于10，则直接命中
  if (rate >= 10) return callback(true);

  // 概率不在1-5，则永远无法命中
  if ([ 1, 2, 3, 4, 5 ].indexOf(rate) < 0) return callback(false);
  const key = `simple_bucket_${rate}`;

  store.get(key, maxAge, function(err, value) {
    // 发生错误，直接认为未命中
    if (err) return callback(false);
    // 已经指定了数据
    if (value != undefined) return callback(!!~~value);

    // 如果没有读到，则生成一个随机数，同时将这个随机数写入到分桶中
    value = ~~(Math.random() * 10 <= rate);
    store.set(key, value).then(function(err1) {
      callback(err1 ? false : !!~~value);
    });
  });
};

export default {
  extractParam,
  hitBucketA,
  extractSpm,
  getConfig,
  isResource,
  getMode,
  getSpm,
  days2ms,
  CID,
  CACHE,
  ERR,
  matchRate,
  chance,
  filterValue,
  objectToParam,
  visitCounter,
  send,
  sendARMS,
};



// WEBPACK FOOTER //
// ./src/common.js