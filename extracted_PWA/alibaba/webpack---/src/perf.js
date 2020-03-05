/**
 * Created by 易晓峰(林异)<yxf@106063@alibaba-inc.com> on 10/01/2018.
 */
import _common from './common';
import _speed from './speed';
import _core from './perf-core';

// 是否已经上报
let REPORTED = false;

/**
 * 获取总文件大小，缓存大小，总文件数量，缓存数量
 */
const getCacheInfo = function() {
    // CacheSize, TotalSize, CacheFile, TotalFile
  let cs = 0,
    ts = 0,
    cf = 0,
    tf = 0;

  _core.eachEntity(function(entity) {
    const { initiatorType, name, transferSize, encodedBodySize } = entity;

        // 仅检查alicdn下，非图片的资源
    if (!_common.isResource(name) || initiatorType === 'img') return;

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
    cf,
    tf,
  };
};

/**
 * 获取用户自定义的时间点
 * @param times
 * @returns {{}}
 */
const reviseCustomTimes = function(times) {
  const result = {};
  if (!(times instanceof Array)) return result;

    // 处理自定义的时间点
  for (let i = 0; i < Math.min(times.length, 10); i++) {
    let value = parseInt(times[i]);
    if (isNaN(value)) value = 0;

    result[`s${i}`] = value;
  }

  return result;
};


/**
 * 快速手动打点，通过监测BB_EXPOSE的变化来确定手动打点
 */
const reportWithObserve = function() {
  let index = 0;

  const execute = function() {
    const exposed = _common.getConfig('exposed', false);

    // 等待用户指定exposed的时间来确定打点
    if (exposed) {
      report(exposed);
      return;
    }

    // 超过指定次数，直接获取onLoad的时间，不指定exposed的时间
    if (index++ > 60) {
      report(null, null, Object.assign({
        reason: _common.ERR.timeout,
        exposed: -1,
      }));
      return;
    }

    // 定时检测exposed是否存在
    window.setTimeout(function() {
      execute();
    }, 1000);
  };

  execute();
};


/**
 * 根据Mode来确定如何上报数据
 */
const autoReport = function() {
  switch (_common.getMode()) {
    case -1:
       // 观察者模式
      reportWithObserve();
      break;
    // 1不处理
    case 1: break;
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
  const bb = window.__BB || {};
    // 收集
  const data = _core.analysis(exposedTime);
    // 没有取到正常的数据
  if (!data) return;

    // 如果还没有取到load的数据1秒后再试。
  if (data.load === 0) {
    window.setTimeout(function() {
      report(exposedTime, customTimes, extend);
    }, 1000);
    return;
  }

  // 已经上报，不再处理
  if (REPORTED) return;

  const { CACHE } = _common;

  const spm = _common.getSpm();

  // 获取访问次数是异步逻辑
  _common.visitCounter(spm, function(visit) {
    Object.assign(data, reviseCustomTimes(_common.getConfig('times', false) || customTimes), {
      mode: _common.getMode(),
      spm,
      source: CACHE.source,
      v: CACHE.version,
      // 群组
      group: _common.getConfig('group'),
      // 统计方式的标识符
      stat_mode: _common.getConfig('stat_mode'),
      // 用户的访问计数
      visit,
    }, extend, getCacheInfo(), _speed());

    // 加入行为的时间收集
    const timing = _core.getPerformance().timing;

    if (timing && window.__BIG_BROTHER__) {
      // 收集用户首次交互时间
      [ 'click', 'keydown', 'touchstart', 'scroll' ].forEach(function(event) {
        const value = window.__BIG_BROTHER__[event] - timing.navigationStart;
        if (!isNaN(value)) data[event] = value;
      });
    }

    // 给所有的 extendParams增加c_的前缀
    if (bb.extendParams) {
      for (let key in bb.extendParams) {
        data[`c_${key}`] = bb.extendParams[key];
      }
    }

    // 用于flasher的跟踪
    data.flasherTrace = window.$flasherTrace;
    data.flasherVersion = (window.Flasher || {}).version || '0.0.0'; // 上报flasher版本("0.0.0"代表不存在)
    data.flasherGroup = window.$flasherGroup || 'normal'; // 是否命中方案

    REPORTED = true;

    // 添加扩展参数进去
    _common.send('performance', data);

    // 双发到 ARMS
    _common.sendARMS(data);
  });
}

export default {
  autoReport,
  report,
};



// WEBPACK FOOTER //
// ./src/perf.js