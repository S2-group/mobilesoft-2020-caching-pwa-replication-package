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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return chromeVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return firefoxVersion; });
var ua = navigator.userAgent.toLowerCase();

var SAFARI = 'Safari';
var DATA_BROWSER = {
  Trident: 'IE',
  OPR: 'Opera',
  UBrowser: 'UC',
  MetaSr: 'Sogou',
};

var REG_MAIN = /(Firefox|Trident|Edge)/ig;
var REG_SAFARI = new RegExp(("(" + SAFARI + ")"), 'ig');
var REG_CHROME_BRS = /(OPR|Maxthon|QIHU 360SE|QIHU 360EE|QQBrowser|UBrowser|MetaSr|2345Explorer)/ig;
var REG_CHROME = /(Chrome|Chromium)/ig;

var type = 'NA';
var rt = REG_MAIN.exec(ua) || REG_SAFARI.exec(ua);
if (rt) {
  type = rt[0];
  if (type === SAFARI) {
    rt = REG_CHROME_BRS.exec(ua) || REG_CHROME.exec(ua);
    if (rt) {
      type = rt[0];
    }
  }
  type = DATA_BROWSER[type] || type;
}

var browserType = type;

/* harmony default export */ __webpack_exports__["b"] = (browserType);

function getChromeVersion() {
  var raw = ua.match(/Chrom(e|ium)\/([0-9]+)\./i);
  return raw ? parseInt(raw[2], 10) : false;
}

function getFirefoxVersion() {
  var raw = ua.match(/firefox\/([\d\.]+)/i);
  return raw ? parseInt(raw[1], 10) : false;
}

var chromeVersion = getChromeVersion();
var firefoxVersion = getFirefoxVersion();




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getLoginStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getMemberSeq; });
function parseCookieString(sName) {
  var sRE = "[; ]?" + sName + "=([^;]*)";
  var oRE = new RegExp(sRE);
  if (oRE.test(document.cookie)) {
    return decodeURIComponent(RegExp.$1);
  }
  return null;
}

