// 消息前缀, 建议使用自己的项目名, 避免多项目之间的冲突
let prefix = 'icbu-messenger';
const supportPostMessage = 'postMessage' in window;

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
    const targetFunc = window.navigator[prefix + this.name];
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
  const targetObj = new Target(target, name);
  this.targets[name] = targetObj;
};

// 初始化消息监听
Messenger.prototype.initListen = function () {
  const self = this;
  const generalCallback = function (msg) {
    if (typeof msg === 'object' && msg.data) {
      msg = msg.data;
    }
    // 剥离消息前缀
    if (typeof msg === 'string' && msg.indexOf(prefix) != -1) {
      msg = msg.slice(prefix.length);
      for (let i = 0; i < self.listenFunc.length; i++) {
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
  const targets = this.targets;
  targets.keys().forEach(target => targets[target].send(msg));
};

export default Messenger;



// WEBPACK FOOTER //
// ./src/util/store/messenger.js