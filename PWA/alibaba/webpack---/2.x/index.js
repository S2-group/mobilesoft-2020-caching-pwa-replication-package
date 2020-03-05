/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alife_bc_store_proxy__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alife_bc_store_proxy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__alife_bc_store_proxy__);
/**
 * Created by 易晓峰(林异)<yxf@106063@alibaba-inc.com> on 10/01/2018.
 */



var CID = {
  // 通用的打点，根据类型来区分
  common: 27126,
  // 性能的cid
  performance: 27122,
  // api的cid
  api: 27123
};

/**
 * 黄金令箭的打点
 * @type {{common: string, performance: string, api: string}}
 */
var GOLDLOG = {
  // 通用的打点，根据类型来区分
  common: '/sc.bb.common',
  // 性能的cid
  performance: '/sc.bb.perf',
  // api的cid
  api: '/sc.bb.api'
};

/**
 * 缓存
 * @type {{counter: null, spm: null, version: number}}
 */
var CACHE = {
  counter: null,
  spm: null,
  // 来源
  source: 'sentry',
  // 提交数据的版本，这样可以知道哪些客户端部署是不正确的
  version: 18
};

/**
 * 错误信息
 * @type {{}}
 */
var ERR = {
  timeout: 1
};

var VISIT_TYPE = {
  //没有
  noSPM: -2,
  // 读写Store出错了
  storeError: -3,
  // 全站首次
  newForSite: -9,
  // 页面首次
  newForPage: 0,
  // 多次
  oldUser: 1
};

/**
 * 从Url中提取参数
 * @param url
 * @param key
 */
var extractParam = function extractParam(url, key) {
  if (!url) return;
  var pattern = new RegExp('[?&]' + key + '=(([^&#]*)|&|#|$)', 'i');
  var list = url.match(pattern);
  return list && list.length > 1 ? list[1] : undefined;
};

/**
 * 从body和meta中读取spm
 * @returns {*|HTMLElement|string}
 */
var extractSpm = function extractSpm() {
  var spmA = readMetaContent('data-spm');
  var spmB = document.body && document.body.getAttribute('data-spm');
  return spmA && spmB && spmA + '.' + spmB;
};

/**
 * 读取meta的值
 * @param key
 * @returns {*}
 */
function readMetaContent(key) {
  var meta = document.querySelector('meta[name="' + key + '"]');

  if (!meta) return;
  return meta.getAttribute('content');
}

/**
 * 返回访问的计数器，每次都可能会读localstorage
 */
