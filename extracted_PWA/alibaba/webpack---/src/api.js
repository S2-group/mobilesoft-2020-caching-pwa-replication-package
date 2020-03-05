/**
 * Created by 易晓峰(林异)<yxf@106063@alibaba-inc.com> on 10/01/2018.
 */
// API打点
import _common from './common';

/**
 * 收集API的性能数据
 * @param {Date} startTime - 开始时间
 * @param {String} name - API的名称
 * @param {Number} status - API的状态，0表示失败，1表示成功
 * @param {String} group - 分组，用于做AB测试
 */
const send = function(duration, name, status, extend) {
  const ext = Object.assign({
    v: _common.CACHE.version,
    source: _common.CACHE.source,
    spm: _common.getSpm(),
    name,
    duration,
    group: _common.getConfig('group'),
		// 统计方式的标识符
    stat_mode: _common.getConfig('stat_mode'),
    status,
  }, extend);

  _common.send('api', ext);
};

/**
 * 调用API成功
 * @param {Date} startTime - 请求API开始的时间
 * @param {String} name - API的名字
 * @param {String} group - 用于做AB测试
 */
const success = function(duration, name, extend) {
  send(duration, name, 1, extend);
};

/**
 * 调用API失败
 * @param {Date} startTime - 请求API的开始时间
 * @param {String} name - API的名字
 */
const error = function(duration, name, extend) {
  send(duration, name, 0, extend);
};

/**
 * 根据URL识别API的名称
 * @param url
 */
const detectName = function(url) {
  // 从url中提取名称
  const apiName = _common.extractParam(url, '__bb_name__');
  // url中的名称可能已经经过encode
  if (apiName) return decodeURIComponent(apiName);

  // 如果url中没有包含api的名称，则取url地址
  const result = url.match(/^https?:\/\/(.+?)(?=[\?#])/);
  return (result && result[1]) || url;
};

/**
 * 判断一个entity是否为API请求
 * @param entity
 */
const isAPI = function(entity) {
  const { name, initiatorType } = entity;
    // 如果在url中直接指定了__bb_name__，则认为这是一个api
  if (/__bb_name__/.test(name)) return true;

    // alicdn.com不可能是一个api
  if (/alicdn\.com/.test(name)) return false;

    // url中包含callback，则认为是一个api
  if (/callback=/.test(name)) return true;

    // 异步加载的时候，如果使用window.fetch，在chrome浏览器下，是没有initiatorType的
  if (!initiatorType && !/\.((js)|(png)|(jpe?g)|(webp)|(html?)|(css)|(gif)|(woff))/.test(name)) return true;

    // ajax
  if (initiatorType === 'xmlhttprequest' && !(/\.js/)) return true;
};

// 上报某个entity
const report = function(entity) {
    // connectEnd, connectStart, domainLookupEnd,domainLookupStart
  const { name, responseStart, requestStart, duration } = entity;
  const ttfb = _common.filterValue(responseStart - requestStart);
    // const connect = _common.filterValue(connectEnd - connectStart) + _common.filterValue(domainLookupEnd - domainLookupStart);

  const extend = {
    ttfb,
        // connect
  };

  success(_common.filterValue(duration), detectName(name), extend);
};

/**
 * 在自动上报API性能的过程中，检查是否需要上报
 * @param entity
 * @param options
 * @returns {boolean}
 */
const canIReport = function(entity, options) {
  const { name } = entity;
    // 没有URL不上报
  if (!name) return;

    // 根据URL来判断是否可以上报
  // if (!checkWithUrl(name)) return;

  const disable = _common.extractParam(name, '__bb_disable__');

    // 检查url中是否包含禁止上报的参数
  if (disable === '1') return;

    // 检查url中是否包含比例，如果有，则用随机数来判断是否合乎比例
  let rate = parseInt(_common.extractParam(name, '__bb_rate__'));
  if (isNaN(rate)) rate = options.rate;

  if (_common.matchRate(rate)) report(entity);
};

/**
 * 自动探测API的性能，当API发生变化的时候，提交数据
 */
const reportWithObserve = function(options) {
  if (!window.__BIG_BROTHER__) window.__BIG_BROTHER__ = {};
  let isRunning = false;

  // 定义可触发的事件
  window.__BIG_BROTHER__.apiTrigger = function() {
    // 已经在执行中
    if (isRunning) return;
    isRunning = true;

    let exists = false;
    do {
      const items = window.__BIG_BROTHER__.items || [];
      const last = items.pop();

      // 如果没有数据了，则跳出
      if (!last) {
        isRunning = false;
        exists = false;
        break;
      }

      // 只有合法的API才会上报
      if (!isAPI(last)) continue;

      canIReport(last, options);
      exists = true;
    } while (exists);
  };
};

const autoReport = function(options) {
  const ops = Object.assign({
    rate: 100,
  }, options);

  // 不在前面做概率的限制，因为需要从url中读取上报概率
  reportWithObserve(ops);
};

export default {
  send,
  detectName,
  autoReport,
  error,
  success,
};



// WEBPACK FOOTER //
// ./src/api.js