function getMemberSeq() {
  var memberSeq = '';
  var userCookie = parseCookieString('xman_us_f');
  var userReg = /x_user=([^&"]+)/;
  if (userCookie && userReg.test(userCookie)) {
    userCookie.match(userReg);
    userCookie = RegExp.$1;
    userCookie = userCookie.split('|');

    if (userCookie.length >= 5) {
      memberSeq = userCookie[4];
    }
  }
  return memberSeq;
}

function getLoginStatus() {
  var loginStatus = false;
  var userCookie = parseCookieString('xman_us_t');
  if (userCookie) {
    if (userCookie.indexOf('&sign=y&') > -1) {
      loginStatus = true;
    }
  }
  return loginStatus;
}

/* unused harmony default export */ var _unused_webpack_default_export = (parseCookieString);



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_browser_info__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_logger__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_loadjs_browser__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__const_res_url__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_store_store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_cookie_browser__ = __webpack_require__(1);
/*
 * Alibaba Cloud Messaging for browser launcher
 * @file acm-launcher.js
 * @author nuo.xun@alibaba-inc.com
 * @date 2017.2.22
 */








/**
 * sufei setting.
 */
window.sufei_jsonp_ignore = [/googleapis\.com/];

/**
 * Check if the browser supports push-notifications
 */
var isSupportACM = function isSupportACM() {
  if (location.search.indexOf('debug') !== -1) {
    return true;
  }

  return (__WEBPACK_IMPORTED_MODULE_0__util_browser_info__["a" /* chromeVersion */] >= 50 || __WEBPACK_IMPORTED_MODULE_0__util_browser_info__["c" /* firefoxVersion */] > 44)
    && 'serviceWorker' in navigator
    && 'PushManager' in window
    && 'showNotification' in ServiceWorkerRegistration.prototype
    && Notification.permission !== 'denied'
    && location.host.indexOf('.alibaba.com') > -1
    && location.protocol === 'https:';
};

/**
 * get endpoint
 */
var getEndpoint = function (callback) {
  __WEBPACK_IMPORTED_MODULE_4__util_store_store__["a" /* default */].get('ACM:endpoint', callback);
};

/**
 * get ctoken
 */
var getCtoken = function getCtoken() {
  var cookie = document.cookie;
  var match = cookie && cookie.match(/(?:^|;)\s*xman_us_t\s*=\s*([^;]+)/);
  if (match) {
    match = match[1].match(/(?:^|&)\s*ctoken\s*=\s*([^&]+)/);
  }
  var ctoken = window._intl_csrf_token_ || (match && match[1]);
  return ctoken;
};

var hostname = location.hostname;

/**
 * update subscribe 
 */
var registerSubscribe = function (endpoint, isUpdate) {
  var ctoken = getCtoken() || '';

  var fetchUrl = "//m.alibaba.com/api/push/register.do?endPoint=" + endpoint + "&from=" + hostname + "&ctoken=" + ctoken + "&browserType=" + __WEBPACK_IMPORTED_MODULE_0__util_browser_info__["b" /* default */];

  var fetchInit = {
    method: 'GET',
    headers: {
      pragma: 'no-cache',
      'cache-control': 'no-cache',
    },
    mode: 'no-cors',
  };

  fetch(fetchUrl, fetchInit).then(function () {
    // trigger event: acm:successRegister
    document.dispatchEvent(new CustomEvent(isUpdate ? 'ACM:successUpdateRegister' : 'ACM:successRegister',
      { detail: { endpoint: endpoint } }));
  });
};

/**
 * show the subscribe popup
 */
var subscribePopup = function subscribePopup() {
  if (isSupportACM()) {
    if (Notification.permission === 'default') {
      // unregister
      // 用户修改了消息推送授权，或者重置了浏览器设置，需要清理历史遗留的endpoint和serviceworker
      navigator.serviceWorker.getRegistrations().then(function (registrations) {
        for (var _i = 0, registrations1 = registrations; _i < registrations1.length; _i++) {
          var registration = registrations1[_i];
          if (registration.scope === ("https://" + hostname + "/firebase-cloud-messaging-push-scope")) {
            registration.unregister();
          }
        }
      });
    }

    // load
    Object(__WEBPACK_IMPORTED_MODULE_2__util_loadjs_browser__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_3__const_res_url__["a" /* default */], function () {
      if (Notification.permission === 'default') {
        document.dispatchEvent(new CustomEvent('ACM:subscribePopupLoadedAcmCoreFile'));
      }

      var messaging = window.firebase.messaging();

      // show notification when page has been opened
      messaging.onMessage(function (payload) {
        // 浏览当前页面时显示推送通知
        try {
          var notificationData = payload.notification || payload.data || {};

          if (notificationData) {
            // always show the notification
            var notificationTitle = notificationData.title;
            var notificationOptions = {
              body: notificationData.body,
              icon: notificationData.icon ? notificationData.icon : 'https://gw.alicdn.com/tps/TB1c7muMpXXXXccXVXXXXXXXXXX-96-96.png',
              click_action: notificationData.click_action,
            };

            var notification = new Notification(notificationTitle, notificationOptions);

            notification.onclick = function (event) { // eslint-disable-line
              event.preventDefault();
              __WEBPACK_IMPORTED_MODULE_1__util_logger__["a" /* default */].log('On notification click: ', event);
              notification.close();
              window.open(notificationData.click_action);
            };
          }
        } catch (e) {
          __WEBPACK_IMPORTED_MODULE_1__util_logger__["a" /* default */].error('show notification error:', e);
        }
      });

      if (Notification.permission === 'default') {
        messaging.requestPermission().then(function () { return messaging.getToken(); }).then(function (endpoint) {
          // write to store
          __WEBPACK_IMPORTED_MODULE_4__util_store_store__["a" /* default */].set('ACM:endpoint', endpoint, function () {
            // trigger event: ACM:getEndpoint
            document.dispatchEvent(new CustomEvent('ACM:getEndpoint', { detail: { endpoint: endpoint } }));

            // register
            registerSubscribe(endpoint);
          });
        }).catch(function (err) {
          __WEBPACK_IMPORTED_MODULE_1__util_logger__["a" /* default */].log(err);

          if (Notification.permission === 'denied') {
            // trigger event: ACM:denied
            document.dispatchEvent(new CustomEvent('ACM:denied'));
          } else {
            // trigger event: ACM:closed
            document.dispatchEvent(new CustomEvent('ACM:closed'));
          }

          __WEBPACK_IMPORTED_MODULE_1__util_logger__["a" /* default */].log(Notification.permission); // default / denied / 
          // case 交互设计
          __WEBPACK_IMPORTED_MODULE_1__util_logger__["a" /* default */].log('Subscribe error :(', err);
        });
      }
    });
  }
};

function updateRegister() {
  if (isSupportACM()) {
    // 获取endpoint，确认当前用户是否已注册
    // 或者当前用户是否已切换登录状态
    getEndpoint(function (error, endpoint) {
      document.dispatchEvent(new CustomEvent('ACM:updateRegister', {
        detail: { result: 'checkEndpoint' },
      }));
      if (endpoint) {
        document.dispatchEvent(new CustomEvent('ACM:updateRegister', {
          detail: { result: 'hadEndpoint' },
        }));

        __WEBPACK_IMPORTED_MODULE_4__util_store_store__["a" /* default */].get(endpoint, function (err, data) {
          var memberId = Object(__WEBPACK_IMPORTED_MODULE_5__util_cookie_browser__["b" /* getMemberSeq */])();
          var hadRegisted = data === memberId;
          if (memberId && !hadRegisted) {
            document.dispatchEvent(new CustomEvent('ACM:updateRegister', {
              detail: { result: 'update' },
            }));
            // 更新注册信息，将endpoint绑定到memberId
            registerSubscribe(endpoint, true);
            document.dispatchEvent(new CustomEvent('ACM:updateRegister', {
              detail: { result: 'updated' },
            }));
          }
        });
      }
    });
  }
}

function bindUsr() {
  getEndpoint(function (error, endpoint) {
    var memberSeq = Object(__WEBPACK_IMPORTED_MODULE_5__util_cookie_browser__["b" /* getMemberSeq */])();
    __WEBPACK_IMPORTED_MODULE_4__util_store_store__["a" /* default */].set(endpoint, memberSeq);
  });
}

if (document.addEventListener) {
  document.addEventListener('ACM:successRegister', function () {
    bindUsr();
  });

  document.addEventListener('ACM:successUpdateRegister', function () {
    bindUsr();
  });
}

var ACM = {
  isSupportACM: isSupportACM,
  registerSubscribe: registerSubscribe,
  subscribePopup: subscribePopup,
  getEndpoint: getEndpoint,
  updateRegister: updateRegister,
};

/* harmony default export */ __webpack_exports__["a"] = (ACM);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var logger = console || {
  log: function log() {},
  warn: function warn() {},
  error: function error() {},
};

/* harmony default export */ __webpack_exports__["a"] = (logger);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * loadJS
 * js loader
 * @param url
 * @param success
 */
function loadJS(url, success) {
  var domScript = document.createElement('script');
  domScript.crossOrigin = 'anonymous';
  domScript.async = true;
  domScript.src = url;
  success = success || function () {};
  domScript.onload = function () {
    if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') {
      success();
      this.onload = this.onreadystatechange = null;
      this.parentNode.removeChild(this);
    }
  };
  document.getElementsByTagName('head')[0].appendChild(domScript);
}

/* harmony default export */ __webpack_exports__["a"] = (loadJS);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ('//g.alicdn.com/ife/acm/1.0.6/firebase.js');


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_proxy__ = __webpack_require__(7);


var store = {
  get: function get(name, callback) {
    var value = __WEBPACK_IMPORTED_MODULE_0__store_proxy__["a" /* default */].get(name, callback);
    if (!value) {
      // 兼容老数据
      value = window.localStorage.getItem(name);
      // 迁移老数据，支持跨域名消息订阅
      if (value) {
        __WEBPACK_IMPORTED_MODULE_0__store_proxy__["a" /* default */].set(name, value);
      }
    }
    return value;
  },
  set: function set(name, value, callback) {
    __WEBPACK_IMPORTED_MODULE_0__store_proxy__["a" /* default */].set(name, value, callback);
  },
  remove: function remove(name, callback) {
    window.localStorage.removeItem(name);
    __WEBPACK_IMPORTED_MODULE_0__store_proxy__["a" /* default */].remove(name, callback);
  },
};

/* harmony default export */ __webpack_exports__["a"] = (store);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__messenger__ = __webpack_require__(8);


// 暂时不打算提供接口修改
var proxyUrl = '//is.alicdn.com/js/6v/biz/common/store-proxy/store-proxy2.html?iframe_delete=true';

// 分隔符
var spe2c = '-_-';
var spe2p = 'T_T';

// 创建 iframe
if (typeof window.__StoreProxyReady2 === 'undefined') {
  window.__StoreProxyReady2 = false;
}
var ready = window.__StoreProxyReady2;

if (typeof window.__StoreProxyExec2 === 'undefined') {
  window.__StoreProxyExec2 = [];
}
var exec = window.__StoreProxyExec2;

function getId(id) {
  return document.getElementById(id);
}

function createIframe(callback) {
  var id = 'localstorage-proxy-ifr-alibabadotcom2';
  var el = getId(id);

  // 已经存在
  if (el) {
    ready = window.__StoreProxyReady2;
    if (!ready) {
      exec.push(callback);
    } else {
      // 由于所有callback被注册到全局的数组__StoreProxyExec2中
      // 而callback中都假设传入的是jQuery对象
      // 所以为兼容这些场景，必须传入数组
      callback([el]);
    }
    return;
  }

  // -------------不存在就创建之

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
  el.style.visibility = 'hidden';

  var time;

  time = setInterval(function () {
    if (el && el.contentWindow && el.Messenger) {
      for (var i = 0, l = exec.length; i < l; i++) {
        // 由于所有callback被注册到全局的数组__StoreProxyExec2中
        // 当定时器执行时，会将el传入，而部分场景使用的仍然是jQuery
        // 所以为兼容这些场景，必须传入数组
        exec[i]([el]);
      }
      exec.length = 0;
      window.__StoreProxyReady2 = ready = true;

      clearInterval(time);
      time = 0;
    }
  }, 50);

  // load 事件
  el.onload = function () {
    if (time) {
      clearInterval(time);
      time = 0;
    }

    if (window.__StoreProxyReady2) {
      ready = true;
      return;
    }

    // 由于所有callback被注册到全局的数组__StoreProxyExec2中
    // 当定时器执行时，会将el传入，而部分场景使用的仍然是jQuery
    // 所以为兼容这些场景，必须传入数组
    for (var i = 0, l = exec.length; i < l; i++) {
      exec[i]([el]);
    }
    exec.length = 0;
    window.__StoreProxyReady2 = ready = true;
  };

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

    messenger = new __WEBPACK_IMPORTED_MODULE_0__messenger__["a" /* default */]('parent', 'store-proxy');
    // 由于所有callback被注册到全局的数组__StoreProxyExec2中
    // 当定时器执行时，会将el传入，而部分场景使用的仍然是jQuery
    // 所以为兼容这些场景，必须传入数组
    messenger.addTarget(el[0].contentWindow, 'proxy');

    // 监听接口
    messenger.listen(function (msg) {
      parseMsg(msg);
    });

    callback(messenger);
  });
}