var visitCounter = function visitCounter(spm, callback) {
  //屏蔽chrome 3x，这部分的量占总量的3%，iframe会出现异常，暂时先返回storeError的问题
  if (/(chrome\/3)|(rv\:11)/ig.test(navigator.userAgent)) return callback(VISIT_TYPE.storeError);

  // 没有找到SPM
  if (!spm) return callback(VISIT_TYPE.noSPM);

  // 第一次访问我们网站的人，这个永远不会删除，除非用户手动删除，用于获取真正的首次用户的性能
  var fingerprintKey = 'fingerprint';
  // 访问当前页面的key
  var currentKey = 'counter_' + spm;

  //临时清除storage，过段时间再处理
  __WEBPACK_IMPORTED_MODULE_1__alife_bc_store_proxy___default.a.remove('big-brother.bb_counter_' + spm);

  __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].get(fingerprintKey, function (err, siteMarked) {
    if (err) return callback(VISIT_TYPE.storeError);
    // 全站没有写入
    if (!siteMarked) {
      // 写入全站
      return __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].set(fingerprintKey, true, function (err1) {
        if (err1) return callback(VISIT_TYPE.storeError);
        // 并且写入当前页
        __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].set(currentKey, true, function (err2) {
          if (err2) return callback(VISIT_TYPE.storeError);
          callback(VISIT_TYPE.newForSite);
        });
      });
    }

    // 读取当前页是否已经写入
    __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].get(currentKey, days2ms(7), function (err3, pageMarked) {
      if (err3) return callback(VISIT_TYPE.storeError);
      var flag = pageMarked ? VISIT_TYPE.oldUser : VISIT_TYPE.newForPage;

      // 写入当前页的Key
      __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].set(currentKey, true, function (err4) {
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
var send = function send(type, ext) {
  ext = objectToParam(ext);
  // 用户指定的发送方法
  if (window.__BB && window.__BB.send) {
    window.__BB.send(type, ext);
    return;
  }

  var func = (window.dmtrack || {}).dotstat;
  if (func) {
    // 默认用cid的方式打点
    func(CID[type], { ext: ext });
  } else if (window.goldlog) {
    // 使用黄金令箭的方式打点
    goldlog.record(GOLDLOG[type], 'OTHER', ext, 'GET');
  }
};

/**
 * 打点
 * @param ext
 */
var sendARMS = function sendARMS(ext) {
  if (ext.c_arms) {
    var group = ext.group || '';
    var keepKey = ['dns', 'tcp', 'ssl', 'download', 'fetch', 'ttfb', 'exposed'];
    var result = {};
    for (var key in ext) {
      if (/^c_/.test(key) || keepKey.indexOf(key) !== -1) {
        var val = ext[key];
        if (typeof val === 'number' && val >= 0 && val <= 15000) {
          result[key] = val;
        }
      }
    }

    if (result.ttfb && result.ttfb > 0 && ßßresult.ttfb < 3000 && result.exposed > 0 && result.exposed < 15000) {
      // 打点
      for (var _key in result) {
        window.__bl && __bl.avg('perf|' + group + '|' + _key, result[_key]);
      }
    }
  }
};

/**
 * 根据url检查是否为静态文件主机
 * @param url
 */
var isResource = function isResource(url) {
  return (/alicdn\.com/.test(url)
  );
};

/**
 * 将object转换为String
 * @param data
 * @param stringify
 * @param spliter
 * @returns {*}
 */
function objectToParam(data) {
  var stringify = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var spliter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '|';
  var connect = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '=';

  // 强制要求返回非字符
  if (stringify === false) return data;

  var result = [];
  for (var key in data) {
    var value = data[key];
    if (value === undefined) continue;
    result.push('' + key + connect + value);
  }
  return result.join(spliter);
}

/**
 * 对数据的有效性进行过滤
 * @param value
 * @returns {number}
 */
var filterValue = function filterValue(value) {
  return parseInt(value > 120000 || value < -120000 ? 0 : value);
};

/**
 * 根据概率确定要不要执行后面的操作
 * @param rate
 */
var chance = function chance(rate, callback) {
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
var getConfig = function getConfig(key) {
  var allowReadMeta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var bb = window.__BB || {};
  var value = bb[key];
  if (value !== undefined) return value;

  // 没有找到，且允许读取meta，则则从meta中取
  if (allowReadMeta) return readMetaContent('bb-' + key);
};

// 对于spm以及mode等配置信息，实时获取的原因是考虑用户可能会通过window.__BB进行变更
/**
 * 获取当前的模式
 */
var getMode = function getMode() {
  var mode = parseInt(getConfig('mode'));
  return isNaN(mode) ? 0 : mode;
};

/**
 * 获取当前的SPM
 */
var getSpm = function getSpm() {
  return getConfig('spm') || extractSpm();
};

/**
 * 简单前端分桶，一个用户一旦命中，就会保存到localStorage中，除非清除，都是这个桶
 * 返回是否命中A桶
 * @param {Integer} rate - 概率，rate取值从1到5，1表示1,9，2表示2,8，...，5表示5,5分桶
 * @param {Integer} maxAge - 分桶最大有效期
 */
var hitBucketA = function hitBucketA(rate, maxAge, callback) {
  // 如果几率大于10，则直接命中
  if (rate >= 10) return callback(true);

  // 概率不在1-5，则永远无法命中
  if ([1, 2, 3, 4, 5].indexOf(rate) < 0) return callback(false);
  var key = 'simple_bucket_' + rate;

  __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].get(key, maxAge, function (err, value) {
    // 发生错误，直接认为未命中
    if (err) return callback(false);
    // 已经指定了数据
    if (value != undefined) return callback(!!~~value);

    // 如果没有读到，则生成一个随机数，同时将这个随机数写入到分桶中
    value = ~~(Math.random() * 10 <= rate);
    __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].set(key, value).then(function (err1) {
      callback(err1 ? false : !!~~value);
    });
  });
};

/* harmony default export */ __webpack_exports__["a"] = ({
  extractParam: extractParam,
  hitBucketA: hitBucketA,
  extractSpm: extractSpm,
  getConfig: getConfig,
  isResource: isResource,
  getMode: getMode,
  getSpm: getSpm,
  days2ms: days2ms,
  CID: CID,
  CACHE: CACHE,
  ERR: ERR,
  matchRate: matchRate,
  chance: chance,
  filterValue: filterValue,
  objectToParam: objectToParam,
  visitCounter: visitCounter,
  send: send,
  sendARMS: sendARMS
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(0);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * Created by 易晓峰(林异)<yxf@106063@alibaba-inc.com> on 07/02/2018.
 */



/**
 * 遍历性能的Entity
 * @param max
 * @param cb
 */
var eachEntity = function eachEntity(cb) {
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.MAX_VALUE;

  var performance = getPerformance();
  if (!performance.getEntries) return;
  var entries = performance.getEntries() || [];
  if (!entries.length) return;

  for (var i = 0; i < Math.min(entries.length, max); i++) {
    var entity = entries[i];
    cb && cb(entity);
  }
};

/**
 * 获取performance
 */
function getPerformance() {
  return window.performance || window.webkitPerformance || window.msPerformance || window.mozPerformance || {};
}

/**
 * 获取首屏曝光的时间
 * @param {Date | Number} exposedTime - 指定首屏出现的时间或者直接指定首屏的毫秒数
 * @param {Number} navigationStart - performance.timing.navigationStart
 */
var getExposedTime = function getExposedTime(exposedTime, navigationStart) {
  // 如果指定的时间小于1个小时的毫秒数，则认为这个时间是直接指定了秒数
  if (exposedTime > 0 && exposedTime < 1 * 60 * 60 * 1000) return exposedTime;
  return exposedTime ? __WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].filterValue(exposedTime - navigationStart) : undefined;
};

/**
 * 收集性能数据
 * @param performance - performance的对象
 * @param exposedTime - 真实的渲染时间
 * @returns {{fetch, dns, tcp, ttfb, fbyte, html, load, netType, exposed, new: string, group: *}}
 */
var analysis = function analysis(exposedTime) {
  var performance = getPerformance();
  var timing = performance.timing;
  var performanceNavigationTiming = void 0;
  var fcp = void 0;

  try {
    performanceNavigationTiming = performance.getEntriesByType('navigation')[0];
    var fcpEntry = performance.getEntriesByType('paint')[1];
    if (fcpEntry.name === 'first-contentful-paint') {
      fcp = Math.floor(fcpEntry.startTime);
    }
  } catch (e) {}
  if (!timing) return;

  if (!performanceNavigationTiming) {

    return {
      //ssl链接时间
      ssl: __WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].filterValue(timing.connectEnd - timing.secureConnectionStart),
      //网络相关的时间，从开始到最后下载完成
      network: __WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].filterValue(timing.responseEnd - timing.navigationStart),
      fetch: __WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].filterValue(timing.fetchStart - timing.navigationStart),
      dns: __WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].filterValue(timing.domainLookupEnd - timing.domainLookupStart),
      tcp: __WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].filterValue(timing.connectEnd - timing.connectStart),
      ttfb: __WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].filterValue(timing.responseStart - timing.requestStart),
      html: __WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].filterValue(timing.domContentLoadedEventEnd - timing.navigationStart),
      download: __WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].filterValue(timing.responseEnd - timing.responseStart),
      // 渲染
      load: __WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].filterValue(timing.loadEventEnd - timing.navigationStart),
      // 真实的渲染时间
      exposed: getExposedTime(exposedTime, timing.navigationStart),
      fcp: fcp,
      blocking: __WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].filterValue(timing.requestStart - timing.connectEnd),
      appcache: __WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].filterValue(timing.domainLookupStart - timing.fetchStart)
    };
  } else {
    var serverTimingEntries = performanceNavigationTiming.serverTiming;
    var serverTiming = {};
    if (serverTimingEntries && serverTimingEntries.length > 0) {
      for (var _iterator = Object.keys(serverTimingEntries), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var key = _ref;

        var entry = serverTimingEntries[key];
        serverTiming['s_' + entry.name] = entry.description || __WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].filterValue(entry.duration);
      }
    }

    return _extends({
      //ssl链接时间
      ssl: __WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].filterValue(timing.connectEnd - timing.secureConnectionStart),
      //网络相关的时间，从开始到最后下载完成
      network: __WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].filterValue(performanceNavigationTiming.responseEnd),
      fetch: __WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].filterValue(performanceNavigationTiming.fetchStart),
      dns: __WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].filterValue(performanceNavigationTiming.domainLookupEnd - performanceNavigationTiming.domainLookupStart),
      tcp: __WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].filterValue(performanceNavigationTiming.connectEnd - performanceNavigationTiming.connectStart),
      ttfb: __WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].filterValue(performanceNavigationTiming.responseStart - performanceNavigationTiming.requestStart),
      html: __WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].filterValue(performanceNavigationTiming.domContentLoadedEventEnd - performanceNavigationTiming.navigationStart),
      download: __WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].filterValue(performanceNavigationTiming.responseEnd - performanceNavigationTiming.responseStart),
      // 渲染
      load: __WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].filterValue(performanceNavigationTiming.loadEventEnd),
      // 真实的渲染时间
      exposed: getExposedTime(exposedTime, timing.navigationStart),
      fcp: fcp
    }, serverTiming, {

      blocking: __WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].filterValue(timing.requestStart - timing.connectEnd),
      appcache: __WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].filterValue(timing.domainLookupStart - timing.fetchStart)

    });
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  analysis: analysis,
  getPerformance: getPerformance,
  eachEntity: eachEntity
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__initial__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__initial___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__initial__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__perf__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api__ = __webpack_require__(10);





