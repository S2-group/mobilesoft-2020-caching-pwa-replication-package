import storeProxy from './store-proxy';

const store = {
  get(name, callback) {
    let value = storeProxy.get(name, callback);
    if (!value) {
      // 兼容老数据
      value = window.localStorage.getItem(name);
      // 迁移老数据，支持跨域名消息订阅
      if (value) {
        storeProxy.set(name, value);
      }
    }
    return value;
  },
  set(name, value, callback) {
    storeProxy.set(name, value, callback);
  },
  remove(name, callback) {
    window.localStorage.removeItem(name);
    storeProxy.remove(name, callback);
  },
};

export default store;



// WEBPACK FOOTER //
// ./src/util/store/store.js