/**
 * t by 易晓峰(林异)<yxf@106063@alibaba-inc.com> on 28/10/2018.
 */
import storeProxy from '@alife/bc-store-proxy';
const NORMAL_KEY = 'bb.normal';

/**
 * 判断是否为函数
 * @param fn
 * @returns {boolean}
 */
const isFunction = function(fn) {
  return typeof (fn) === 'function';
};

/**
 * 通过proxy
 * @param callback
 */
const getStoreProxy = function(callback) {
  storeProxy.get(NORMAL_KEY, function(err, data) {
    if (err || !data) return callback(err);
    const result = JSON.parse(data);
    //兼容
    return callback(null, result === true ? null : result);
  });
};

/**
 * 获取数据
 * @param key
 * @param callback
 */
const get = function(key, maxAge, callback) {
  try{
    if (isFunction(maxAge)) {
      callback = maxAge;
      maxAge = false;
    }
  
    getStoreProxy(function(err, data) {
      // 获取错误
      if (err || !data || data === true) return callback(err);
    
      const current = data[key] || {};
      const { t, d } = current;
    
      // 没有指定maxAge，则表示可长期存在，直接返回
      if (maxAge === false) return callback(null, d);
    
      // 检查是否过期，如果过期则删除
      const duration = Date.now() - t;
    
      if (duration > maxAge) {
        // 删除当前的数据
        delete data[key];
      
        // 保存删除之后的数据
        storeProxy.set(NORMAL_KEY, JSON.stringify(data), callback);
      }
    
      // 没有过期，直接返回数据
      callback(null, d);
    });
  }catch (e) {
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
const set = function(key, value, callback) {
  try {
    getStoreProxy(function (err, data) {
      if (err) return callback(err);
    
      data = data || {};
      data[key] = {
        t: Date.now(),
        d: value,
      };
    
      const body = JSON.stringify(data);
      storeProxy.set(NORMAL_KEY, body, callback);
    });
  }catch (e) {
    callback(e);
  }
};


export default {
  set,
  get,
};



// WEBPACK FOOTER //
// ./src/store.js