function getMsg(op, name, value, callback) {
  var msg = [op, name, value];
  if (op !== 'set') {
    callback = value;
    msg.pop();
    msg.push(uid++); // eslint-disable-line
  }

  msg = msg.join(spe2c);
  cbs[msg] = callback;

  return msg;
}

function parseMsg(msg) {
  var tmp = msg.split(spe2p);

  msg = tmp[0];
  var err = tmp[1] || null;
  var data = tmp[2] || undefined;

  if (cbs[msg]) {
    cbs[msg](err, data);
  }
}

// -----helper
function isFunction(val) {
  return Object.prototype.toString.call(val) === '[object Function]';
}

function isString(val) {
  return Object.prototype.toString.call(val) === '[object String]';
}

var storeProxy = {
  // 根据键名获取存储的值
  get: function get() {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var options;
    var callback;
    var name = args[0];

    if (args.length > 1) {
      if (isFunction(args[args.length - 1])) {
        callback = args[args.length - 1];
      }

      if (args[1] !== callback) {
        options = args[1];
      }
    }

    callback = callback || function () {};
    // 发信息
    getMessenger(function (msger) {
      msger.targets.proxy.send(getMsg('get', name, function (err, data) {
        // 检验 value
        if (!err && options && options.filter) {
          data = options.filter(data);
        }

        callback(err, data);
      }));
    });
  },

  // 设置数据
  set: function set() {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var name = args[0];
    var value = args[1];
    var options;
    var callback;

    if (args.length > 2) {
      if (isFunction(args[args.length - 1])) {
        callback = args[args.length - 1];
      }

      if (args[2] !== callback) {
        options = args[2];
      }
    }

    callback = callback || function () {};

    // 检验 value
    if (options && options.filter) {
      value = options.filter(value);
    }

    if (!isString(value)) {
      throw new Error('value must be String in "storeProxy2.set"!');
    }

    // 发信息
    getMessenger(function (msger) {
      msger.targets.proxy.send(getMsg('set', name, value, callback));
    });
  },

  // 移除指定键名的存储
  remove: function remove(name, callback) {
    callback = callback || function () {};
    // 发信息
    getMessenger(function (msger) {
      msger.targets.proxy.send(getMsg('remove', name, callback));
    });
  },
};

