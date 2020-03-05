import Messenger from './messenger';

// 暂时不打算提供接口修改
let proxyUrl = '//is.alicdn.com/js/6v/biz/common/store-proxy/store-proxy2.html?iframe_delete=true';

// 分隔符
const spe2c = '-_-';
const spe2p = 'T_T';

// 创建 iframe
if (typeof window.__StoreProxyReady2 === 'undefined') {
  window.__StoreProxyReady2 = false;
}
let ready = window.__StoreProxyReady2;

if (typeof window.__StoreProxyExec2 === 'undefined') {
  window.__StoreProxyExec2 = [];
}
const exec = window.__StoreProxyExec2;

function getId(id) {
  return document.getElementById(id);
}

function createIframe(callback) {
  const id = 'localstorage-proxy-ifr-alibabadotcom2';
  let el = getId(id);

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

  let time;

  time = setInterval(() => {
    if (el && el.contentWindow && el.Messenger) {
      for (let i = 0, l = exec.length; i < l; i++) {
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
  el.onload = () => {
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
    for (let i = 0, l = exec.length; i < l; i++) {
      exec[i]([el]);
    }
    exec.length = 0;
    window.__StoreProxyReady2 = ready = true;
  };

  exec.push(callback);

  document.body.appendChild(el);
}

// 获取 messenger 及 消息构成
let messenger;
const cbs = {};
let uid = 0;
function getMessenger(callback) {
  callback = callback || function () {};

  if (messenger) {
    callback(messenger);
    return;
  }

  // 注册
  createIframe((el) => {
    if (messenger) {
      callback(messenger);
      return;
    }

    messenger = new Messenger('parent', 'store-proxy');
    // 由于所有callback被注册到全局的数组__StoreProxyExec2中
    // 当定时器执行时，会将el传入，而部分场景使用的仍然是jQuery
    // 所以为兼容这些场景，必须传入数组
    messenger.addTarget(el[0].contentWindow, 'proxy');

    // 监听接口
    messenger.listen((msg) => {
      parseMsg(msg);
    });

    callback(messenger);
  });
}

function getMsg(op, name, value, callback) {
  let msg = [op, name, value];
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
  const tmp = msg.split(spe2p);

  msg = tmp[0];
  const err = tmp[1] || null;
  const data = tmp[2] || undefined;

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

const storeProxy = {
  // 根据键名获取存储的值
  get(...args) {
    let options;
    let callback;
    const [name] = args;

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
    getMessenger((msger) => {
      msger.targets.proxy.send(getMsg('get', name, (err, data) => {
        // 检验 value
        if (!err && options && options.filter) {
          data = options.filter(data);
        }

        callback(err, data);
      }));
    });
  },

  // 设置数据
  set(...args) {
    const [name] = args;
    let [, value] = args;
    let options;
    let callback;

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
    getMessenger((msger) => {
      msger.targets.proxy.send(getMsg('set', name, value, callback));
    });
  },

  // 移除指定键名的存储
  remove(name, callback) {
    callback = callback || function () {};
    // 发信息
    getMessenger((msger) => {
      msger.targets.proxy.send(getMsg('remove', name, callback));
    });
  },
};

export default storeProxy;



// WEBPACK FOOTER //
// ./src/util/store/store-proxy.js