var BigBrother = {
  common: __WEBPACK_IMPORTED_MODULE_1__common__["a" /* default */],
  api: __WEBPACK_IMPORTED_MODULE_3__api__["a" /* default */],
  performance: __WEBPACK_IMPORTED_MODULE_2__perf__["a" /* default */]
};

(function () {
  window.BigBrother = BigBrother;

  // 检查window.__BB是否已经设置自动上报
  var bb = window.__BB;
  if (!bb) return;

  if (bb.autoReportPerf) __WEBPACK_IMPORTED_MODULE_2__perf__["a" /* default */].autoReport();
  if (bb.autoReportAPI) __WEBPACK_IMPORTED_MODULE_3__api__["a" /* default */].autoReport();
})();

/* harmony default export */ __webpack_exports__["default"] = (BigBrother);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

/**
 * Created by 易晓峰(林异)<yxf@106063@alibaba-inc.com> on 28/10/2018.
 */
// 提前预捕获api的信息，最好是放在最前面

(function (w) {
  var cache = w.__BIG_BROTHER__;
  if (!w.__BIG_BROTHER__) cache = w.__BIG_BROTHER__ = {};

  // 绑定事件，将数据放到配置
  var eventHandler = function eventHandler(e) {
    cache[e.type] = Date.now();
  };

  /**
   * 初始化与事件绑定相关的
   */
  var initEvent = function initEvent() {
    if (cache.initEvent) return;
    cache.initEvent = true;

    // 绑定事件
    var addEvent = w.addEventListener || w.attachEvent;
    ['click', 'keydown', 'touchstart', 'scroll'].forEach(function (event) {
      addEvent(event, eventHandler, { once: true });
    });
  };

  /**
   * 初始化与API相关的
   */
  var initAPI = function initAPI() {
    // 提前预置处理api
    var PO = w.PerformanceObserver;
    if (!PO) return;

    // 已经提前预捕获，则不要处理
    if (cache.preCatchAPI) return;
    cache.preCatchAPI = true;

    cache.items = [];
    // 建立捕获函数
    var observer = new PO(function (list) {
      // 防止某些浏览器可能没有这个方法
      if (typeof list.getEntries !== 'function') return;

      var entries = list.getEntries();
      for (var i = 0; i < entries.length; i++) {
        var current = entries[i] || {};
        var name = current.name;

        // 暂时去掉alicdn和mmstat的这部分

        if (name && !/(\.alicdn\.com)|(\.mmstat\.com)/ig.test(name)) {
          cache.items.push(current);
        }
      }

      // 如果已经存在触发事件，则调用触发事件
      if (cache.apiTrigger) cache.apiTrigger();
    });

    // 指定要监测的类型
    observer.observe({
      entryTypes: ['resource']
    });
  };

  initAPI();
  initEvent();
})(window);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alife_bc_store_proxy__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alife_bc_store_proxy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__alife_bc_store_proxy__);
/**
 * t by 易晓峰(林异)<yxf@106063@alibaba-inc.com> on 28/10/2018.
 */

