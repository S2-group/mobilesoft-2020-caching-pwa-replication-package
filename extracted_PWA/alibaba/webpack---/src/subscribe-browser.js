import { getLoginStatus, getMemberSeq } from './util/cookie-browser';
import { acmLog } from './util/goldlog-browser';
import ACM from './acm-browser';
import showSubscribePopup from './subscribe-popup-browser/subscribe-popup-browser';

function trackCookieEnabled() {
  const cookieEnabled = navigator.cookieEnabled;
  let cookieEnabledResult = 'unsupportCookieEnabled';
  if (typeof cookieEnabled === 'boolean') {
    cookieEnabledResult = cookieEnabled ? 'cookieEnabled' : 'cookieDisabled';
  }
  acmLog(`type=cookieEnabled&result=${cookieEnabledResult}`);
}

function trackNotificationPermission() {
  if (ACM && ACM.isSupportACM() && (window.Notification.permission === 'denied')) {
    const endpoint = ACM.getEndpoint();
    if (endpoint) {
      acmLog('type=manualDeny&result=manualDeny');
    }
  }
}

function trackLoginStatus() {
  const hasLogin = getLoginStatus();
  let loginStatus = 'userNotLogin';
  if (hasLogin) {
    loginStatus = 'userHadLogin';
  }
  acmLog(`type=userLogin&result=${loginStatus}`);
}

function trackCookieStatus() {
  const memberSeq = getMemberSeq();
  let userCookieStatus = 'userNoneCookie';
  if (memberSeq) {
    userCookieStatus = 'userHasCookie';
  }
  acmLog(`type=userCookie&result=${userCookieStatus}`);
}

function trackACMSupport() {
  // 区分用户无法授权的原因
  // 浏览器厂商、版本
  // 未使用https
  // 不在.alibaba.com下
  // 通知不支持
  // 通知已禁止、已授权
  if (ACM) {
    if (ACM.isSupportACM()) {
      acmLog('type=isSupportACM&result=isSupportACM');
    } else {
      let gokey = `href=${window.encodeURIComponent(window.location.href)}&`;
      gokey += `notification=${window.Notification ? window.Notification.permission : 'notSupportNotification'}`;
      acmLog(`type=isSupportACM&result=notSupportACM&${gokey}`);
    }
  }
}

function init() {
  // check cookie enable
  trackCookieEnabled();

  // check user from allow to denied
  trackNotificationPermission();

  // user login status
  trackLoginStatus();

  // user cookie status
  trackCookieStatus();

  acmLog('type=subscribePopup&result=before');

  trackACMSupport();

  if (document.addEventListener) {
    // 弹出提示框，引导用户授权
    document.addEventListener('ACM:subscribePopupLoadedAcmCoreFile', () => {
      acmLog('type=createPopup&result=before');
    });
    // 用户授权成功
    document.addEventListener('ACM:successRegister', () => {
      acmLog('type=register&result=registed');
    });

    document.addEventListener('ACM:successUpdateRegister', () => {
      acmLog('type=register&result=updated');
    });

    document.addEventListener('ACM:updateRegister', ({ detail }) => {
      const { result } = detail;
      acmLog(`type=updateRegister&result=${result}`);
    });

    document.addEventListener('ACM:denied', () => {
      acmLog('type=register&result=denied');
    });

    document.addEventListener('ACM:closed', () => {
      acmLog('type=register&result=closed');
    });
  }
  // 更新注册信息
  ACM.updateRegister();
}

init();

if (Object.assign) {
  /**
   * 根据 acmConfig 决定展示逻辑
   * acmConfig = {
   *  needPre
   * }
   */
  const acmConfig = Object.assign({
    needPopup: true,
    popupBgImg: '//img.alicdn.com/tfs/TB1BZDIbMoQMeJjy0FnXXb8gFXa-596-268.png',
  }, window.acmConfig);
  if (acmConfig.needPopup) {
    showSubscribePopup(acmConfig);
  }
}
// 弹出授权
ACM && ACM.subscribePopup();



// WEBPACK FOOTER //
// ./src/subscribe-browser.js