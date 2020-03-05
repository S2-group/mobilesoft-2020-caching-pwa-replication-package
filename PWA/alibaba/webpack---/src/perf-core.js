/**
 * Created by 易晓峰(林异)<yxf@106063@alibaba-inc.com> on 07/02/2018.
 */

import _common from './common';

/**
 * 遍历性能的Entity
 * @param max
 * @param cb
 */
const eachEntity = function(cb, max = Number.MAX_VALUE) {
  const performance = getPerformance();
  if (!performance.getEntries) return;
  const entries = performance.getEntries() || [];
  if (!entries.length) return;

  for (let i = 0; i < Math.min(entries.length, max); i++) {
    const entity = entries[i];
    cb && cb(entity);
  }
};

/**
 * 获取performance
 */
function getPerformance() {
  return window.performance ||
		window.webkitPerformance ||
		window.msPerformance ||
		window.mozPerformance || {};
}

/**
 * 获取首屏曝光的时间
 * @param {Date | Number} exposedTime - 指定首屏出现的时间或者直接指定首屏的毫秒数
 * @param {Number} navigationStart - performance.timing.navigationStart
 */
const getExposedTime = function(exposedTime, navigationStart){
  // 如果指定的时间小于1个小时的毫秒数，则认为这个时间是直接指定了秒数
  if(exposedTime > 0 && exposedTime < 1 * 60 * 60 * 1000) return exposedTime;
  return exposedTime ? _common.filterValue(exposedTime - navigationStart) : undefined
};

/**
 * 收集性能数据
 * @param performance - performance的对象
 * @param exposedTime - 真实的渲染时间
 * @returns {{fetch, dns, tcp, ttfb, fbyte, html, load, netType, exposed, new: string, group: *}}
 */
const analysis = function(exposedTime) {
  const performance = getPerformance();
  const timing = performance.timing;
  let performanceNavigationTiming;
  let fcp;

  try {
    performanceNavigationTiming = performance.getEntriesByType('navigation')[0];
    const fcpEntry = performance.getEntriesByType('paint')[1];
    if (fcpEntry.name === 'first-contentful-paint') {
      fcp = Math.floor(fcpEntry.startTime);
    } 
  } catch(e) {}
  if (!timing) return;

  if (!performanceNavigationTiming) {
  
    return {
      //ssl链接时间
      ssl: _common.filterValue(timing.connectEnd - timing.secureConnectionStart),
      //网络相关的时间，从开始到最后下载完成
      network: _common.filterValue(timing.responseEnd - timing.navigationStart),
      fetch: _common.filterValue(timing.fetchStart - timing.navigationStart),
      dns: _common.filterValue(timing.domainLookupEnd - timing.domainLookupStart),
      tcp: _common.filterValue(timing.connectEnd - timing.connectStart),
      ttfb: _common.filterValue(timing.responseStart - timing.requestStart),
      html: _common.filterValue(timing.domContentLoadedEventEnd - timing.navigationStart),
      download: _common.filterValue(timing.responseEnd - timing.responseStart),
      // 渲染
      load: _common.filterValue(timing.loadEventEnd - timing.navigationStart),
      // 真实的渲染时间
      exposed:  getExposedTime(exposedTime, timing.navigationStart),
      fcp: fcp,
      blocking: _common.filterValue(timing.requestStart - timing.connectEnd),
      appcache: _common.filterValue(timing.domainLookupStart - timing.fetchStart),
    };
  } else {
    const serverTimingEntries = performanceNavigationTiming.serverTiming;
    const serverTiming = {};
    if (serverTimingEntries && serverTimingEntries.length > 0) {
      for (let key of Object.keys(serverTimingEntries)) {
        const entry = serverTimingEntries[key];
        serverTiming['s_' + entry.name] = entry.description || _common.filterValue(entry.duration);
      }
    }

    return {
      //ssl链接时间
      ssl: _common.filterValue(timing.connectEnd - timing.secureConnectionStart),
      //网络相关的时间，从开始到最后下载完成
      network: _common.filterValue(performanceNavigationTiming.responseEnd),
      fetch: _common.filterValue(performanceNavigationTiming.fetchStart),
      dns: _common.filterValue(performanceNavigationTiming.domainLookupEnd - performanceNavigationTiming.domainLookupStart),
      tcp: _common.filterValue(performanceNavigationTiming.connectEnd - performanceNavigationTiming.connectStart),
      ttfb: _common.filterValue(performanceNavigationTiming.responseStart - performanceNavigationTiming.requestStart),
      html: _common.filterValue(performanceNavigationTiming.domContentLoadedEventEnd - performanceNavigationTiming.navigationStart),
      download: _common.filterValue(performanceNavigationTiming.responseEnd - performanceNavigationTiming.responseStart),
      // 渲染
      load: _common.filterValue(performanceNavigationTiming.loadEventEnd),
      // 真实的渲染时间
      exposed: getExposedTime(exposedTime, timing.navigationStart),
      fcp: fcp,
      ...serverTiming,

      blocking: _common.filterValue(timing.requestStart - timing.connectEnd),
      appcache: _common.filterValue(timing.domainLookupStart - timing.fetchStart),

    };
  }

};

export default {
  analysis,
  getPerformance,
  eachEntity,
};



// WEBPACK FOOTER //
// ./src/perf-core.js