var NORMAL_KEY = 'bb.normal';

/**
 * 判断是否为函数
 * @param fn
 * @returns {boolean}
 */
var isFunction = function isFunction(fn) {
  return typeof fn === 'function';
};

/**
 * 通过proxy
 * @param callback
 */
var getStoreProxy = function getStoreProxy(callback) {
  __WEBPACK_IMPORTED_MODULE_0__alife_bc_store_proxy___default.a.get(NORMAL_KEY, function (err, data) {
    if (err || !data) return callback(err);
    var result = JSON.parse(data);
    //兼容
    return callback(null, result === true ? null : result);
  });
};

/**
 * 获取数据
 * @param key
 * @param callback
 */
var get = function get(key, maxAge, callback) {
  try {
    if (isFunction(maxAge)) {
      callback = maxAge;
      maxAge = false;
    }

    getStoreProxy(function (err, data) {
      // 获取错误
      if (err || !data || data === true) return callback(err);

      var current = data[key] || {};
      var t = current.t,
          d = current.d;

      // 没有指定maxAge，则表示可长期存在，直接返回

      if (maxAge === false) return callback(null, d);

      // 检查是否过期，如果过期则删除
      var duration = Date.now() - t;

      if (duration > maxAge) {
        // 删除当前的数据
        delete data[key];

        // 保存删除之后的数据
        __WEBPACK_IMPORTED_MODULE_0__alife_bc_store_proxy___default.a.set(NORMAL_KEY, JSON.stringify(data), callback);
      }

      // 没有过期，直接返回数据
      callback(null, d);
    });
  } catch (e) {
    callback(e);
  }
};

/**
 * 保存内容
 * @param key - 要缓存的Key
 * @param data - 要缓存的数据
 * @param options
 * @param callback
 */
