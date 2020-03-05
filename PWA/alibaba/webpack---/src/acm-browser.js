/*
 * Alibaba Cloud Messaging for browser launcher
 * @file acm-launcher.js
 * @author nuo.xun@alibaba-inc.com
 * @date 2017.2.22
 */

import browserType, { chromeVersion, firefoxVersion } from './util/browser-info';
import logger from './util/logger';
import loadJS from './util/loadjs-browser';
import FIREBASE from './const-res-url';
import store from './util/store/store';
import { getMemberSeq } from './util/cookie-browser';

/**
 * sufei setting.
 */
window.sufei_jsonp_ignore = [/googleapis\.com/];

/**
 * Check if the browser supports push-notifications
 */
const isSupportACM = function isSupportACM() {
  if (location.search.indexOf('debug') !== -1) {
    return true;
  }

  return (chromeVersion >= 50 || firefoxVersion > 44)
    && 'serviceWorker' in navigator
    && 'PushManager' in window
    && 'showNotification' in ServiceWorkerRegistration.prototype
    && Notification.permission !== 'denied'
    && location.host.indexOf('.alibaba.com') > -1
    && location.protocol === 'https:';
};

/**
 * get endpoint
 */
const getEndpoint = function (callback) {
  store.get('ACM:endpoint', callback);
};

/**
 * get ctoken
 */
const getCtoken = function getCtoken() {
  const cookie = document.cookie;
  let match = cookie && cookie.match(/(?:^|;)\s*xman_us_t\s*=\s*([^;]+)/);
  if (match) {
    match = match[1].match(/(?:^|&)\s*ctoken\s*=\s*([^&]+)/);
  }
  const ctoken = window._intl_csrf_token_ || (match && match[1]);
  return ctoken;
};

const hostname = location.hostname;

/**
 * update subscribe 
 */
const registerSubscribe = function (endpoint, isUpdate) {
  const ctoken = getCtoken() || '';

  const fetchUrl = `//m.alibaba.com/api/push/register.do?endPoint=${endpoint}&from=${hostname}&ctoken=${ctoken}&browserType=${browserType}`;

  const fetchInit = {
    method: 'GET',
    headers: {
      pragma: 'no-cache',
      'cache-control': 'no-cache',
    },
    mode: 'no-cors',
  };

  fetch(fetchUrl, fetchInit).then(() => {
    // trigger event: acm:successRegister
    document.dispatchEvent(new CustomEvent(isUpdate ? 'ACM:successUpdateRegister' : 'ACM:successRegister',
      { detail: { endpoint } }));
  });
};

/**
 * show the subscribe popup
 */
const subscribePopup = function subscribePopup() {
  if (isSupportACM()) {
    if (Notification.permission === 'default') {
      // unregister
      // 用户修改了消息推送授权，或者重置了浏览器设置，需要清理历史遗留的endpoint和serviceworker
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        for (let _i = 0, registrations1 = registrations; _i < registrations1.length; _i++) {
          const registration = registrations1[_i];
          if (registration.scope === `https://${hostname}/firebase-cloud-messaging-push-scope`) {
            registration.unregister();
          }
        }
      });
    }

    // load
    loadJS(FIREBASE, () => {
      if (Notification.permission === 'default') {
        document.dispatchEvent(new CustomEvent('ACM:subscribePopupLoadedAcmCoreFile'));
      }

      const messaging = window.firebase.messaging();

      // show notification when page has been opened
      messaging.onMessage((payload) => {
        // 浏览当前页面时显示推送通知
        try {
          const notificationData = payload.notification || payload.data || {};

          if (notificationData) {
            // always show the notification
            const notificationTitle = notificationData.title;
            const notificationOptions = {
              body: notificationData.body,
              icon: notificationData.icon ? notificationData.icon : 'https://gw.alicdn.com/tps/TB1c7muMpXXXXccXVXXXXXXXXXX-96-96.png',
              click_action: notificationData.click_action,
            };

            const notification = new Notification(notificationTitle, notificationOptions);

            notification.onclick = event => { // eslint-disable-line
              event.preventDefault();
              logger.log('On notification click: ', event);
              notification.close();
              window.open(notificationData.click_action);
            };
          }
        } catch (e) {
          logger.error('show notification error:', e);
        }
      });

      if (Notification.permission === 'default') {
        messaging.requestPermission().then(() => messaging.getToken()).then((endpoint) => {
          // write to store
          store.set('ACM:endpoint', endpoint, () => {
            // trigger event: ACM:getEndpoint
            document.dispatchEvent(new CustomEvent('ACM:getEndpoint', { detail: { endpoint } }));

            // register
            registerSubscribe(endpoint);
          });
        }).catch((err) => {
          logger.log(err);

          if (Notification.permission === 'denied') {
            // trigger event: ACM:denied
            document.dispatchEvent(new CustomEvent('ACM:denied'));
          } else {
            // trigger event: ACM:closed
            document.dispatchEvent(new CustomEvent('ACM:closed'));
          }

          logger.log(Notification.permission); // default / denied / 
          // case 交互设计
          logger.log('Subscribe error :(', err);
        });
      }
    });
  }
};

function updateRegister() {
  if (isSupportACM()) {
    // 获取endpoint，确认当前用户是否已注册
    // 或者当前用户是否已切换登录状态
    getEndpoint((error, endpoint) => {
      document.dispatchEvent(new CustomEvent('ACM:updateRegister', {
        detail: { result: 'checkEndpoint' },
      }));
      if (endpoint) {
        document.dispatchEvent(new CustomEvent('ACM:updateRegister', {
          detail: { result: 'hadEndpoint' },
        }));

        store.get(endpoint, (err, data) => {
          const memberId = getMemberSeq();
          const hadRegisted = data === memberId;
          if (memberId && !hadRegisted) {
            document.dispatchEvent(new CustomEvent('ACM:updateRegister', {
              detail: { result: 'update' },
            }));
            // 更新注册信息，将endpoint绑定到memberId
            registerSubscribe(endpoint, true);
            document.dispatchEvent(new CustomEvent('ACM:updateRegister', {
              detail: { result: 'updated' },
            }));
          }
        });
      }
    });
  }
}

function bindUsr() {
  getEndpoint((error, endpoint) => {
    const memberSeq = getMemberSeq();
    store.set(endpoint, memberSeq);
  });
}

if (document.addEventListener) {
  document.addEventListener('ACM:successRegister', () => {
    bindUsr();
  });

  document.addEventListener('ACM:successUpdateRegister', () => {
    bindUsr();
  });
}

const ACM = {
  isSupportACM,
  registerSubscribe,
  subscribePopup,
  getEndpoint,
  updateRegister,
};

export default ACM;



// WEBPACK FOOTER //
// ./src/acm-browser.js