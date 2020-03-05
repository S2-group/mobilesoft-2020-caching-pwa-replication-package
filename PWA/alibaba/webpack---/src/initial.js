/**
 * Created by 易晓峰(林异)<yxf@106063@alibaba-inc.com> on 28/10/2018.
 */
// 提前预捕获api的信息，最好是放在最前面

(function(w) {
  let cache = w.__BIG_BROTHER__;
  if (!w.__BIG_BROTHER__) cache = w.__BIG_BROTHER__ = {};

  // 绑定事件，将数据放到配置
  const eventHandler = function(e) {
    cache[e.type] = Date.now();
  };

  /**
   * 初始化与事件绑定相关的
   */
  const initEvent = function() {
    if (cache.initEvent) return;
    cache.initEvent = true;

    // 绑定事件
    const addEvent = w.addEventListener || w.attachEvent;
    [ 'click', 'keydown', 'touchstart', 'scroll' ].forEach(function(event) {
      addEvent(event, eventHandler, { once: true });
    });
  };

  /**
   * 初始化与API相关的
   */
  const initAPI = function() {
    // 提前预置处理api
    const PO = w.PerformanceObserver;
    if (!PO) return;

    // 已经提前预捕获，则不要处理
    if (cache.preCatchAPI) return;
    cache.preCatchAPI = true;

    cache.items = [];
    // 建立捕获函数
    const observer = new PO(function(list) {
      // 防止某些浏览器可能没有这个方法
      if (typeof (list.getEntries) !== 'function') return;

      const entries = list.getEntries();
      for (let i = 0; i < entries.length; i++) {
        const current = entries[i] || {};
        const { name } = current;

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
      entryTypes: [ 'resource' ],
    });
  };

  initAPI();
  initEvent();
})(window);



// WEBPACK FOOTER //
// ./src/initial.js