var set = function set(key, value, callback) {
  try {
    getStoreProxy(function (err, data) {
      if (err) return callback(err);

      data = data || {};
      data[key] = {
        t: Date.now(),
        d: value
      };

      var body = JSON.stringify(data);
      __WEBPACK_IMPORTED_MODULE_0__alife_bc_store_proxy___default.a.set(NORMAL_KEY, body, callback);
    });
  } catch (e) {
    callback(e);
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  set: set,
  get: get
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _messenger = __webpack_require__(7);

var _messenger2 = _interopRequireDefault(_messenger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function attachEvent(el, t, h) {
    if (el.addEventListener) {
        el.addEventListener(t, h, false);
    } else if (el.attachEvent) {
        el.attachEvent('on' + t, h);
    }
}

// 暂时不打算提供接口修改
var proxyUrl = '//is.alicdn.com/js/6v/biz/common/store-proxy/store-proxy2.html?iframe_delete=true';

// 分隔符
var spe2c = '-_-';
var spe2p = 'T_T';

// 创建 iframe
if (typeof window.__StoreProxyReady3 == 'undefined') {
    window.__StoreProxyReady3 = false;
}
var ready = window.__StoreProxyReady3;

if (typeof window.__StoreProxyExec3 == 'undefined') {
    window.__StoreProxyExec3 = [];
}
var exec = window.__StoreProxyExec3;

function createIframe(callback) {
    var id = 'localstorage-proxy-ifr-alibabadotcom3';
    var el = document.getElementById(id);

    // 已经存在
    if (el) {
        ready = window.__StoreProxyReady3;
        if (!ready) {
            exec.push(callback);
        } else {
            callback(el);
        }
        return;
    }
    //-------------不存在就创建之

    // 追加 iframe_delete
    if (proxyUrl.indexOf('iframe_delete') === -1) {
        proxyUrl += proxyUrl.indexOf('?') > -1 ? '&' : '?';
        proxyUrl += 'iframe_delete=true';
    }

    // 创建iframe
    el = document.createElement('iframe');
    el.id = id;
    el.src = proxyUrl;

    el.style.display = 'none';
    el.style.visibility = "hidden";

    var time;

    time = setInterval(function () {
        if (el && el.contentWindow && el.Messenger) {
            for (var i = 0, l = exec.length; i < l; i++) {
                exec[i](el);
            }
            exec.length = 0;
            window.__StoreProxyReady3 = ready = true;

            clearInterval(time);
            time = 0;
        }
    }, 50);

    attachEvent(el, "load", function () {
        if (time) {
            clearInterval(time);
            time = 0;
        }

        if (window.__StoreProxyReady3) {
            ready = true;
            return;
        }

        for (var i = 0, l = exec.length; i < l; i++) {
            exec[i](el);
        }
        exec.length = 0;
        window.__StoreProxyReady3 = ready = true;
    });

    exec.push(callback);
    document.body.appendChild(el);
}

// 获取 messenger 及 消息构成
var messenger;
var cbs = {};
var uid = 0;
function getMessenger(callback) {
    callback = callback || function () {};

    if (messenger) {
        callback(messenger);
        return;
    }
    // 注册
    createIframe(function (el) {
        if (messenger) {
            callback(messenger);
            return;
        }
        messenger = new _messenger2['default']('parent', 'store-proxy');
        messenger.addTarget(el.contentWindow, 'proxy');
        // 监听接口
        messenger.listen(function (msg) {
            parseMsg(msg);
        });
        callback(messenger);
    });
}

function getMsg(op, name, value, callback) {
    var msg = [op, name, value];
    if (op != 'set') {
        callback = value;
        msg.pop();
        msg.push(uid++);
    }

    msg = msg.join(spe2c);
    //cbs[msg] = [op, callback];
    cbs[msg] = callback;

    return msg;
}
function parseMsg(msg) {
    var err, data;
    var tmp = msg.split(spe2p);

    msg = tmp[0];
    err = tmp[1] || null;
    data = tmp[2] || undefined;

    if (cbs[msg]) {
        cbs[msg](err, data);
    }
}

// 默认加载
// getMessenger();


exports['default'] = {
    // 根据键名获取存储的值
    get: function get(name) {
        var options, callback;

        if (arguments.length > 1) {
            if (isFunction(arguments[arguments.length - 1])) {
                callback = arguments[arguments.length - 1];
            }

            if (arguments[1] !== callback) {
                options = arguments[1];
            }
        }
        /* else {
         throw new Error('Parameters are not legitimate in "storeProxy2.get"');
         }*/

        // 发信息
        getMessenger(function (messenger) {
            messenger.targets['proxy'].send(getMsg('get', name, function (err, data) {
                // 检验 value
                if (!err && options && options.filter) {
                    data = options.filter(data);
                }

                callback(err, data);
            }));
        });
    },

    // 设置数据
    set: function set(name, value) {
        var options, callback;

        if (arguments.length > 2) {
            if (isFunction(arguments[arguments.length - 1])) {
                callback = arguments[arguments.length - 1];
            }

            if (arguments[2] !== callback) {
                options = arguments[2];
            }
        }
        /* else {
         throw new Error('Parameters are not legitimate in "storeProxy2.set"');
         }*/

        // 检验 value
        if (options && options.filter) {
            value = options.filter(value);
        }

        if (!isString(value)) {
            throw new Error('value must be String in "storeProxy2.set"!');
        }

        // 发信息
        getMessenger(function (messenger) {
            messenger.targets['proxy'].send(getMsg('set', name, value, callback));
        });
    },

    // 移除指定键名的存储
    remove: function remove(name, callback) {
        // 发信息
        getMessenger(function (messenger) {
            messenger.targets['proxy'].send(getMsg('remove', name, callback));
        });
    }
};

//-----helper

function isFunction(val) {
    return Object.prototype.toString.call(val) === '[object Function]';
}

function isString(val) {
    return Object.prototype.toString.call(val) === '[object String]';
}
module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 *     __  ___
 *    /  |/  /___   _____ _____ ___   ____   ____ _ ___   _____
 *   / /|_/ // _ \ / ___// ___// _ \ / __ \ / __ `// _ \ / ___/
 *  / /  / //  __/(__  )(__  )/  __// / / // /_/ //  __// /
 * /_/  /_/ \___//____//____/ \___//_/ /_/ \__, / \___//_/
 *                                        /____/
 *
 * @description MessengerJS, a common cross-document communicate solution.
 * @author biqing kwok
 * @version 2.0
 * @license release under MIT license
 */

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function () {

    // 消息前缀, 建议使用自己的项目名, 避免多项目之间的冲突
    var prefix = "icbu-messenger",
        supportPostMessage = 'postMessage' in window;

    // Target 类, 消息对象
    function Target(target, name) {
        var errMsg = '';
        if (arguments.length < 2) {
            errMsg = 'target error - target and name are both required';
        } else if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) != 'object') {
            errMsg = 'target error - target itself must be window object';
        } else if (typeof name != 'string') {
            errMsg = 'target error - target name must be string type';
        }
        if (errMsg) {
            throw new Error(errMsg);
        }
        this.target = target;
        this.name = name;
    }

    // 往 target 发送消息, 出于安全考虑, 发送消息会带上前缀
    if (supportPostMessage) {
        // IE8+ 以及现代浏览器支持
        Target.prototype.send = function (msg) {
            this.target.postMessage(prefix + msg, '*');
        };
    } else {
        // 兼容IE 6/7
        Target.prototype.send = function (msg) {
            var targetFunc = window.navigator[prefix + this.name];
            if (typeof targetFunc == 'function') {
                targetFunc(prefix + msg, window);
            } else {
                throw new Error("target callback function is not defined");
            }
        };
    }

    // 信使类
    // 创建Messenger实例时指定, 必须指定Messenger的名字, (可选)指定项目名, 以避免Mashup类应用中的冲突
    // !注意: 父子页面中projectName必须保持一致, 否则无法匹配
    function Messenger(messengerName, projectName) {
        this.targets = {};
        this.name = messengerName;
        this.listenFunc = [];
        prefix = projectName || prefix;
        this.initListen();
    }

    // 添加一个消息对象
    Messenger.prototype.addTarget = function (target, name) {
        var targetObj = new Target(target, name);
        this.targets[name] = targetObj;
    };

    // 初始化消息监听
    Messenger.prototype.initListen = function () {
        var self = this;
        var generalCallback = function generalCallback(msg) {
            if ((typeof msg === 'undefined' ? 'undefined' : _typeof(msg)) == 'object' && msg.data) {
                msg = msg.data;
            }
            // 剥离消息前缀
            if (typeof msg === 'string' && msg.indexOf(prefix) != -1) {
                msg = msg.slice(prefix.length);
                for (var i = 0; i < self.listenFunc.length; i++) {
                    self.listenFunc[i](msg);
                }
            }
        };

        if (supportPostMessage) {
            if ('addEventListener' in document) {
                window.addEventListener('message', generalCallback, false);
            } else if ('attachEvent' in document) {
                window.attachEvent('onmessage', generalCallback);
            }
        } else {
            // 兼容IE 6/7
            window.navigator[prefix + this.name] = generalCallback;
        }
    };

    // 监听消息
    Messenger.prototype.listen = Messenger.prototype.on = function (callback) {
        this.listenFunc.push(callback);
    };
    // 注销监听
    Messenger.prototype.clear = function () {
        this.listenFunc = [];
    };
    // 广播消息
    Messenger.prototype.send = function (msg) {
        var targets = this.targets,
            target;
        for (target in targets) {
            if (targets.hasOwnProperty(target)) {
                targets[target].send(msg);
            }
        }
    };

    return Messenger;
}();

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__speed__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__perf_core__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * Created by 易晓峰(林异)<yxf@106063@alibaba-inc.com> on 10/01/2018.
 */




// 是否已经上报
var REPORTED = false;

/**
 * 获取总文件大小，缓存大小，总文件数量，缓存数量
 */
var getCacheInfo = function getCacheInfo() {
  // CacheSize, TotalSize, CacheFile, TotalFile
  var cs = 0,
      ts = 0,
      cf = 0,
      tf = 0;

  __WEBPACK_IMPORTED_MODULE_2__perf_core__["a" /* default */].eachEntity(function (entity) {
    var initiatorType = entity.initiatorType,
        name = entity.name,
        transferSize = entity.transferSize,
        encodedBodySize = entity.encodedBodySize;

    // 仅检查alicdn下，非图片的资源

    if (!__WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].isResource(name) || initiatorType === 'img') return;

    if (!encodedBodySize || encodedBodySize <= 0) return;

    tf++;
    ts += transferSize;

    // 有缓存
    if (transferSize === 0) {
      cs += encodedBodySize;
      cf++;
    }
  });

  return {
    cs: parseInt(cs / 1024),
    ts: parseInt(ts / 1024),
    cf: cf,
    tf: tf
  };
};

