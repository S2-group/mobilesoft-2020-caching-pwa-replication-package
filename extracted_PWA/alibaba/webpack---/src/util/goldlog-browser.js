import browserType from './browser-info';

const goldlog = window.goldlog || {
  record(logkey, gmkey, gokey, chksum) {
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

export default goldlog;

const ua = window.navigator.userAgent;
const uaLogString = `&ua=${ua}`;
const browser = browserType;
const browserLogString = `&browser=${browser}`;
const acmLog = function (gokey) {
  goldlog.record('/sc.13.1', 'OTHER', gokey + uaLogString + browserLogString, 'H1703600');
};

export {
  acmLog,
};



// WEBPACK FOOTER //
// ./src/util/goldlog-browser.js