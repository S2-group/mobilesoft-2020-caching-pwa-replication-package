import './initial';
import common from './common';
import performance from './perf';
import api from './api';

const BigBrother = {
  common,
  api,
  performance,
};

(function() {
  window.BigBrother = BigBrother;

  // 检查window.__BB是否已经设置自动上报
  const bb = window.__BB;
  if (!bb) return;

  if (bb.autoReportPerf) performance.autoReport();
  if (bb.autoReportAPI) api.autoReport();
})();

export default BigBrother;



// WEBPACK FOOTER //
// ./src/index.js