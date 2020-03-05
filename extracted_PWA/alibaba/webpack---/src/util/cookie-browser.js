function parseCookieString(sName) {
  const sRE = `[; ]?${sName}=([^;]*)`;
  const oRE = new RegExp(sRE);
  if (oRE.test(document.cookie)) {
    return decodeURIComponent(RegExp.$1);
  }
  return null;
}

function getMemberSeq() {
  let memberSeq = '';
  let userCookie = parseCookieString('xman_us_f');
  const userReg = /x_user=([^&"]+)/;
  if (userCookie && userReg.test(userCookie)) {
    userCookie.match(userReg);
    userCookie = RegExp.$1;
    userCookie = userCookie.split('|');

    if (userCookie.length >= 5) {
      memberSeq = userCookie[4];
    }
  }
  return memberSeq;
}

function getLoginStatus() {
  let loginStatus = false;
  const userCookie = parseCookieString('xman_us_t');
  if (userCookie) {
    if (userCookie.indexOf('&sign=y&') > -1) {
      loginStatus = true;
    }
  }
  return loginStatus;
}

export default parseCookieString;
export {
  getLoginStatus,
  getMemberSeq,
};



// WEBPACK FOOTER //
// ./src/util/cookie-browser.js