/* harmony default export */ __webpack_exports__["a"] = (storeProxy);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// 消息前缀, 建议使用自己的项目名, 避免多项目之间的冲突
var prefix = 'icbu-messenger';
var supportPostMessage = 'postMessage' in window;

// Target 类, 消息对象
function Target(target, name) {
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
    if (typeof targetFunc === 'function') {
      targetFunc(prefix + msg, window);
    } else {
      throw new Error('target callback function is not defined');
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
  var generalCallback = function (msg) {
    if (typeof msg === 'object' && msg.data) {
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
  var targets = this.targets;
  targets.keys().forEach(function (target) { return targets[target].send(msg); });
};

/* harmony default export */ __webpack_exports__["a"] = (Messenger);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return acmLog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__browser_info__ = __webpack_require__(0);


var goldlog = window.goldlog || {
  record: function record(logkey, gmkey, gokey, chksum) {
    if (window.goldlog && window.goldlog.record) {
      window.goldlog.record(logkey, gmkey, gokey, chksum);
    } else {
      (window.goldlog_queue || (window.goldlog_queue = [])).push({
        action: 'goldlog.record',
        arguments: [logkey, gmkey, gokey, chksum],
      });
    }
  },
};

/* unused harmony default export */ var _unused_webpack_default_export = (goldlog);

var ua = window.navigator.userAgent;
var uaLogString = "&ua=" + ua;
var browser = __WEBPACK_IMPORTED_MODULE_0__browser_info__["b" /* default */];
var browserLogString = "&browser=" + browser;
var acmLog = function (gokey) {
  goldlog.record('/sc.13.1', 'OTHER', gokey + uaLogString + browserLogString, 'H1703600');
};




/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_cookie_browser__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_goldlog_browser__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__acm_browser__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__subscribe_popup_browser_subscribe_popup_browser__ = __webpack_require__(11);





function trackCookieEnabled() {
  var cookieEnabled = navigator.cookieEnabled;
  var cookieEnabledResult = 'unsupportCookieEnabled';
  if (typeof cookieEnabled === 'boolean') {
    cookieEnabledResult = cookieEnabled ? 'cookieEnabled' : 'cookieDisabled';
  }
  Object(__WEBPACK_IMPORTED_MODULE_1__util_goldlog_browser__["a" /* acmLog */])(("type=cookieEnabled&result=" + cookieEnabledResult));
}

function trackNotificationPermission() {
  if (__WEBPACK_IMPORTED_MODULE_2__acm_browser__["a" /* default */] && __WEBPACK_IMPORTED_MODULE_2__acm_browser__["a" /* default */].isSupportACM() && (window.Notification.permission === 'denied')) {
    var endpoint = __WEBPACK_IMPORTED_MODULE_2__acm_browser__["a" /* default */].getEndpoint();
    if (endpoint) {
      Object(__WEBPACK_IMPORTED_MODULE_1__util_goldlog_browser__["a" /* acmLog */])('type=manualDeny&result=manualDeny');
    }
  }
}

function trackLoginStatus() {
  var hasLogin = Object(__WEBPACK_IMPORTED_MODULE_0__util_cookie_browser__["a" /* getLoginStatus */])();
  var loginStatus = 'userNotLogin';
  if (hasLogin) {
    loginStatus = 'userHadLogin';
  }
  Object(__WEBPACK_IMPORTED_MODULE_1__util_goldlog_browser__["a" /* acmLog */])(("type=userLogin&result=" + loginStatus));
}

function trackCookieStatus() {
  var memberSeq = Object(__WEBPACK_IMPORTED_MODULE_0__util_cookie_browser__["b" /* getMemberSeq */])();
  var userCookieStatus = 'userNoneCookie';
  if (memberSeq) {
    userCookieStatus = 'userHasCookie';
  }
  Object(__WEBPACK_IMPORTED_MODULE_1__util_goldlog_browser__["a" /* acmLog */])(("type=userCookie&result=" + userCookieStatus));
}

function trackACMSupport() {
  // 区分用户无法授权的原因
  // 浏览器厂商、版本
  // 未使用https
  // 不在.alibaba.com下
  // 通知不支持
  // 通知已禁止、已授权
  if (__WEBPACK_IMPORTED_MODULE_2__acm_browser__["a" /* default */]) {
    if (__WEBPACK_IMPORTED_MODULE_2__acm_browser__["a" /* default */].isSupportACM()) {
      Object(__WEBPACK_IMPORTED_MODULE_1__util_goldlog_browser__["a" /* acmLog */])('type=isSupportACM&result=isSupportACM');
    } else {
      var gokey = "href=" + (window.encodeURIComponent(window.location.href)) + "&";
      gokey += "notification=" + (window.Notification ? window.Notification.permission : 'notSupportNotification');
      Object(__WEBPACK_IMPORTED_MODULE_1__util_goldlog_browser__["a" /* acmLog */])(("type=isSupportACM&result=notSupportACM&" + gokey));
    }
  }
}

function init() {
  // check cookie enable
  trackCookieEnabled();

  // check user from allow to denied
  trackNotificationPermission();

  // user login status
  trackLoginStatus();

  // user cookie status
  trackCookieStatus();

  Object(__WEBPACK_IMPORTED_MODULE_1__util_goldlog_browser__["a" /* acmLog */])('type=subscribePopup&result=before');

  trackACMSupport();

  if (document.addEventListener) {
    // 弹出提示框，引导用户授权
    document.addEventListener('ACM:subscribePopupLoadedAcmCoreFile', function () {
      Object(__WEBPACK_IMPORTED_MODULE_1__util_goldlog_browser__["a" /* acmLog */])('type=createPopup&result=before');
    });
    // 用户授权成功
    document.addEventListener('ACM:successRegister', function () {
      Object(__WEBPACK_IMPORTED_MODULE_1__util_goldlog_browser__["a" /* acmLog */])('type=register&result=registed');
    });

    document.addEventListener('ACM:successUpdateRegister', function () {
      Object(__WEBPACK_IMPORTED_MODULE_1__util_goldlog_browser__["a" /* acmLog */])('type=register&result=updated');
    });

    document.addEventListener('ACM:updateRegister', function (ref) {
      var detail = ref.detail;

      var result = detail.result;
      Object(__WEBPACK_IMPORTED_MODULE_1__util_goldlog_browser__["a" /* acmLog */])(("type=updateRegister&result=" + result));
    });

    document.addEventListener('ACM:denied', function () {
      Object(__WEBPACK_IMPORTED_MODULE_1__util_goldlog_browser__["a" /* acmLog */])('type=register&result=denied');
    });

    document.addEventListener('ACM:closed', function () {
      Object(__WEBPACK_IMPORTED_MODULE_1__util_goldlog_browser__["a" /* acmLog */])('type=register&result=closed');
    });
  }
  // 更新注册信息
  __WEBPACK_IMPORTED_MODULE_2__acm_browser__["a" /* default */].updateRegister();
}

init();

if (Object.assign) {
  /**
   * 根据 acmConfig 决定展示逻辑
   * acmConfig = {
   *  needPre
   * }
   */
  var acmConfig = Object.assign({
    needPopup: true,
    popupBgImg: '//img.alicdn.com/tfs/TB1BZDIbMoQMeJjy0FnXXb8gFXa-596-268.png',
  }, window.acmConfig);
  if (acmConfig.needPopup) {
    Object(__WEBPACK_IMPORTED_MODULE_3__subscribe_popup_browser_subscribe_popup_browser__["a" /* default */])(acmConfig);
  }
}
// 弹出授权
__WEBPACK_IMPORTED_MODULE_2__acm_browser__["a" /* default */] && __WEBPACK_IMPORTED_MODULE_2__acm_browser__["a" /* default */].subscribePopup();


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_goldlog_browser__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__subscribe_popup_browser_tpl__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__subscribe_popup_browser_tpl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__subscribe_popup_browser_tpl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_browser_info__ = __webpack_require__(0);




function createPopup(acmConfig) {
  var container = document.createElement('div');
  container.className = "acm-subscribe-popup-container acm-subscribe-popup-container--" + (__WEBPACK_IMPORTED_MODULE_2__util_browser_info__["b" /* default */].toLowerCase());
  var html = (acmConfig.tpl || __WEBPACK_IMPORTED_MODULE_1__subscribe_popup_browser_tpl___default.a)
    .replace('{popupBgImg}', acmConfig.popupBgImg);
  container.innerHTML = html;
  document.body.appendChild(container);

  Object(__WEBPACK_IMPORTED_MODULE_0__util_goldlog_browser__["a" /* acmLog */])('type=createPopup&result=after');

  bindEvent();

  showPopup();
}

function showPopup() {
  var popup = document.getElementById('acm-pre-subscribe-popup');
  if (popup) {
    popup.style.display = 'block';

    Object(__WEBPACK_IMPORTED_MODULE_0__util_goldlog_browser__["a" /* acmLog */])('type=showPopup&result=after');
  }
}

function closePopup(fromClose) {
  var popup = document.getElementById('acm-pre-subscribe-popup');
  var evName = fromClose ? 'closePopupManual' : 'closePopup';
  Object(__WEBPACK_IMPORTED_MODULE_0__util_goldlog_browser__["a" /* acmLog */])(("type=" + evName + "&result=before"));
  if (popup) {
    popup.style.display = 'none';

    Object(__WEBPACK_IMPORTED_MODULE_0__util_goldlog_browser__["a" /* acmLog */])(("type=" + evName + "&result=after"));
  }
}

function bindEvent() {
  var close = document.getElementById('acm-pre-subscribe-popup__close');
  if (close) {
    close.onclick = function () {
      closePopup(true);
    };
  }
}

function init(acmConfig) {
  if (!document.addEventListener) {
    return;
  }
  // 弹出提示框，引导用户授权
  document.addEventListener('ACM:subscribePopupLoadedAcmCoreFile', function () {
    createPopup(acmConfig);
  });
  // 用户授权成功
  document.addEventListener('ACM:successRegister', function () {
    closePopup();
  });

  document.addEventListener('ACM:denied', function () {
    closePopup();
  });

  document.addEventListener('ACM:closed', function () {
    closePopup();
  });
}

/* harmony default export */ __webpack_exports__["a"] = (init);


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "<style>.acm-subscribe-popup{position:fixed;left:100px;top:100px;z-index:999;background-image:url({popupBgImg});width:298px;height:134px;background-size:cover;display:none}.acm-subscribe-popup-container--firefox .acm-subscribe-popup{top:125px}</style> <div id=\"acm-pre-subscribe-popup\" class=\"acm-subscribe-popup\"></div> ";

/***/ })
/******/ ]);


// WEBPACK FOOTER //
// index.js