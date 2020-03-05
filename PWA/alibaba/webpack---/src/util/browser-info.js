const ua = navigator.userAgent.toLowerCase();

const SAFARI = 'Safari';
const DATA_BROWSER = {
  Trident: 'IE',
  OPR: 'Opera',
  UBrowser: 'UC',
  MetaSr: 'Sogou',
};

const REG_MAIN = /(Firefox|Trident|Edge)/ig;
const REG_SAFARI = new RegExp(`(${SAFARI})`, 'ig');
const REG_CHROME_BRS = /(OPR|Maxthon|QIHU 360SE|QIHU 360EE|QQBrowser|UBrowser|MetaSr|2345Explorer)/ig;
const REG_CHROME = /(Chrome|Chromium)/ig;

let type = 'NA';
let rt = REG_MAIN.exec(ua) || REG_SAFARI.exec(ua);
if (rt) {
  type = rt[0];
  if (type === SAFARI) {
    rt = REG_CHROME_BRS.exec(ua) || REG_CHROME.exec(ua);
    if (rt) {
      type = rt[0];
    }
  }
  type = DATA_BROWSER[type] || type;
}

const browserType = type;

export default browserType;

function getChromeVersion() {
  const raw = ua.match(/Chrom(e|ium)\/([0-9]+)\./i);
  return raw ? parseInt(raw[2], 10) : false;
}

function getFirefoxVersion() {
  const raw = ua.match(/firefox\/([\d\.]+)/i);
  return raw ? parseInt(raw[1], 10) : false;
}

const chromeVersion = getChromeVersion();
const firefoxVersion = getFirefoxVersion();

export {
  chromeVersion,
  firefoxVersion,
};



// WEBPACK FOOTER //
// ./src/util/browser-info.js