/**
 * loadJS
 * js loader
 * @param url
 * @param success
 */
function loadJS(url, success) {
  const domScript = document.createElement('script');
  domScript.crossOrigin = 'anonymous';
  domScript.async = true;
  domScript.src = url;
  success = success || function () {};
  domScript.onload = function () {
    if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') {
      success();
      this.onload = this.onreadystatechange = null;
      this.parentNode.removeChild(this);
    }
  };
  document.getElementsByTagName('head')[0].appendChild(domScript);
}

export default loadJS;



// WEBPACK FOOTER //
// ./src/util/loadjs-browser.js