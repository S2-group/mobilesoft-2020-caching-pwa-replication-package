import { acmLog } from '../util/goldlog-browser';
import tpl from './subscribe-popup-browser.tpl';
import browserType from '../util/browser-info';

function createPopup(acmConfig) {
  const container = document.createElement('div');
  container.className = `acm-subscribe-popup-container acm-subscribe-popup-container--${browserType.toLowerCase()}`;
  const html = (acmConfig.tpl || tpl)
    .replace('{popupBgImg}', acmConfig.popupBgImg);
  container.innerHTML = html;
  document.body.appendChild(container);

  acmLog('type=createPopup&result=after');

  bindEvent();

  showPopup();
}

function showPopup() {
  const popup = document.getElementById('acm-pre-subscribe-popup');
  if (popup) {
    popup.style.display = 'block';

    acmLog('type=showPopup&result=after');
  }
}

function closePopup(fromClose) {
  const popup = document.getElementById('acm-pre-subscribe-popup');
  const evName = fromClose ? 'closePopupManual' : 'closePopup';
  acmLog(`type=${evName}&result=before`);
  if (popup) {
    popup.style.display = 'none';

    acmLog(`type=${evName}&result=after`);
  }
}

function bindEvent() {
  const close = document.getElementById('acm-pre-subscribe-popup__close');
  if (close) {
    close.onclick = function () {
      closePopup(true);
    };
  }
}

function init(acmConfig) {
  if (!document.addEventListener) {
    return;
  }
  // 弹出提示框，引导用户授权
  document.addEventListener('ACM:subscribePopupLoadedAcmCoreFile', () => {
    createPopup(acmConfig);
  });
  // 用户授权成功
  document.addEventListener('ACM:successRegister', () => {
    closePopup();
  });

  document.addEventListener('ACM:denied', () => {
    closePopup();
  });

  document.addEventListener('ACM:closed', () => {
    closePopup();
  });
}

export default init;



// WEBPACK FOOTER //
// ./src/subscribe-popup-browser/subscribe-popup-browser.js