/**
 * 获取用户自定义的时间点
 * @param times
 * @returns {{}}
 */
var reviseCustomTimes = function reviseCustomTimes(times) {
  var result = {};
  if (!(times instanceof Array)) return result;

  // 处理自定义的时间点
  for (var i = 0; i < Math.min(times.length, 10); i++) {
    var value = parseInt(times[i]);
    if (isNaN(value)) value = 0;

    result['s' + i] = value;
  }

  return result;
};

/**
 * 快速手动打点，通过监测BB_EXPOSE的变化来确定手动打点
 */
var reportWithObserve = function reportWithObserve() {
  var index = 0;

  var execute = function execute() {
    var exposed = __WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].getConfig('exposed', false);

    // 等待用户指定exposed的时间来确定打点
    if (exposed) {
      report(exposed);
      return;
    }

    // 超过指定次数，直接获取onLoad的时间，不指定exposed的时间
    if (index++ > 60) {
      report(null, null, _extends({
        reason: __WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].ERR.timeout,
        exposed: -1
      }));
      return;
    }

    // 定时检测exposed是否存在
    window.setTimeout(function () {
      execute();
    }, 1000);
  };

  execute();
};

/**
 * 根据Mode来确定如何上报数据
 */
var autoReport = function autoReport() {
  switch (__WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].getMode()) {
    case -1:
      // 观察者模式
      reportWithObserve();
      break;
    // 1不处理
    case 1:
      break;
    // 默认是自动打点
    default:
      // 自动打点模式
      report();
      break;
  }
};

