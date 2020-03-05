/**
 * Created by 易晓峰(林异)<yxf@106063@alibaba-inc.com> on 10/01/2018.
 */
import _common from './common';
import _core from './perf-core';

/**
 * 计算速度，KB/s
 * @param size
 * @param duration
 */
const evalSpeed = function(size, duration) {
  const speed = size / 1024 / duration * 1000;
  return isNaN(speed) ? 0 : parseInt(speed);
};

/**
 * 提供网络探测功能，如果页面被缓存，则探测可能会不准确
 * @param {Number} max - 要遍历的entity数量，默认为全部
 * @returns {*}
 */
export default function(max) {
  let totalSize = 0,
    totalDuration = 0;
  const temp = {};

  _core.eachEntity(function(entity) {
    const { responseEnd, connectStart, name, transferSize } = entity;
        // 持续的时间
    const duration = responseEnd - connectStart;
    const size = transferSize || 0;
    if (size <= 0 || duration <= 0) return;

    const host = name.replace(/^(https?:\/\/)(.+?)\/(.+)?$/, '$2');

        // 仅处理静态文件服务器
    if (host && _common.isResource(name)) {
      if (!temp[host]) {
        temp[host] = {
          size,
          duration,
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

  const result = {
    avg: 0,
  };

    // 没有取到正常的时长及大小
  if (totalDuration === 0 || totalSize === 0) {
    return result;
  }

    // 平均性能
  result.speed_avg = evalSpeed(totalSize, totalDuration);

    // 分host的性能
  for (let key in temp) {
    result['speed_' + key] = evalSpeed(temp[key].size, temp[key].duration);
  }

  return result;
}




// WEBPACK FOOTER //
// ./src/speed.js