/**
 * 手动上报
 */
function report(exposedTime, customTimes, extend) {
  var bb = window.__BB || {};
  // 收集
  var data = __WEBPACK_IMPORTED_MODULE_2__perf_core__["a" /* default */].analysis(exposedTime);
  // 没有取到正常的数据
  if (!data) return;

  // 如果还没有取到load的数据1秒后再试。
  if (data.load === 0) {
    window.setTimeout(function () {
      report(exposedTime, customTimes, extend);
    }, 1000);
    return;
  }

  // 已经上报，不再处理
  if (REPORTED) return;

  var CACHE = __WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].CACHE;


  var spm = __WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].getSpm();

  // 获取访问次数是异步逻辑
  __WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].visitCounter(spm, function (visit) {
    _extends(data, reviseCustomTimes(__WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].getConfig('times', false) || customTimes), {
      mode: __WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].getMode(),
      spm: spm,
      source: CACHE.source,
      v: CACHE.version,
      // 群组
      group: __WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].getConfig('group'),
      // 统计方式的标识符
      stat_mode: __WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].getConfig('stat_mode'),
      // 用户的访问计数
      visit: visit
    }, extend, getCacheInfo(), Object(__WEBPACK_IMPORTED_MODULE_1__speed__["a" /* default */])());

    // 加入行为的时间收集
    var timing = __WEBPACK_IMPORTED_MODULE_2__perf_core__["a" /* default */].getPerformance().timing;

    if (timing && window.__BIG_BROTHER__) {
      // 收集用户首次交互时间
      ['click', 'keydown', 'touchstart', 'scroll'].forEach(function (event) {
        var value = window.__BIG_BROTHER__[event] - timing.navigationStart;
        if (!isNaN(value)) data[event] = value;
      });
    }

    // 给所有的 extendParams增加c_的前缀
    if (bb.extendParams) {
      for (var key in bb.extendParams) {
        data['c_' + key] = bb.extendParams[key];
      }
    }

    // 用于flasher的跟踪
    data.flasherTrace = window.$flasherTrace;
    data.flasherVersion = (window.Flasher || {}).version || '0.0.0'; // 上报flasher版本("0.0.0"代表不存在)
    data.flasherGroup = window.$flasherGroup || 'normal'; // 是否命中方案

    REPORTED = true;

    // 添加扩展参数进去
    __WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].send('performance', data);

    // 双发到 ARMS
    __WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].sendARMS(data);
  });
}

/* harmony default export */ __webpack_exports__["a"] = ({
  autoReport: autoReport,
  report: report
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__perf_core__ = __webpack_require__(2);
/**
 * Created by 易晓峰(林异)<yxf@106063@alibaba-inc.com> on 10/01/2018.
 */



/**
 * 计算速度，KB/s
 * @param size
 * @param duration
 */
var evalSpeed = function evalSpeed(size, duration) {
  var speed = size / 1024 / duration * 1000;
  return isNaN(speed) ? 0 : parseInt(speed);
};

/**
 * 提供网络探测功能，如果页面被缓存，则探测可能会不准确
 * @param {Number} max - 要遍历的entity数量，默认为全部
 * @returns {*}
 */
/* harmony default export */ __webpack_exports__["a"] = (function (max) {
  var totalSize = 0,
      totalDuration = 0;
  var temp = {};

  __WEBPACK_IMPORTED_MODULE_1__perf_core__["a" /* default */].eachEntity(function (entity) {
    var responseEnd = entity.responseEnd,
        connectStart = entity.connectStart,
        name = entity.name,
        transferSize = entity.transferSize;
    // 持续的时间

    var duration = responseEnd - connectStart;
    var size = transferSize || 0;
    if (size <= 0 || duration <= 0) return;

    var host = name.replace(/^(https?:\/\/)(.+?)\/(.+)?$/, '$2');

    // 仅处理静态文件服务器
    if (host && __WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].isResource(name)) {
      if (!temp[host]) {
        temp[host] = {
          size: size,
          duration: duration
        };
      } else {
        temp[host].size += size;
        temp[host].duration += duration;
      }
    }

    // 总大小
    totalSize += size;
    totalDuration += duration;
  }, max);

  var result = {
    avg: 0
  };

  // 没有取到正常的时长及大小
  if (totalDuration === 0 || totalSize === 0) {
    return result;
  }

  // 平均性能
  result.speed_avg = evalSpeed(totalSize, totalDuration);

  // 分host的性能
  for (var key in temp) {
    result['speed_' + key] = evalSpeed(temp[key].size, temp[key].duration);
  }

  return result;
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(0);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * Created by 易晓峰(林异)<yxf@106063@alibaba-inc.com> on 10/01/2018.
 */
// API打点


/**
 * 收集API的性能数据
 * @param {Date} startTime - 开始时间
 * @param {String} name - API的名称
 * @param {Number} status - API的状态，0表示失败，1表示成功
 * @param {String} group - 分组，用于做AB测试
 */
var send = function send(duration, name, status, extend) {
  var ext = _extends({
    v: __WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].CACHE.version,
    source: __WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].CACHE.source,
    spm: __WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].getSpm(),
    name: name,
    duration: duration,
    group: __WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].getConfig('group'),
    // 统计方式的标识符
    stat_mode: __WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].getConfig('stat_mode'),
    status: status
  }, extend);

  __WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].send('api', ext);
};

/**
 * 调用API成功
 * @param {Date} startTime - 请求API开始的时间
 * @param {String} name - API的名字
 * @param {String} group - 用于做AB测试
 */
var success = function success(duration, name, extend) {
  send(duration, name, 1, extend);
};

/**
 * 调用API失败
 * @param {Date} startTime - 请求API的开始时间
 * @param {String} name - API的名字
 */
var error = function error(duration, name, extend) {
  send(duration, name, 0, extend);
};

/**
 * 根据URL识别API的名称
 * @param url
 */
var detectName = function detectName(url) {
  // 从url中提取名称
  var apiName = __WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].extractParam(url, '__bb_name__');
  // url中的名称可能已经经过encode
  if (apiName) return decodeURIComponent(apiName);

  // 如果url中没有包含api的名称，则取url地址
  var result = url.match(/^https?:\/\/(.+?)(?=[\?#])/);
  return result && result[1] || url;
};

/**
 * 判断一个entity是否为API请求
 * @param entity
 */
var isAPI = function isAPI(entity) {
  var name = entity.name,
      initiatorType = entity.initiatorType;
  // 如果在url中直接指定了__bb_name__，则认为这是一个api

  if (/__bb_name__/.test(name)) return true;

  // alicdn.com不可能是一个api
  if (/alicdn\.com/.test(name)) return false;

  // url中包含callback，则认为是一个api
  if (/callback=/.test(name)) return true;

  // 异步加载的时候，如果使用window.fetch，在chrome浏览器下，是没有initiatorType的
  if (!initiatorType && !/\.((js)|(png)|(jpe?g)|(webp)|(html?)|(css)|(gif)|(woff))/.test(name)) return true;

  // ajax
  if (initiatorType === 'xmlhttprequest' && !/\.js/) return true;
};

// 上报某个entity
var report = function report(entity) {
  // connectEnd, connectStart, domainLookupEnd,domainLookupStart
  var name = entity.name,
      responseStart = entity.responseStart,
      requestStart = entity.requestStart,
      duration = entity.duration;

  var ttfb = __WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].filterValue(responseStart - requestStart);
  // const connect = _common.filterValue(connectEnd - connectStart) + _common.filterValue(domainLookupEnd - domainLookupStart);

  var extend = {
    ttfb: ttfb
    // connect
  };

  success(__WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].filterValue(duration), detectName(name), extend);
};

/**
 * 在自动上报API性能的过程中，检查是否需要上报
 * @param entity
 * @param options
 * @returns {boolean}
 */
var canIReport = function canIReport(entity, options) {
  var name = entity.name;
  // 没有URL不上报

  if (!name) return;

  // 根据URL来判断是否可以上报
  // if (!checkWithUrl(name)) return;

  var disable = __WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].extractParam(name, '__bb_disable__');

  // 检查url中是否包含禁止上报的参数
  if (disable === '1') return;

  // 检查url中是否包含比例，如果有，则用随机数来判断是否合乎比例
  var rate = parseInt(__WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].extractParam(name, '__bb_rate__'));
  if (isNaN(rate)) rate = options.rate;

  if (__WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */].matchRate(rate)) report(entity);
};

/**
 * 自动探测API的性能，当API发生变化的时候，提交数据
 */
var reportWithObserve = function reportWithObserve(options) {
  if (!window.__BIG_BROTHER__) window.__BIG_BROTHER__ = {};
  var isRunning = false;

  // 定义可触发的事件
  window.__BIG_BROTHER__.apiTrigger = function () {
    // 已经在执行中
    if (isRunning) return;
    isRunning = true;

    var exists = false;
    do {
      var items = window.__BIG_BROTHER__.items || [];
      var last = items.pop();

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

var autoReport = function autoReport(options) {
  var ops = _extends({
    rate: 100
  }, options);

  // 不在前面做概率的限制，因为需要从url中读取上报概率
  reportWithObserve(ops);
};

/* harmony default export */ __webpack_exports__["a"] = ({
  send: send,
  detectName: detectName,
  autoReport: autoReport,
  error: error,
  success: success
});

/***/ })
/******/ ]);


// WEBPACK FOOTER //
// 2.x/index.js