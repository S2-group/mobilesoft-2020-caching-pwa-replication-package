
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"813",
  
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.location.hash})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return isMobileAccess?!0:!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return locationPathCheckout||\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=navigator.userAgent,b=\/Tablet|iPad|iPod\/i,c=\/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)\/;return a.match(b)?\"tablet\":a.match(c)?\"mobile\":\"desktop\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"other",
      "vtp_name":"ecomm_pagetype"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"q",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"event"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.checkout.actionField.step"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecomm_category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecomm_prodid"
    },{
      "function":"__u",
      "vtp_component":"FRAGMENT",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.checkout.products"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecomm_totalvalue"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var pageType=",["escape",["macro",4],8,16],";var searchTerm=",["escape",["macro",5],8,16],";var event=",["escape",["macro",6],8,16],";var checkOutStep=",["escape",["macro",7],8,16],";var totalValue;var ecomm_category=",["escape",["macro",8],8,16],";var ecomm_prodid=",["escape",["macro",9],8,16],";var urlFragment=",["escape",["macro",10],8,16],";var cartProducts=",["escape",["macro",11],8,16],"||[];if(pageType==\"offerdetail\"){pageType=\"product\";totalValue=",["escape",["macro",12],8,16],"}else if(pageType==\"other\")if(searchTerm)pageType=\"searchresults\";else if(event==\"checkout\"\u0026\u0026\nurlFragment==\"\/resumo\"){pageType=\"cart\";var total=0;ecomm_prodid=[];try{for(var i=0;i\u003CcartProducts.length;i++){total+=Number(cartProducts[i].price)*Number(cartProducts[i].quantity);ecomm_prodid.push(cartProducts[i].id)}}catch(ex){}totalValue=total}return{\"ecomm_prodid\":ecomm_prodid,\"ecomm_pagetype\":pageType,\"ecomm_totalvalue\":totalValue,\"ecomm_category\":",["escape",["macro",8],8,16],",\"searchTerm\":",["escape",["macro",5],8,16],"}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return{}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return!0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var k=function(a){return f(a)?decodeURIComponent(document.cookie.replace(new RegExp(\"(?:(?:^|.*;)\\\\s*\"+encodeURIComponent(a).replace(\/[.+*]\/g,\"\\\\$\\x26\")+\"\\\\s*\\\\\\x3d\\\\s*([^;]*).*$)|^.*$\"),\"$1\")):void 0},l=function(a,c,b,d,g,e){void 0===d\u0026\u0026(d=\"\");void 0===g\u0026\u0026(g=\"\");void 0===e\u0026\u0026(e=!1);if(!a)return!1;var h=\"\";if(b)switch(b.constructor){case Number:h=Infinity===b?\"; expires\\x3dFri, 31 Dec 9999 23:59:59 GMT\":\"; expires\\x3d\"+(new Date((new Date).getTime()+b)).toUTCString();break;case String:h=\n\"; expires\\x3d\"+b;break;case Date:h=\"; expires\\x3d\"+b.toUTCString()}document.cookie=encodeURIComponent(a)+\"\\x3d\"+encodeURIComponent(c)+h+(g?\"; domain\\x3d\"+g:\"\")+(d?\"; path\\x3d\"+d:\"\")+(e?\"; secure\":\"\");return f(a)},m=function(a,c,b){void 0===c\u0026\u0026(c=\"\");void 0===b\u0026\u0026(b=\"\");if(!f(a))return!1;document.cookie=encodeURIComponent(a)+\"\\x3d; expires\\x3dThu, 01 Jan 1970 00:00:00 GMT\"+(b?\"; domain\\x3d\"+b:\"\")+(c?\"; path\\x3d\"+c:\"\");return!f(a)},f=function(a){return a?(new RegExp(\"(?:^|;\\\\s*)\"+encodeURIComponent(a).replace(\/[.+*]\/g,\n\"\\\\$\\x26\")+\"\\\\s*\\\\\\x3d\")).test(document.cookie):!1},e=function(){for(var a=document.cookie.replace(\/((?:^|\\s*;)[^=]+)(?=;|$)|^\\s*|\\s*(?:=[^;]*)?(?:\\1|$)\/g,\"\").split(\/\\s*(?:=[^;]*)?;\\s*\/),c=0,b=a.length;c\u003Cb;c++)a[c]=decodeURIComponent(a[c]);return 1===a.length\u0026\u0026\"\"===a[0]?null:a},d=function(){l(\"RaccoonTestCookie\",\"RaccoonTestCookie\",2E3);return\"RaccoonTestCookie\"===k(\"RaccoonTestCookie\")},n=function(){var a=e();a\u0026\u0026a.forEach(function(a){m(a)});return e()?!1:!0};d={getItem:k,setItem:l,removeItem:m,hasItem:f,\nkeys:e,hasCookieEnabled:d,removeAll:n};window.GTMUtils=window.GTMUtils||{};window.GTMUtils.libCookie=window.GTMUtils.libCookie||d;return d})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 15552E6})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return!0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return{ecomm_pagetype:\"home\"}})();"]
    },{
      "function":"__cid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=window.google_tag_manager[",["escape",["macro",21],8,16],"].dataLayer.name;return window[a]}catch(b){return window.dataLayer}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){for(var b=[];a.parentNode;)if(a.id){b.unshift(\"#\"+a.id);break}else{if(a===a.ownerDocument.documentElement)b.unshift(a.tagName);else{for(var d=1,c=a;c.previousElementSibling;c=c.previousElementSibling,d++);b.unshift(a.tagName+\":nth-child(\"+d+\")\")}a=a.parentNode}return b.join(\" \\x3e \")}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return!0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,b){return function(){try{b.apply(this,arguments)}catch(c){}return a.apply(this,arguments)}}})();"]
    },{
      "function":"__e"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-23672168-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_defaultPages":["list"],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"not set",
      "vtp_name":"ecommerce.purchase.actionField.isFirstBuy"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.revenue"
    },{
      "function":"__c",
      "vtp_value":"1034328806"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"_ga"
    },{
      "function":"__c",
      "vtp_value":"UA-79192475-14"
    },{
      "function":"__c",
      "vtp_value":"PetLove"
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__ctv"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b,c,d,a){if(",["escape",["macro",24],8,16],"){a\u0026\u0026(c=\"Warning - \"+c);var e=(",["escape",["macro",33],8,16],"||\"\").substr(6)||(new Date).getTime().toString();b=\"https:\/\/www.google-analytics.com\/r\/collect?v\\x3d1\\x26t\\x3devent\\x26cid\\x3d\"+e+\"\\x26dl\\x3d\"+encodeURIComponent(window.document.URL)+\"\\x26dt\\x3d\"+encodeURIComponent(window.document.title)+\"\\x26tid\\x3d\"+encodeURIComponent(",["escape",["macro",34],8,16],")+\"\\x26z\\x3d\"+(new Date).getTime().toString()+\"\\x26ec\\x3d\"+encodeURIComponent(",["escape",["macro",35],8,16],")+\n\"\\x26ea\\x3d\"+encodeURIComponent((d?\"Tag: \":\"Var: \")+b)+\"\\x26el\\x3d\"+encodeURIComponent(c)+\"\\x26cd1\\x3d\"+encodeURIComponent(e)+\"\\x26cd2\\x3d\"+encodeURIComponent(",["escape",["macro",6],8,16],")+\"\\x26cd3\\x3d\"+encodeURIComponent(",["escape",["macro",36],8,16],")+\"\\x26cd4\\x3d\"+(new Date).getTime()+\"\\x26cd5\\x3d\"+",["escape",["macro",37],8,16],"+\"\\x26cd6\\x3d\"+",["escape",["macro",21],8,16],"+\"\\x26cd7\\x3d\"+(a?\"warning\":\"error\")+\"\\x26vp\\x3d\"+document.documentElement.clientWidth+\"x\"+document.documentElement.clientHeight+\"\\x26sr\\x3d\"+window.screen.width+\n\"x\"+window.screen.height+\"\\x26sd\\x3d\"+window.screen.colorDepth;try{b+=0\u003C=",["escape",["macro",6],8,16],".toLowerCase().indexOf(\"click\")?\"\\x26cd8\\x3d\"+encodeURIComponent(",["escape",["macro",23],8,16],"(",["escape",["macro",38],8,16],")):\"\"}catch(g){b+=\"\\x26cd8\\x3dexception\"}try{c=[];var f=",["escape",["macro",22],8,16],".slice(-100);for(d=0;d\u003Cf.length;d++)c.push(f[d].event||\"message\");b+=\"\\x26cd9\\x3d\"+encodeURIComponent(c)}catch(g){b+=\"\\x26cd9\\x3dexception\"}if(a\u0026\u0026(!window._raccNowWarning||2E3\u003Cnew Date-window._raccNowWarning))a=document.createElement(\"img\"),\na.width=1,a.height=1,a.src=b,window._raccNowWarning=new Date;else if(!window._raccNow||2E3\u003Cnew Date-window._raccNow)a=document.createElement(\"img\"),a.width=1,a.height=1,a.src=b,window._raccNow=new Date}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var t={\"Array.from\":function(){var a=Object.prototype.toString,b=function(b){return\"function\"===typeof b||\"[object Function]\"===a.call(b)},c=Math.pow(2,53)-1;return function(a){var d=this,e=Object(a);if(null==a)throw new TypeError(\"Array.from requires an array-like object - not null or undefined\");var g=1\u003Carguments.length?arguments[1]:void 0,k;if(\"undefined\"!==typeof g){if(!b(g))throw new TypeError(\"Array.from: when provided, the second argument must be a function\");2\u003Carguments.length\u0026\u0026\n(k=arguments[2])}var h=Number(e.length);h=isNaN(h)?0:0!==h\u0026\u0026isFinite(h)?(0\u003Ch?1:-1)*Math.floor(Math.abs(h)):h;h=Math.min(Math.max(h,0),c);d=b(d)?Object(new d(h)):Array(h);for(var l=0,m;l\u003Ch;)m=e[l],d[l]=g?\"undefined\"===typeof k?g(m,l):g.call(k,m,l):m,l+=1;d.length=h;return d}}(),\"Array.isArray\":function(a){return\"[object Array]\"===Object.prototype.toString.call(a)},\"Array.prototype.every\":function(a){if(null==this)throw new TypeError(\"Array.prototype.every called on null or undefined\");if(\"function\"!==\ntypeof a)throw new TypeError(\"you must specify a valid function\");for(var b=Object(this),c=b.length\u003E\u003E\u003E0,e=2\u003C=arguments.length?arguments[1]:void 0,d=0;d\u003Cc;d++)if(d in b\u0026\u0026!a.call(e,b[d],d,b))return!1;return!0},\"Array.prototype.filter\":function(a){if(void 0===this||null===this)throw new TypeError;var b=Object(this),c=b.length\u003E\u003E\u003E0;if(\"function\"!==typeof a)throw new TypeError;for(var e=[],d=2\u003C=arguments.length?arguments[1]:void 0,f=0;f\u003Cc;f++)if(f in b){var g=b[f];a.call(d,g,f,b)\u0026\u0026e.push(g)}return e},\"Array.prototype.find\":function(a,\nb){if(null==this)throw new TypeError(\"Array.prototype.find called on null or undefined\");var c=Object(this),e=c.length\u003E\u003E\u003E0;if(\"function\"!==typeof a)throw new TypeError(\"Array.prototype.find called without a function predicate\");for(var d=b,f=0;f\u003Ce;){var g=c[f];if(a.call(d,g,f,c))return g;f++}},\"Array.prototype.findIndex\":function(a,b){if(null==this)throw new TypeError(\"Array.prototype.findIndex called on null or undefined\");var c=Object(this),e=c.length\u003E\u003E\u003E0;if(\"function\"!==typeof a)throw new TypeError(\"Array.prototype.findIndex called without a function predicate\");\nfor(var d=b,f=0;f\u003Ce;){var g=c[f];if(a.call(d,g,f,c))return f;f++}return-1},\"Array.prototype.forEach\":function(a){var b,c;if(null===this)throw new TypeError(\"this is null or not defined\");var e=Object(this),d=e.length\u003E\u003E\u003E0;if(\"function\"!==typeof a)throw new TypeError(a+\" is not a function\");1\u003Carguments.length\u0026\u0026(b=arguments[1]);for(c=0;c\u003Cd;){if(c in e){var f=e[c];a.call(b,f,c,e)}c++}},\"Array.prototype.includes\":function(a,b){if(null==this)throw new TypeError('\"this\" is null or not defined');var c=Object(this),\ne=c.length\u003E\u003E\u003E0;if(0===e)return!1;var d=b|0;for(d=Math.max(0\u003C=d?d:e-Math.abs(d),0);d\u003Ce;){var f=c[d];var g=a;if(f=f===g||\"number\"===typeof f\u0026\u0026\"number\"===typeof g\u0026\u0026isNaN(f)\u0026\u0026isNaN(g))return!0;d++}return!1},\"Array.prototype.indexOf\":function(a,b){if(null===this)throw new TypeError('\"this\" is null or not defined');var c=Object(this),e=c.length\u003E\u003E\u003E0;if(0===e)return-1;var d=b|0;if(d\u003E=e)return-1;for(d=Math.max(0\u003C=d?d:e-Math.abs(d),0);d\u003Ce;){if(d in c\u0026\u0026c[d]===a)return d;d++}return-1},\"Array.prototype.map\":function(a){var b,\nc;if(null===this)throw new TypeError(\"this is null or not defined\");var e=Object(this),d=e.length\u003E\u003E\u003E0;if(\"function\"!==typeof a)throw new TypeError(a+\" is not a function\");1\u003Carguments.length\u0026\u0026(b=arguments[1]);var f=Array(d);for(c=0;c\u003Cd;){if(c in e){var g=e[c];g=a.call(b,g,c,e);f[c]=g}c++}return f},\"Array.prototype.reduce\":function(a){if(null===this||void 0===this)throw new TypeError;if(\"function\"!==typeof a)throw new TypeError(a+\" is not a function\");var b=Object(this),c=b.length\u003E\u003E\u003E0,e=0;if(2\u003C=arguments.length)var d=\narguments[1];else{for(;e\u003Cc\u0026\u0026!(e in b);)e++;if(e\u003E=c)throw new TypeError(\"Reduce of empty array with no initial value\");d=b[e++]}for(;e\u003Cc;)e in b\u0026\u0026(d=a(d,b[e],e,b)),e++;return d},\"Array.prototype.some\":function(a){if(null==this)throw new TypeError(\"Array.prototype.some called on null or undefined\");if(\"function\"!==typeof a)throw new TypeError(\"you must specify a valid function\");for(var b=Object(this),c=b.length\u003E\u003E\u003E0,e=2\u003C=arguments.length?arguments[1]:void 0,d=0;d\u003Cc;d++)if(d in b\u0026\u0026a.call(e,b[d],d,b))return!0;\nreturn!1},\"Element.prototype.matches\":window.Element\u0026\u0026Element.prototype.matchesSelector||window.Element\u0026\u0026Element.prototype.mozMatchesSelector||window.Element\u0026\u0026Element.prototype.msMatchesSelector||window.Element\u0026\u0026Element.prototype.oMatchesSelector||window.Element\u0026\u0026Element.prototype.webkitMatchesSelector||function(a){a=(this.document||this.ownerDocument).querySelectorAll(a);for(var b=a.length;0\u003C=--b\u0026\u0026a.item(b)!==this;);return-1\u003Cb},\"Element.prototype.text\":function(){return this.textContent||this.innerText||\nthis.innerHTML},\"Function.prototype.bind\":function(a){if(\"function\"!==typeof this)throw new TypeError(\"Function.prototype.bind - what is trying to be bound is not callable\");var b=Array.prototype.slice.call(arguments,1),c=this,e=function(){},d=function(){return c.apply(this instanceof e?this:a,b.concat(Array.prototype.slice.call(arguments)))};this.prototype\u0026\u0026(e.prototype=this.prototype);d.prototype=new e;return d},\"Number.isNaN\":function(a){return a!==a},\"Object.assign\":function(a,b){for(var c=Object(a),\ne=1;e\u003Carguments.length;e++){var d=Object(arguments[e]),f;for(f in d)Object.prototype.hasOwnProperty.call(d,f)\u0026\u0026(c[f]=d[f])}return c},\"Object.entries\":function(a){for(var b=Object.keys(a),c=b.length,e=Array(c);c--;)e[c]=[b[c],a[b[c]]];return e},\"Object.fromEntries\":function(a){return a.reduce(function(a,c){var b=c[0],d=c[1];a[b]=d;return a},{})},\"Object.keys\":function(){var a=Object.prototype.hasOwnProperty,b=!{toString:null}.propertyIsEnumerable(\"toString\"),c=\"toString toLocaleString valueOf hasOwnProperty isPrototypeOf propertyIsEnumerable constructor\".split(\" \"),\ne=c.length;return function(d){if(\"function\"!==typeof d\u0026\u0026(\"object\"!==typeof d||null===d))throw new TypeError(\"Object.keys called on non-object\");var f=[],g;for(g in d)a.call(d,g)\u0026\u0026f.push(g);if(b)for(g=0;g\u003Ce;g++)a.call(d,c[g])\u0026\u0026f.push(c[g]);return f}}(),\"Object.values\":function(a){var b=[],c;for(c in a)a.hasOwnProperty(c)\u0026\u0026b.push(a[c]);return b},\"String.prototype.includes\":function(a,b){\"number\"!==typeof b\u0026\u0026(b=0);return b+a.length\u003Ethis.length?!1:-1!==this.indexOf(a,b)},\"String.prototype.startsWith\":function(a,\nb){return this.substr(!b||0\u003Eb?0:+b,a.length)===a},\"String.prototype.trim\":function(){return this.replace(\/^[\\s\\uFEFF\\xA0]+|[\\s\\uFEFF\\xA0]+$\/g,\"\")}},u={firstElementChild:function(){for(var a=this.children,b,c=0,e=a.length;c\u003Ce;++c)if(b=a[c],1===b.nodeType)return b;return null},lastElementChild:function(){for(var a=this.children,b,c=a.length-1;0\u003C=c;--c)if(b=a[c],1===b.nodeType)return b;return null},nextElementSibling:function(){for(var a=this.nextSibling;a\u0026\u00261!==a.nodeType;)a=a.nextSibling;return a},\npreviousElementSibling:function(){for(var a=this.previousSibling;a\u0026\u00261!==a.nodeType;)a=a.previousSibling;return a},childElementCount:function(){for(var a=0,b=this.children,c,e=0,d=b.length;e\u003Cd;++e)(c=b[e],1===c.nodeType)\u0026\u0026++a;return a}},h=document.getElementsByTagName(\"iframe\"),l=[],m=h.length;for(;m;)l[--m]=h[m];l.push(window);for(h=0;h\u003Cl.length;h++){try{h\u003Cl.length-1\u0026\u0026(l[h].contentWindow.teste=l[h].contentWindow.teste,l[h].contentDocument.teste=l[h].contentDocument.teste)}catch(a){continue}var k=\nl[h]===window?window:l[h].contentWindow,p=l[h]===window?document:l[h].contentDocument,q;for(q in t){for(var v=q.split(\".\"),w=v.pop(),n=m=void 0;m=v.shift();)n=n\u0026\u0026n[m]||k[m];n\u0026\u0026(n[w]||(n[w]=t[q]))}for(var r in u)p\u0026\u0026p.documentElement\u0026\u0026k\u0026\u0026k.Object\u0026\u0026k.Object.defineProperty\u0026\u0026(r in p.documentElement||k.Object.defineProperty(k.Element.prototype,r,{get:u[r]}));k\u0026\u0026k.Object\u0026\u0026k.Object.defineProperty\u0026\u0026k.Object.getOwnPropertyDescriptor\u0026\u0026k.Object.getOwnPropertyDescriptor(k.Element.prototype,\"textContent\")\u0026\u0026!k.Object.getOwnPropertyDescriptor(k.Element.prototype,\n\"textContent\").get\u0026\u0026function(){var a=k.Object.getOwnPropertyDescriptor(k.Element.prototype,\"innerText\");k\u0026\u0026k.Object\u0026\u0026k.Object.defineProperty\u0026\u0026k.Object.defineProperty(k.Element.prototype,\"textContent\",{get:function(){return a.get.call(this)},set:function(b){return a.set.call(this,b)}})}()}}catch(a){",["escape",["macro",39],8,16],"(\"Polyfills\",a.message,!1,!0)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){",["escape",["macro",40],8,16],";return function(name,fn,errorRet,hid,delegateHtmlSuccess){try{if(hid\u0026\u0026document.currentScript)try{document.currentScript.parentNode.removeChild(document.currentScript)}catch(e){}if(document.location.href.indexOf(\"gtm-msr.appspot.com\")\u003E=0)throw\"gtm-msr.appspot.com\/render2 execution\";var ret=fn();!delegateHtmlSuccess\u0026\u0026hid\u0026\u0026window.google_tag_manager[",["escape",["macro",21],8,16],"].onHtmlSuccess(hid);if(!hid){try{var event=",["escape",["macro",6],8,16],";window.GTMUtils=window.GTMUtils||\n{};window.GTMUtils[\"variables\"]=window.GTMUtils[\"variables\"]||{};window.GTMUtils[\"variables\"][name]=window.GTMUtils[\"variables\"][name]||{};window.GTMUtils[\"variables\"][name][event]=ret}catch(e){}if(ret!==ret)throw new Error(\"variable returned NaN\");if(ret===Infinity||ret===-Infinity)throw new Error(\"variable returned +-Infinity\");}return ret}catch(e){",["escape",["macro",39],8,16],"(name,e.name+\": \"+e.message,hid);hid\u0026\u0026window.google_tag_manager[",["escape",["macro",21],8,16],"].onHtmlFailure(hid);if(arguments.length\u003E=\n3)return errorRet;return null}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",41],8,16],"(\"Body ID\",function(){return document.getElementsByTagName(\"body\")[0].className})})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",41],8,16],"(\"UserId\",function(){return infoPetlove.client[\"public\"]\u0026\u0026infoPetlove.client[\"public\"].public_id?infoPetlove.client[\"public\"].public_id:\"\"})})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",41],8,16],"(\"isFirstBuy - Integer\",function(){return ",["escape",["macro",29],8,16],"?1:0})})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",41],8,16],"(\"First Buy Revenue\",function(){return ",["escape",["macro",29],8,16],"?",["escape",["macro",30],8,16],":0})})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",41],8,16],"(\"isFirstBuy - String\",function(){return ",["escape",["macro",29],8,16],".toString()})})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"_ga"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",41],8,16],"(\"gaCookieIdSanitized\",function(){var a=",["escape",["macro",47],8,16],";try{var b=a.split(\".\").splice(2,2).join(\".\");return b}catch(c){return a}})})();"]
    },{
      "function":"__c",
      "vtp_value":"RaccoonUtmSource"
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":["macro",49]
    },{
      "function":"__c",
      "vtp_value":"RaccoonUtmMedium"
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":["macro",51]
    },{
      "function":"__c",
      "vtp_value":"RaccoonUtmCampaign"
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":["macro",53]
    },{
      "function":"__c",
      "vtp_value":"RaccoonUtmContent"
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":["macro",55]
    },{
      "function":"__c",
      "vtp_value":"RaccoonUtmTerm"
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":["macro",57]
    },{
      "function":"__c",
      "vtp_value":"RaccoonGclid"
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":["macro",59]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_source",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_medium",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_campaign",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_content",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_term",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"gclid",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__f",
      "vtp_stripWww":false,
      "vtp_component":"HOST"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",67],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_defaultValue":["macro",16],
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^$","value",["macro",15]],["map","key","petlove\\.com\\.br$","value",["macro",15]],["map","key",["macro",68],"value",["macro",15]],["map","key","petlove.com.br","value",["macro",15]]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var e=0,f=0,d=function(a,b){return ",["escape",["macro",41],8,16],"(\"Are Objects Equal - Function\",function(){if(a===b)return!0;if(\"object\"!==typeof a||\"object\"!==typeof b)return!1;for(var c in a)if(a.hasOwnProperty(c))if(\"object\"===typeof a[c]){if(200\u003C++e)throw Error(\"depthCount \\x3e 200\");var g=d(a[c],b[c]);--e;if(!1===g)return!1}else{if(2E3\u003C++f)throw Error(\"comparisonCount \\x3e 2000\");if(a[c]!==b[c])return!1}return!0})};return function(a,b){return d(a,b)\u0026\u0026d(b,a)}})();"]
    },{
      "function":"__c",
      "vtp_value":"petlove.com.br"
    },{
      "function":"__c",
      "vtp_value":"RaccoonUtmTimestamp"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",41],8,16],"(\"Is In Iframe -- Library Last Click\",function(){return self!==top})})();"]
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(!",["escape",["macro",73],8,16],")return ",["escape",["macro",74],8,16],";try{var a=Array.prototype.slice.call(window.location.ancestorOrigins).reverse()}catch(c){}try{var b=top.location.href}catch(c){}if(a\u0026\u0026b)return a[0]=b,a.push(",["escape",["macro",74],8,16],"),a.join(\"|\");if(b\u0026\u0026!a)return[b,\"ancestorOrigins unavailable\",",["escape",["macro",74],8,16],"].join(\"|\");if(!b\u0026\u0026a)return a.push(",["escape",["macro",74],8,16],"),a.join(\"|\");if(!b\u0026\u0026!a)return[\"top href unavailable|ancestorOrigins unavailable\",",["escape",["macro",74],8,16],"].join(\"|\")})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":["macro",72]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=!1;window.GTMUtils=window.GTMUtils||{};if(!window.GTMUtils.attribution){b\u0026\u0026console.group(\"LLC\");var a=window.GTMUtils.attribution={changed:!1,old:{source:",["escape",["macro",50],8,16],",medium:",["escape",["macro",52],8,16],",campaign:",["escape",["macro",54],8,16],",content:",["escape",["macro",56],8,16],",term:",["escape",["macro",58],8,16],",gclid:",["escape",["macro",60],8,16],"}};",["escape",["macro",61],8,16],"?(b\u0026\u0026console.log(\"Entrada: UTMs\"),a[\"new\"]={source:",["escape",["macro",61],8,16],",medium:",["escape",["macro",62],8,16],",campaign:",["escape",["macro",63],8,16],",content:",["escape",["macro",64],8,16],",\nterm:",["escape",["macro",65],8,16],"}):",["escape",["macro",66],8,16],"?(b\u0026\u0026console.log(\"Entrada: gclid\"),a[\"new\"]={source:\"google\",medium:\"cpc\",campaign:\"auto\",gclid:",["escape",["macro",66],8,16],"}):",["escape",["macro",69],8,16],"?a.old.source?(b\u0026\u0026console.log(\"Entrada: navega\\u00e7\\u00e3o interna; ou direta na vig\\u00eancia dos cookies\"),a[\"new\"]=a.old):(b\u0026\u0026console.log(\"Entrada: direta\"),a[\"new\"]={source:\"(direct)\",medium:\"(none)\"}):(b\u0026\u0026console.log(\"Entrada: refer\\u00eancia\"),a[\"new\"]={source:",["escape",["macro",67],8,16],",medium:\"referral\"});\nif(",["escape",["macro",70],8,16],"(a.old,a[\"new\"]))b\u0026\u0026console.log(\"Atribui\\u00e7\\u00e3o n\\u00e3o mudou \\x3d\\x3e cookies n\\u00e3o foram tocados\");else{var c=",["escape",["macro",17],8,16],",d=",["escape",["macro",71],8,16],",e=\"\/\",h=(new Date).getTime().toString(),f=",["escape",["macro",18],8,16],",g=function(a){return[a.source||\"(not set)\",a.medium||\"(not set)\",a.campaign||\"(not set)\",a.content||\"(not set)\",a.term||\"(not set)\"].join(\"|\")};c.removeItem(",["escape",["macro",53],8,16],",e,d);c.removeItem(",["escape",["macro",55],8,16],",e,d);c.removeItem(",["escape",["macro",57],8,16],",\ne,d);c.removeItem(",["escape",["macro",59],8,16],",e,d);c.setItem(",["escape",["macro",72],8,16],",h,f,e,d);c.setItem(",["escape",["macro",49],8,16],",a[\"new\"].source,f,e,d);c.setItem(",["escape",["macro",51],8,16],",a[\"new\"].medium,f,e,d);a[\"new\"].campaign\u0026\u0026c.setItem(",["escape",["macro",53],8,16],",a[\"new\"].campaign,f,e,d);a[\"new\"].content\u0026\u0026c.setItem(",["escape",["macro",55],8,16],",a[\"new\"].content,f,e,d);a[\"new\"].term\u0026\u0026c.setItem(",["escape",["macro",57],8,16],",a[\"new\"].term,f,e,d);a[\"new\"].gclid\u0026\u0026c.setItem(",["escape",["macro",59],8,16],",a[\"new\"].gclid,f,e,d);a.changed=\n!0;a.fromTo=\"from:(\"+g(a.old)+\") to:(\"+g(a[\"new\"])+\")\";a.origins=",["escape",["macro",75],8,16],";",["escape",["macro",73],8,16],"?(b\u0026\u0026console.log(\"Atribui\\u00e7\\u00e3o SUSPEITA!!\"),a.classification=\"suspect\"):(a.classification=\"not suspect\",a.lastNotSuspect=g(a[\"new\"]));b\u0026\u0026console.log(\"Atribui\\u00e7\\u00e3o mudou\")}b\u0026\u0026console.log(\"Attribution:\",JSON.stringify(a,null,2));b\u0026\u0026console.log(\"document.referrer:\",document.referrer);b\u0026\u0026console.log(\"Cookie Timestamp:\",new Date(Number(",["escape",["macro",76],8,16],")));b\u0026\u0026console.groupEnd(\"LLC\")}return\"window.GTMUtils.attribution\"})();"]
    },{
      "function":"__j",
      "vtp_name":["template",["macro",77],".origins"]
    },{
      "function":"__j",
      "vtp_name":["template",["macro",77],".classification"]
    },{
      "function":"__j",
      "vtp_name":["template",["macro",77],".lastNotSuspect"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"filter_selected"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"banner_src"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"value"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"action"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"label"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"subscriptionPage"
    },{
      "function":"__j",
      "vtp_name":["template",["macro",77],".changed"]
    },{
      "function":"__j",
      "vtp_name":["template",["macro",77],".fromTo"]
    },{
      "function":"__r"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.produtos"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",41],8,16],"(\"listingProductIDs\",function(){var a=",["escape",["macro",93],8,16],";return a.map(function(a){return a.id_original})})})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",41],8,16],"(\"AdWords DRA Payload Search\",function(){return{ecomm_pagetype:\"searchresults\",ecomm_prodid:",["escape",["macro",94],8,16],".slice(0,3),search_term:",["escape",["macro",5],8,16],"}})})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.navigation.name"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",41],8,16],"(\"AdWords DRA Payload Category\",function(){return{ecomm_pagetype:\"category\",ecomm_prodid:",["escape",["macro",94],8,16],".slice(0,3),ecomm_category:",["escape",["macro",96],8,16],"}})})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",41],8,16],"(\"Product ID Sanitized\",function(){var a=",["escape",["macro",9],8,16],";return\/-\/.test(a)?a.split(\"-\")[0]:a})})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",41],8,16],"(\"AdWords DRA Payload Product\",function(){return{ecomm_pagetype:\"product\",ecomm_prodid:",["escape",["macro",98],8,16],",ecomm_totalvalue:Number(",["escape",["macro",12],8,16],")}})})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",41],8,16],"(\"AdWords DRA Payload Cart\",function(){var a=",["escape",["macro",11],8,16],",c=a.map(function(a){return a.id});a=a.reduce(function(a,b){return a+Number(b.price)*Number(b.quantity)},0);return{ecomm_pagetype:\"cart\",ecomm_prodid:c,ecomm_totalvalue:Number(a.toFixed(2))}})})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",41],8,16],"(\"AdWords DRA Payload Purchase\",function(){var a=",["escape",["macro",9],8,16],",b=",["escape",["macro",30],8,16],";return{ecomm_pagetype:\"purchase\",ecomm_prodid:a,ecomm_totalvalue:Number(b)}})})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"category"
    },{
      "function":"__hid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",14],
      "vtp_name":"ecommerce.purchase"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",41],8,16],"(\"Cart Product Ids\",function(){var a=",["escape",["macro",11],8,16],";return a=a.map(function(a){return a.id})})})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.products"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",41],8,16],"(\"Purchase Product List\",function(){var a=",["escape",["macro",107],8,16],";return a=a.map(function(a){return a.id})})})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.id"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"Is XMLHttpRequest Prototype Changed  By Site\";return ",["escape",["macro",41],8,16],"(a,function(){return!XMLHttpRequest.prototype.open.gtmObserved||!XMLHttpRequest.prototype.send.gtmObserved})})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){return ",["escape",["macro",41],8,16],"(\"Is Empty Object - Function\",function(){for(var b in a)if(a.hasOwnProperty(b))return!1;return JSON.stringify(a)===JSON.stringify({})})}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,c){return ",["escape",["macro",41],8,16],"(\"Get GTMUtils Namespace - Function\",function(){var b=window.GTMUtils=window.GTMUtils||{},d=0,e=",["escape",["macro",111],8,16],",g=function f(a,b){d++;if(\"object\"!==typeof a||!Array.isArray(b)||20\u003Cd)throw Error('problema na fun\\u00e7\\u00e3o \"createNS\"');if(0===b.length)return a;var c=b.shift();a[c]=a[c]||{};return f(a[c],b)};if(!(typeof a).match(\/undefined|string\/)||!(typeof c).match(\/undefined|object\/))throw Error(\"wrong input parameters\");if(\"string\"===\ntypeof a\u0026\u0026(!a.match(\/^\\w\/)||a.match(\/\\.\\.\/)))throw Error(\"wrong input parameters\");b=a?g(b,a.split(\".\")):b;c\u0026\u0026e(b)\u0026\u0026Object.assign(b,c);return b})}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,b,c){return ",["escape",["macro",41],8,16],"(\"Add Event - Function\",function(){if(a.addEventListener)try{a.addEventListener(b,c,{passive:!0,capture:!0})}catch(d){a.addEventListener(b,c,!0)}else a.attachEvent?a.attachEvent(\"on\"+b,function(b){c.call(a,b)}):a[\"on\"+b]||(a[\"on\"+b]=function(b){c.call(a,b)})})}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(m){var c=\"Add XHR Listener - Function\";return ",["escape",["macro",41],8,16],"(c,function(){var n=",["escape",["macro",25],8,16],",d=",["escape",["macro",112],8,16],"(\"XHR Listener\"),g=function(b,a){try{if(!(this instanceof XMLHttpRequest))throw Error('\"this\" should be a XMLHttpRequest instance, but instead it is '+Object.prototype.toString.call(this));this.requestMethod=b;this.requestURL=a;e.apply(this,arguments)}catch(f){",["escape",["macro",39],8,16],"(c+\" - newOpen()\",f.name+\": \"+f.message,!1,!1)}},l=function(b){try{if(!(this instanceof\nXMLHttpRequest))throw Error(\"this should be a XMLHttpRequest instance, but instead it is \"+Object.prototype.toString.call(this));this.requestBody=b;try{this.requestBodyJson=JSON.parse(b)}catch(a){}this.onreadystatechange=n(this.onreadystatechange||function(){},function(a){4===this.readyState\u0026\u0026200\u003C=this.status\u0026\u0026300\u003Ethis.status\u0026\u0026h.bind(this)(a)});",["escape",["macro",113],8,16],"(this,\"load\",h);k.apply(this,arguments)}catch(a){",["escape",["macro",39],8,16],"(c+\" - newSend()\",a.name+\": \"+a.message,!1,!1)}},h=function(b){try{if(!this.gtmAlreadyCalled){this.gtmAlreadyCalled=\n!0;if(\"json\"===this.responseType)this.responseJson=this.response;else try{this.responseJson=this.responseJson||JSON.parse(this.responseText)}catch(a){}try{this.responseURL=this.responseURL||this.url}catch(a){}if(\"function\"!==typeof d.callback)throw Error(\"ns.callback is gone\");d.callback.call(this,this)}}catch(a){",["escape",["macro",39],8,16],"(c+\" - xhrLoadCallback()\",a.name+\": \"+a.message,!1,!1)}};d.callback||(d.callback=m);if(XMLHttpRequest.prototype.open.gtmObserved||XMLHttpRequest.prototype.send.gtmObserved){if(!XMLHttpRequest.prototype.open.gtmObserved){var e=\nXMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open=g;XMLHttpRequest.prototype.open.gtmObserved=!0}if(!XMLHttpRequest.prototype.send.gtmObserved){var k=XMLHttpRequest.prototype.send;XMLHttpRequest.prototype.send=l;XMLHttpRequest.prototype.send.gtmObserved=!0}}else e=XMLHttpRequest.prototype.open,k=XMLHttpRequest.prototype.send,XMLHttpRequest.prototype.open=g,XMLHttpRequest.prototype.send=l,XMLHttpRequest.prototype.open.gtmObserved=!0,XMLHttpRequest.prototype.send.gtmObserved=!0})}})();"]
    },{
      "function":"__c",
      "vtp_value":"XHR Listener"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",41],8,16],"(\"UserMail\",function(){var a=infoPetlove.client.email;return a?a:\"\"})})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"responseStatus"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",41],8,16],"(\"pageType\",function(){var a=",["escape",["macro",42],8,16],",b=",["escape",["macro",83],8,16],";if(\"cart\"==a)switch(b){case \"\/carrinho\":return\"cart\";case \"\/carrinho\/pedido\":return\"purchase\";default:return\"checkout\"}else return a})})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"responseURL"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"responseText"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"responseStatusText"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"responseJson"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"responseBody"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"requestURL"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"requestMethod"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"requestBodyJson"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"requestBody"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__dbg"
    }],
  "tags":[{
      "function":"__html",
      "priority":500,
      "once_per_event":true,
      "vtp_html":"\u003Clink rel=\"manifest\" href=\"\/manifest.json\"\u003E\n\u003Cscript data-gtmsrc=\"https:\/\/cdn.onesignal.com\/sdks\/OneSignalSDK.js\" async=\"\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar OneSignal=window.OneSignal||[];OneSignal.push(function(){OneSignal.init({appId:\"c8a53edb-c01e-4553-9c85-bfdb0a089f03\"})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":270
    },{
      "function":"__html",
      "priority":300,
      "once_per_event":true,
      "vtp_html":"\u003Ciframe src=\"\/\/us.creativecdn.com\/tags?id=pr_YhfzLS5SDL5jJ7RoIgI9\u0026amp;ncm=1\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":252
    },{
      "function":"__html",
      "priority":300,
      "once_per_event":true,
      "vtp_html":"\u003Ciframe src=\"\/\/us.creativecdn.com\/tags?id=pr_YhfzLS5SDL5jJ7RoIgI9_home\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":253
    },{
      "function":"__html",
      "priority":300,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" async=\"async\"\u003E",["escape",["macro",41],8,16],"(\"Search - Load - RTB\",function(){var b=infoPetlove.search||google_tag_manager[\"GTM-TJZNNL\"].dataLayer.get(\"info\")||{},a=b.produtos||[];if(a\u0026\u00260\u003Ca.length){b=[];for(var c=0;c\u003Ca.length\u0026\u0026!(b.push(a[c].id_original),3\u003C=b.length);c++);a=document.createElement(\"iframe\");a.src=\"\/\/us.creativecdn.com\/tags?id\\x3dpr_YhfzLS5SDL5jJ7RoIgI9_listing_\"+b.join(\",\");a.width=\"1\";a.height=\"1\";a.scrolling=\"no\";a.frameBorder=\"0\";a.style=\"display: none;\";document.body.appendChild(a)}},void 0,",["escape",["macro",103],8,16],");\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":255
    },{
      "function":"__html",
      "priority":300,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" async=\"async\"\u003E",["escape",["macro",41],8,16],"(\"Product - Load - RTB\",function(){try{var b=infoPetlove.product||google_tag_manager[\"GTM-TJZNNL\"].dataLayer.get(\"info\")||{},c=b.variants[0].sku,a=document.createElement(\"iframe\");a.src=\"\/\/us.creativecdn.com\/tags?id\\x3dpr_YhfzLS5SDL5jJ7RoIgI9_offer_\"+c;a.width=\"1\";a.height=\"1\";a.scrolling=\"no\";a.frameBorder=\"0\";a.style=\"display: none;\";document.body.appendChild(a)}catch(d){console.log(\"RTB - Product: \",d)}},void 0,",["escape",["macro",103],8,16],");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":256
    },{
      "function":"__html",
      "priority":300,
      "once_per_event":true,
      "vtp_html":"\u003Ciframe src=\"\/\/us.creativecdn.com\/tags?id=pr_YhfzLS5SDL5jJ7RoIgI9_startorder\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":258
    },{
      "function":"__html",
      "priority":300,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" async=\"async\"\u003E",["escape",["macro",41],8,16],"(\"Purchase - Load - RTB -- Conversion\",function(){var b=infoPetlove.order,d=b.total,e=b.number,a=b.line_items;b=[];for(var c=0;c\u003Ca.length;c++){var f=a[c].sku?a[c].sku:a[c].variant.sku;b.push(f);if(3\u003C=b.length)break}a=document.createElement(\"iframe\");a.src=\"\/\/us.creativecdn.com\/tags?id\\x3dpr_YhfzLS5SDL5jJ7RoIgI9_orderstatus2_{VALUE}_{ORDERID}_{ID}\";a.src=a.src.replace(\"{VALUE}\",d);a.src=a.src.replace(\"{ORDERID}\",e);a.src=a.src.replace(\"{ID}\",b.join(\",\"));a.width=\"1\";a.height=\"1\";\na.scrolling=\"no\";a.frameBorder=\"0\";a.style=\"display: none;\";document.body.appendChild(a)},void 0,",["escape",["macro",103],8,16],");\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":259
    },{
      "function":"__awct",
      "priority":100,
      "once_per_load":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":["macro",31],
      "vtp_conversionLabel":"Rrv1CJfO1HYQ5rWa7QM",
      "vtp_url":["macro",32],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":275
    },{
      "function":"__awct",
      "priority":100,
      "once_per_load":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":["macro",31],
      "vtp_conversionLabel":"2OscCNzs13YQ5rWa7QM",
      "vtp_url":["macro",32],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":276
    },{
      "function":"__html",
      "priority":100,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"async\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\" async=\"async\"\u003E",["escape",["macro",41],8,16],"(\"Product - Load - Criteo\",function(){try{var b=infoPetlove.product||google_tag_manager[\"GTM-TJZNNL\"].dataLayer.get(\"info\"),a=\"\";\"undefined\"!=typeof infoPetlove.client.email\u0026\u0026(a=infoPetlove.client.email);window.criteo_q=window.criteo_q||[];window.criteo_q.push({event:\"setAccount\",account:6194},{event:\"setSiteType\",type:\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\"},{event:\"setEmail\",email:a},{event:\"viewItem\",\nitem:b.variants[0].sku})}catch(c){console.log(\"Criteo - Product: \",c)}},void 0,",["escape",["macro",103],8,16],");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":16
    },{
      "function":"__html",
      "priority":100,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"async\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\" async=\"async\"\u003E",["escape",["macro",41],8,16],"(\"Home - Load - Criteo\",function(){try{var a=\"\";\"undefined\"!=typeof infoPetlove.client.email\u0026\u0026(a=infoPetlove.client.email);window.criteo_q=window.criteo_q||[];window.criteo_q.push({event:\"setAccount\",account:6194},{event:\"setSiteType\",type:\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\"},{event:\"setEmail\",email:a},{event:\"viewHome\"})}catch(b){console.log(\"Criteo - Home: \",b)}},void 0,",["escape",["macro",103],8,16],");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":21
    },{
      "function":"__html",
      "priority":100,
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" async=\"async\"\u003Etry{window._neemu=[];var _neemu=_neemu||[];(function(){_neemu.push([\"_setAccount\",\"petlove\"]);_neemu.push([\"_setProductPageType\"]);var c=infoPetlove.product||google_tag_manager[\"GTM-TJZNNL\"].dataLayer.get(\"info\");c=JSON.parse(JSON.stringify(c));var b=location.href;b=b.split(\"?\")[0];var d=c.has_variants,a=c.variants[0],f=!1;if(infoPetlove.client\u0026\u0026void 0!==infoPetlove.client.email)if(!0===infoPetlove.client.logged){var e=infoPetlove.client.firstname+\" \"+infoPetlove.client.lastname;_neemu.push([\"_setUser\",\ninfoPetlove.client.email,e,infoPetlove.client.email])}else _neemu.push([\"_setUser\",infoPetlove.client.email,null,infoPetlove.client.email]);if(d){e=a;d=a.images;var g=d[0]?d[0].product_url:\" \";variantSize=c.variants.length;for(d=0;d\u003CvariantSize;d++)c.variants[d].in_stock\u0026\u0026(f=!0,d=variantSize);parseFloat(e.list_price)\u003CparseFloat(e.price)\u0026\u0026(e.list_price=e.price);_neemu.push([\"_setProductInformation\",a.sku,c.name,g,b,f,999999,e.price,e.list_price,e.best_installment?e.best_installment.count:\"\",e.best_installment?\ne.best_installment.amount:\"\"]);for(d=0;d\u003Cc.variants.length;d++)b=c.variants[d],a=\"\",parseFloat(b.list_price)\u003CparseFloat(b.price)\u0026\u0026(b.list_price=b.price),_neemu.push([\"_addSku\",b.sku,b.in_stock,b.price,b.list_price,b.best_installment?b.best_installment.count:\"\",b.best_installment?b.best_installment.amount:\"\"]),b.chosen_option_value\u0026\u0026b.chosen_option_value.presentation\u0026\u0026(a=b.chosen_option_value.presentation),c.chosen_option_type\u0026\u0026_neemu.push([\"_addSkuSpec\",b.sku,c.chosen_option_type.name,a])}else g=\na.images[0]?a.images[0].product_url:\" \",f=a.in_stock?!0:!1,parseFloat(a.list_price)\u003CparseFloat(a.price)\u0026\u0026(a.list_price=a.price),_neemu.push([\"_setProductInformation\",a.sku,c.name,g,b,f,999999,a.price,a.list_price,a.best_installment?a.best_installment.count:\"\",a.best_installment?a.best_installment.amount:\"\"]),_neemu.push([\"_addSku\",a.sku,a.in_stock,a.price,a.list_price,a.best_installment?a.best_installment.count:\"\",a.best_installment?a.best_installment.amount:\"\"]);_neemu.push([\"_trackPage\"]);var h=\nsetInterval(function(){tagNeemuIsReady()\u0026\u0026(clearInterval(h),neemuPlugin.track())},1E3)})()}catch(c){console.log(\"Neemu Track - Product: \",c)};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":24
    },{
      "function":"__html",
      "priority":100,
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" async\u003Ewindow._neemu=[];var _neemu=_neemu||[],newSearch=newSearch||!1;\n(function(){_neemu.push([\"_setAccount\",\"petlove\"]);_neemu.push([\"_setNavigationPageType\"]);var a=google_tag_manager[\"GTM-TJZNNL\"].dataLayer.get(\"info\")||{},c=a.params,d=a.produtos||[],e=d?d.length:0;c=c.page;var b=0;void 0!==infoPetlove.client.email\u0026\u0026(!0===infoPetlove.client.logged?(b=infoPetlove.client.firstname+\" \"+infoPetlove.client.lastname,_neemu.push([\"_setUser\",infoPetlove.client.email,b,infoPetlove.client.email])):_neemu.push([\"_setUser\",infoPetlove.client.email,null,infoPetlove.client.email]));\n_neemu.push([\"_setNavigationInformation\",window.location.pathname,a.navigation.name,a.tproc,a.max_produtos,a.params.page]);for(a=0;a\u003Ce;a++)b=(c-1)*e+a,_neemu.push([\"_addProductNavigation\",d[a].id_grupo,b+1]);_neemu.push([\"_trackPage\"]);var f=setInterval(function(){tagNeemuIsReady()\u0026\u0026(clearInterval(f),neemuPlugin.track())},1E3)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":26
    },{
      "function":"__html",
      "priority":100,
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" async\u003Ewindow._neemu=[];var _neemu=_neemu||[],catalog=infoPetlove.category||google_tag_manager[\"GTM-TJZNNL\"].dataLayer.get(\"info\")||{};\n(function(){_neemu.push([\"_setAccount\",\"petlove\"]);_neemu.push([\"_setNavigationPageType\"]);var b=catalog,d=catalog.params||{},e=b.produtos,f=e.length,g=d.page||1,c=0;void 0!=infoPetlove.client.email\u0026\u0026(1==infoPetlove.client.logged?(c=infoPetlove.client.firstname+\" \"+infoPetlove.client.lastname,_neemu.push([\"_setUser\",infoPetlove.client.email,c,infoPetlove.client.email])):_neemu.push([\"_setUser\",infoPetlove.client.email,null,infoPetlove.client.email]));b.navigation\u0026\u0026_neemu.push([\"_setNavigationInformation\",\nwindow.location.pathname,b.navigation.name,b.tproc,b.max_produtos,g]);b=d.range_filter;d=d.common_filter;for(var a in b)c=b[a],_neemu.push([\"_addFilterInformation\",a,c]);for(a in d)c=d[a],_neemu.push([\"_addFilterInformation\",a,c]);for(a=0;a\u003Cf;a++)c=(g-1)*f+a,_neemu.push([\"_addProductNavigation\",e[a].id_grupo,c+1]);_neemu.push([\"_trackPage\"]);var h=setInterval(function(){tagNeemuIsReady()\u0026\u0026(clearInterval(h),neemuPlugin.track())},1E3)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":27
    },{
      "function":"__html",
      "priority":100,
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" async\u003Ewindow._neemu=[];var _neemu=_neemu||[],catalog=google_tag_manager[\"GTM-TJZNNL\"].dataLayer.get(\"info\")||{};\n(function(){_neemu.push([\"_setAccount\",\"petlove\"]);_neemu.push([\"_setSearchPageType\"]);var a=catalog,b=catalog.params||{},c=a.produtos||[];if(0!=c.length){var d=c.length,g=b.page||1,e=0;void 0!=infoPetlove.client.email\u0026\u0026(1==infoPetlove.client.logged?(e=infoPetlove.client.firstname+\" \"+infoPetlove.client.lastname,_neemu.push([\"_setUser\",infoPetlove.client.email,e,infoPetlove.client.email])):_neemu.push([\"_setUser\",infoPetlove.client.email,null,infoPetlove.client.email]));e=a.sugestao_consulta?1:0;\n_neemu.push([\"_setSearchInformation\",a.qnorm,a.max_produtos,a.tproc,e,a.resultados_and,a.vqd.query,!1,g,b.q]);for(a=0;a\u003Cd;a++)e=(g-1)*d+a,_neemu.push([\"_addProductSearch\",c[a].kid,e+1]);c=b.range_filter;b=b.common_filter;for(var f in c)d=c[f],_neemu.push([\"_addFilterInformation\",f,d]);for(f in b)d=b[f],_neemu.push([\"_addFilterInformation\",f,d]);_neemu.push([\"_trackPage\"]);var h=setInterval(function(){tagNeemuIsReady()\u0026\u0026(clearInterval(h),neemuPlugin.track())},1E3)}})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":28
    },{
      "function":"__html",
      "priority":100,
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" async\u003Ewindow._neemu=[];var _neemu=_neemu||[];\n(function(){_neemu.push([\"_setAccount\",\"petlove\"]);_neemu.push([\"_setHomePageType\"]);if(void 0!=infoPetlove.client.email)if(1==infoPetlove.client.logged){var a=infoPetlove.client.firstname+\" \"+infoPetlove.client.lastname;_neemu.push([\"_setUser\",infoPetlove.client.email,a,infoPetlove.client.email])}else _neemu.push([\"_setUser\",infoPetlove.client.email,null,infoPetlove.client.email]);_neemu.push([\"_trackPage\"]);var b=setInterval(function(){tagNeemuIsReady()\u0026\u0026(clearInterval(b),neemuPlugin.track())},\n1E3)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":29
    },{
      "function":"__html",
      "priority":100,
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"async\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\" async=\"async\"\u003E",["escape",["macro",41],8,16],"(\"Various - Load - Criteo -- Listing\",function(){try{var a=google_tag_manager[\"GTM-TJZNNL\"].dataLayer.get(\"info\")||{},c=[];if(\"undefined\"!=typeof a\u0026\u0026a.produtos)var b=a.produtos.length;b=3\u003C=b?3:b;i=0;for(b;i\u003Cb;i++)if(\"undefined\"!=typeof a\u0026\u0026a.produtos){var d=a.produtos[i].kid;c[i]=d}a=\"\";\"undefined\"!=typeof infoPetlove.client.email\u0026\u0026(a=infoPetlove.client.email);window.criteo_q=window.criteo_q||[];window.criteo_q.push({event:\"setAccount\",account:6194},{event:\"setSiteType\",type:\/iPad\/.test(navigator.userAgent)?\n\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\"},{event:\"setEmail\",email:a},{event:\"viewList\",item:c})}catch(e){console.log(\"Criteo - Listing: \",e)}},void 0,",["escape",["macro",103],8,16],");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":58
    },{
      "function":"__html",
      "priority":100,
      "metadata":["map"],
      "unlimited":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" async=\"async\"\u003E",["escape",["macro",41],8,16],"(\"Purchase - Load - Zanox -- Conversion\",function(){var d=null;\"undefined\"!=typeof $app\u0026\u0026$app.Cookie?d=$app.Cookie.Promotion.getUtmCookies():\"undefined\"!=typeof fnGetCookie\u0026\u0026(d=fnGetCookie(\"IPS_checkout\"));var e=function(b){b=b[\"public\"];var c=\"anonymous\";this.id=\"undefined\"!==typeof b?b.public_id||c:c},f=function(b){this.new_client=b.new_client?!0:!1;this.number=b.number;this.total=Number(b.total)-Number(b.ship_total)},g=function(b,c){this.constructor=function(a,b){this.order=\nnew f(a.infoPetlove.order);this.customer=new e(a.infoPetlove.client);this.source=\"\";try{this.source=JSON.parse(b).utm_source}catch(h){}this.init()};this.isValid=function(){return this.source\u0026\u0026this.source.toLowerCase().match(\"zanox\")};this.buildParams=function(){var a=\"\\x26CID\\x3d[[ext]]\\x26CustomerID\\x3d[[CustomerID]]\\x26OrderID\\x3d[[OrderID]]\\x26CurrencySymbol\\x3d[[BRL]]\\x26TotalPrice\\x3d[[TotalPrice]]\\x26PartnerID\\x3d[[PartnerID]]\\x26ReviewNote\\x3d[[ReviewNote]]\",b=this.order.number,c=this.order.total.toFixed(2),\nd=this.order.number;this.order.new_client\u0026\u0026(a=a.replace(\"[[ext]]\",\"[[nov]]\"));a=a.replace(\"[[CustomerID]]\",\"[[\"+b+\"]]\");a=a.replace(\"[[OrderID]]\",\"[[\"+d+\"]]\");a=a.replace(\"[[TotalPrice]]\",\"[[\"+c+\"]]\");a=a.replace(\"[[PartnerID]]\",\"[[]]\");return a=a.replace(\"[[ReviewNote]]\",\"[[]]\")};this.attachTag=function(){var a=document.createElement(\"script\");a.src=\"https:\/\/ad.zanox.com\/pps\/?12220C1194947229\\x26mode\\x3d[[1]]\"+this.buildParams();a.type=\"text\/javascript\";a.async=\"async\";document.body.appendChild(a)};\nthis.init=function(){this.isValid()\u0026\u0026this.attachTag()};this.constructor(b,c)};window.zanoxEvent=new g(window,d)},void 0,",["escape",["macro",103],8,16],");\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":66
    },{
      "function":"__html",
      "priority":100,
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"712576715490947\");fbq(\"trackSingle\",\"712576715490947\",\"PageView\");\u003C\/script\u003E\n \n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=712576715490947\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":71
    },{
      "function":"__html",
      "priority":100,
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" async\u003Ewindow._neemu=[];var _neemu=_neemu||[];\n(function(){_neemu.push([\"_setAccount\",\"petlove\"]);_neemu.push([\"_setCartPageType\"]);var b=infoPetlove.order;if(b\u0026\u0026b.line_items){for(i=0;i\u003Cb.line_items.length;i++){var a=b.line_items[i],c=a.variant?a.variant.sku:a.sku,d=a.variant?a.variant.product_sku:a.product_sku;_neemu.push([\"_addCartItem\",c,a.price+\" BRL\",a.quantity,d])}void 0!=infoPetlove.client.email\u0026\u0026(1==infoPetlove.client.logged?(b=infoPetlove.client.firstname+\" \"+infoPetlove.client.lastname,_neemu.push([\"_setUser\",infoPetlove.client.email,\nb,infoPetlove.client.email])):_neemu.push([\"_setUser\",infoPetlove.client.email,null,infoPetlove.client.email]));_neemu.push([\"_trackPage\"]);var e=setInterval(function(){tagNeemuIsReady()\u0026\u0026(clearInterval(e),neemuPlugin.track())},1E3)}})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":76
    },{
      "function":"__html",
      "priority":100,
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" async\u003Ewindow._neemu=[];var _neemu=_neemu||[];\n(function(){_neemu.push([\"_setAccount\",\"petlove\"]);_neemu.push([\"_setCheckoutConfirmationPageType\"]);var a=infoPetlove.order,d=a.selected_shipment||a.shipments[0],c=a.ship_total?a.ship_total:d.cost;d=a.line_items;var e=d.length,b=a.address?a.address:a.bill_address;_neemu.push([\"_addOrder\",a.number,a.total+\" BRL\",c+\" BRL\",b.city,b.state_text,\"BR\"]);for(c=0;c\u003Ce;c++){b=d[c];var f=b.sku?b.sku:b.variant.sku,g=b.product_sku?b.product_sku:b.variant.product_sku;_neemu.push([\"_addOrderItem\",a.number,f,b.price+\n\" BRL\",b.quantity,g])}void 0!=infoPetlove.client.email\u0026\u0026(1==infoPetlove.client.logged?(a=infoPetlove.client.firstname+\" \"+infoPetlove.client.lastname,_neemu.push([\"_setUser\",infoPetlove.client.email,a,infoPetlove.client.email])):_neemu.push([\"_setUser\",infoPetlove.client.email,null,infoPetlove.client.email]));_neemu.push([\"_trackPage\"]);var h=setInterval(function(){tagNeemuIsReady()\u0026\u0026(clearInterval(h),neemuPlugin.track())},1E3)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":77
    },{
      "function":"__html",
      "priority":100,
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"async\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\" async=\"async\"\u003E(function(){try{var c=[],b=infoPetlove.order;if(b\u0026\u0026b.line_items){for(i=0;i\u003Cb.line_items.length;i++){var a=b.line_items[i],d={id:a.variant?a.variant.sku:a.sku,price:a.variant?a.variant.price:a.price,quantity:a.quantity};c[i]=d}var e=infoPetlove.order.email?infoPetlove.order.email:\"\";window.criteo_q=window.criteo_q||[];window.criteo_q.push({event:\"setAccount\",account:6194},{event:\"setSiteType\",type:\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\n\"m\":\"d\"},{event:\"setEmail\",email:e},{event:\"viewBasket\",item:c})}}catch(f){console.log(\"Criteo - Cart: \",f)}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":124
    },{
      "function":"__html",
      "priority":100,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"async\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\" async=\"async\"\u003E",["escape",["macro",41],8,16],"(\"Purchase - Load - Criteo -- Conversion\",function(){try{var b=infoPetlove.order,d=b.line_items,c=[];for(i=0;i\u003CinfoPetlove.order.line_items.length;i++){var a=d[i],e=a.sku?a.sku:a.variant.sku,f=a.price?a.price:a.variant.price,g={id:e,price:f,quantity:a.quantity};c[i]=g}window.criteo_q=window.criteo_q||[];window.criteo_q.push({event:\"setAccount\",account:6194},{event:\"setSiteType\",type:\"d\"},{event:\"setEmail\",email:b.email},{event:\"trackTransaction\",id:b.number,item:c})}catch(h){console.log(\"Criteo - Conversion: \",\nh)}},void 0,",["escape",["macro",103],8,16],");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":125
    },{
      "function":"__html",
      "priority":100,
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\" async=\"async\"\u003E",["escape",["macro",41],8,16],"(\"Product - Load - Facebook -- Audience\",function(){try{!function(c,b,d,f,a,e,g){c.fbq||(a=c.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},c._fbq||(c._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],e=b.createElement(d),e.async=!0,e.src=f,g=b.getElementsByTagName(d)[0],g.parentNode.insertBefore(e,g))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");for(var b=infoPetlove.product||google_tag_manager[\"GTM-TJZNNL\"].dataLayer.get(\"info\")||\n{},f=b.variants,h=[],k=b.category\u0026\u0026b.category.permalink?b.category.permalink:\"\",d=0;d\u003Cf.length;d++)h.push(f[d].sku);fbq(\"init\",\"712576715490947\");fbq(\"trackSingle\",\"712576715490947\",\"PageView\");fbq(\"trackSingle\",\"712576715490947\",\"ViewContent\",{page_type:\"product\",content_type:\"product\",content_name:b.name,content_category:k,content_ids:h})}catch(c){console.log(\"Facebook - Product Audience: \",c)}},void 0,",["escape",["macro",103],8,16],");\u003C\/script\u003E\n\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=712576715490947\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":156
    },{
      "function":"__html",
      "priority":100,
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\" async=\"async\"\u003E",["escape",["macro",41],8,16],"(\"Search - Load - Facebook -- Audience\",function(){!function(d,b,c,f,a,e,g){d.fbq||(a=d.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},d._fbq||(d._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],e=b.createElement(c),e.async=!0,e.src=f,g=b.getElementsByTagName(c)[0],g.parentNode.insertBefore(e,g))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");for(var f=infoPetlove.search||google_tag_manager[\"GTM-TJZNNL\"].dataLayer.get(\"info\")||\n{},h=f.produtos||[],b=[],c=0;c\u003Ch.length\u0026\u0026!(b.push(h[c].id_original),10\u003C=b.length);c++);fbq(\"init\",\"712576715490947\");fbq(\"trackSingle\",\"712576715490947\",\"PageView\");fbq(\"trackSingle\",\"712576715490947\",\"Search\",{search_string:f.qnorm||\" \",content_ids:b})},void 0,",["escape",["macro",103],8,16],");\u003C\/script\u003E\n\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=712576715490947\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":157
    },{
      "function":"__html",
      "priority":100,
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\" async=\"async\"\u003E",["escape",["macro",41],8,16],"(\"Purchase - Load - Facebook -- Conversion Audience\",function(){!function(b,c,d,g,a,e,f){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],e=c.createElement(d),e.async=!0,e.src=g,f=c.getElementsByTagName(d)[0],f.parentNode.insertBefore(e,f))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");var b=infoPetlove.order;b=b.line_items||[];for(var d=[],\nc=0;c\u003Cb.length;c++){var g=b[c].sku?b[c].sku:b[c].variant.sku;d.push(g)}fbq(\"init\",\"712576715490947\");fbq(\"track\",\"PageView\");fbq(\"track\",\"Purchase\",{content_ids:d,content_type:\"product\",value:infoPetlove.order.total_with_credit,currency:\"BRL\",isFirstBuy:",["escape",["macro",29],8,16],",utm_source:",["escape",["macro",50],8,16],"||\"(not set)\",utm_medium:",["escape",["macro",52],8,16],"||\"(not set)\",utm_campaign:",["escape",["macro",54],8,16],"||\"(not set)\",utm_content:",["escape",["macro",56],8,16],"||\"\"})},void 0,",["escape",["macro",103],8,16],");\u003C\/script\u003E\n\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=712576715490947\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":158
    },{
      "function":"__html",
      "priority":100,
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\" async=\"async\"\u003E",["escape",["macro",41],8,16],"(\"Department - Load - Facebook -- Audience\",function(){!function(e,b,c,d,a,f,g){e.fbq||(a=e.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},e._fbq||(e._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],f=b.createElement(c),f.async=!0,f.src=d,g=b.getElementsByTagName(c)[0],g.parentNode.insertBefore(f,g))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");for(var b=google_tag_manager[\"GTM-TJZNNL\"].dataLayer.get(\"info\")||\n{},h=b.produtos||[],c=[],d=0;d\u003Ch.length\u0026\u0026!(c.push(h[d].id_original),4\u003C=c.length);d++);fbq(\"init\",\"712576715490947\");fbq(\"trackSingle\",\"712576715490947\",\"PageView\");fbq(\"trackSingle\",\"712576715490947\",\"ViewContent\",{page_type:\"category\",content_type:\"product\",content_name:b.navigation?b.navigation.name:\" \",content_ids:c})},void 0,",["escape",["macro",103],8,16],");\u003C\/script\u003E\n\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=712576715490947\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":159
    },{
      "function":"__html",
      "priority":100,
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\" async=\"async\"\u003E",["escape",["macro",41],8,16],"(\"Category - Load - Facebook -- Audience\",function(){!function(e,b,c,d,a,f,g){e.fbq||(a=e.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},e._fbq||(e._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],f=b.createElement(c),f.async=!0,f.src=d,g=b.getElementsByTagName(c)[0],g.parentNode.insertBefore(f,g))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");for(var b=infoPetlove.category||google_tag_manager[\"GTM-TJZNNL\"].dataLayer.get(\"info\")||\n{},h=b.produtos||[],c=[],d=0;d\u003Ch.length\u0026\u0026!(c.push(h[d].id_original),4\u003C=c.length);d++);fbq(\"init\",\"712576715490947\");fbq(\"trackSingle\",\"712576715490947\",\"PageView\");fbq(\"trackSingle\",\"712576715490947\",\"ViewContent\",{page_type:\"category\",content_type:\"product\",content_name:b.navigation?b.navigation.name:\" \",content_ids:c})},void 0,",["escape",["macro",103],8,16],");\u003C\/script\u003E\n\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=712576715490947\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":160
    },{
      "function":"__html",
      "priority":100,
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\" async=\"async\"\u003E(function(){!function(b,c,d,f,a,e,g){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],e=c.createElement(d),e.async=!0,e.src=f,g=c.getElementsByTagName(d)[0],g.parentNode.insertBefore(e,g))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");for(var d=infoPetlove.order.line_items||[],f=[],c=0;c\u003Cd.length;c++){var b=d[c];b=b.variant?b.variant.sku:b.sku;f.push(b)}fbq(\"init\",\n\"712576715490947\");fbq(\"trackSingle\",\"712576715490947\",\"PageView\");fbq(\"trackSingle\",\"712576715490947\",\"AddToCart\",{content_ids:f,content_type:\"product\",value:infoPetlove.order.item_total,currency:\"BRL\"})})();\u003C\/script\u003E\n\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=712576715490947\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":164
    },{
      "function":"__html",
      "priority":100,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" async=\"async\"\u003E",["escape",["macro",41],8,16],"(\"Various - Load - RTB -- Catalog Category Department\",function(){var b=\"\",a=google_tag_manager[\"GTM-TJZNNL\"].dataLayer.get(\"info\")||{};\"undefined\"!=typeof a\u0026\u0026(b=a.navigation?a.navigation.id:\"\");a=document.createElement(\"iframe\");a.src=\"\/\/us.creativecdn.com\/tags?id\\x3dpr_YhfzLS5SDL5jJ7RoIgI9_category2_\"+b;a.width=\"1\";a.height=\"1\";a.scrolling=\"no\";a.frameBorder=\"0\";a.style=\"display: none;\";document.body.appendChild(a)},void 0,",["escape",["macro",103],8,16],");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":254
    },{
      "function":"__html",
      "priority":100,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" async=\"async\"\u003E",["escape",["macro",41],8,16],"(\"Cart - Load - RTB\",function(){var a=infoPetlove.order.line_items||[];if(a\u0026\u00260\u003Ca.length){for(var c=[],d=0;d\u003Ca.length;d++){var b=a[d];b=b.variant?b.variant.sku:b.sku;c.push(b);if(3\u003C=c.length)break}a=document.createElement(\"iframe\");a.src=\"\/\/us.creativecdn.com\/tags?id\\x3dpr_YhfzLS5SDL5jJ7RoIgI9_basketstatus_\"+c.join(\",\");a.width=\"1\";a.height=\"1\";a.scrolling=\"no\";a.frameBorder=\"0\";a.style=\"display: none;\";document.body.appendChild(a)}},void 0,",["escape",["macro",103],8,16],");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":257
    },{
      "function":"__html",
      "priority":100,
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"712576715490947\");fbq(\"trackSingle\",\"712576715490947\",\"CompleteRegistration\",{content_name:\"minhas-assinaturas\"});\u003C\/script\u003E\n \n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=712576715490947\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":273
    },{
      "function":"__html",
      "priority":100,
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"712576715490947\");fbq(\"trackSingle\",\"712576715490947\",\"CompleteRegistration\",{content_name:\"checkout\"});\u003C\/script\u003E\n \n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=712576715490947\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":274
    },{
      "function":"__html",
      "priority":100,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript data-gtmsrc=\"https:\/\/apis.google.com\/js\/platform.js?onload=renderOptIn\" async defer type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003E",["escape",["macro",41],8,16],"(\"Purchase - Load - Google Customer Review -- Conversion\",function(){var a=infoPetlove.order||{},b=infoPetlove.client||{};window.renderOptIn=function(){window.gapi.load(\"surveyoptin\",function(){window.gapi.surveyoptin.render({merchant_id:10326264,order_id:a.number,email:b.email,delivery_country:\"55\",estimated_delivery_date:a.estimate_delivery_date})})}},void 0,",["escape",["macro",103],8,16],");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":278
    },{
      "function":"__html",
      "priority":100,
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" async=\"async\"\u003E",["escape",["macro",41],8,16],"(\"Cart - Load - Infra -- User Type - IOS\",function(){function d(b){var a;if(a=\/iPad|iPhone|iPod\/.test(navigator.userAgent)\u0026\u0026!window.MSStream){a=!1;try{window.openDatabase(null,null,null,null)}catch(c){a=!0}return b(a)}}d(function(b){var a=\"browser\",c=\"userType\";window.dataLayer=window.dataLayer||[];b?dataLayer.push({action:a,label:\"private\",event:c}):dataLayer.push({action:a,label:\"normal\",event:c})})},void 0,",["escape",["macro",103],8,16],");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":377
    },{
      "function":"__html",
      "priority":100,
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" async=\"async\"\u003E",["escape",["macro",41],8,16],"(\"Various - Load - Infra -- Set User Cookie Last Access\",function(){function a(a,d,b){var c=new Date;c.setTime(c.getTime()+864E5*b);b=\"expires\\x3d\"+c.toUTCString();document.cookie=a+\"\\x3d\"+d+\";\"+b+\";path\\x3d\/\"}a(\"PL_last_content_page\",",["escape",["macro",105],8,16],");a(\"PL_last_content_date\",new Date)},void 0,",["escape",["macro",103],8,16],");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":381
    },{
      "function":"__html",
      "priority":1,
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\n\n\n\n\u003Cscript type=\"text\/gtmscript\"\u003E",["escape",["macro",41],8,16],"(\"All Pages - Load - Infra -- XHR Listener\",function(){",["escape",["macro",114],8,16],"(function(a){",["escape",["macro",22],8,16],".push({event:",["escape",["macro",115],8,16],",requestBody:a.requestBody,requestBodyJson:a.requestBodyJson,requestMethod:a.requestMethod,requestURL:a.requestURL,responseText:\"json\"===a.responseType?void 0:a.responseText,responseJson:a.responseJson,responseURL:a.responseURL,responseStatus:a.status,responseStatusText:a.statusText,xhrObject:a,_clear:!0})})},void 0,",["escape",["macro",103],8,16],");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":430
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Cadastro de E-mail",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",27],
      "vtp_eventAction":"Email cadastrado na lightbox",
      "vtp_eventLabel":["macro",28],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"]],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":49
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",27],
      "vtp_eventAction":"Remove Product From Cart",
      "vtp_eventLabel":["macro",0],
      "vtp_useEcommerceDataLayer":true,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":119
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",30],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_currencyCode":"BRL",
      "vtp_conversionId":["macro",31],
      "vtp_conversionLabel":"ndN6CL6PvgIQ5rWa7QM",
      "vtp_url":["macro",32],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":120
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useEcommerceDataLayer":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_gaSettings":["macro",27],
      "vtp_eventAction":"Add to Cart",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":182
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useEcommerceDataLayer":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_gaSettings":["macro",27],
      "vtp_eventAction":"Product Click",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":185
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_gaSettings":["macro",27],
      "vtp_eventAction":"Checkout",
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":186
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useEcommerceDataLayer":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_gaSettings":["macro",27],
      "vtp_eventAction":"Checkout Option",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":188
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_gaSettings":["macro",27],
      "vtp_useEcommerceDataLayer":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","userId","value",["macro",43]]],
      "vtp_metric":["list",["map","index","1","metric",["macro",44]],["map","index","2","metric",["macro",45]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","10","dimension",["macro",46]],["map","index","11","dimension",["macro",48]],["map","index","1","dimension",["macro",78]],["map","index","2","dimension",["macro",79]],["map","index","3","dimension",["macro",80]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "tag_id":189
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",2]],["map","fieldName","userId","value",["macro",43]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_gaSettings":["macro",27],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":190
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Checkout EC",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",27],
      "vtp_eventAction":"Purchase",
      "vtp_useEcommerceDataLayer":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_metric":["list",["map","index","1","metric",["macro",44]],["map","index","2","metric",["macro",45]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","10","dimension",["macro",46]],["map","index","11","dimension",["macro",48]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":193
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useEcommerceDataLayer":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_gaSettings":["macro",27],
      "vtp_eventAction":"Add Product",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":194
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Cadastro de E-mail",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",27],
      "vtp_eventAction":"Email cadastrado na barra de newsletter",
      "vtp_eventLabel":["macro",28],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"]],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":211
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Filtro",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_gaSettings":["macro",27],
      "vtp_eventAction":["macro",28],
      "vtp_eventLabel":["macro",81],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":232
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Click Banner",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_gaSettings":["macro",27],
      "vtp_eventAction":"Home Carrossel",
      "vtp_eventLabel":["macro",82],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":235
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Click Banner",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_gaSettings":["macro",27],
      "vtp_eventAction":"Home Box",
      "vtp_eventLabel":["macro",82],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":236
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Coupon Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_gaSettings":["macro",27],
      "vtp_eventAction":"Home",
      "vtp_eventLabel":"BOASVINDAS",
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":248
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",30],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_currencyCode":"BRL",
      "vtp_conversionId":["macro",31],
      "vtp_conversionLabel":"tkOMCI3Mo2AQ5rWa7QM",
      "vtp_url":["macro",32],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":250
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Client Cookie is Disabled",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",27],
      "vtp_eventAction":"True",
      "vtp_eventLabel":"True",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":260
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventValue":["macro",84],
      "vtp_eventCategory":"Credentials",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",27],
      "vtp_eventAction":"Create",
      "vtp_eventLabel":"Provider",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":262
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventValue":["macro",74],
      "vtp_eventCategory":"Pwa",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",27],
      "vtp_eventAction":"View",
      "vtp_eventLabel":"Page",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":264
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Product Page Subscription",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",27],
      "vtp_eventAction":["macro",85],
      "vtp_eventLabel":["macro",86],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_eventValue":["macro",84],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":267
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Subscription",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_gaSettings":["macro",27],
      "vtp_eventAction":["macro",85],
      "vtp_eventLabel":["macro",87],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":268
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Subscription",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_gaSettings":["macro",27],
      "vtp_eventAction":["macro",85],
      "vtp_eventLabel":["macro",86],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":272
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":277
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Click Banner",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_gaSettings":["macro",27],
      "vtp_eventAction":"Home Side",
      "vtp_eventLabel":["macro",82],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":280
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Click Banner",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_gaSettings":["macro",27],
      "vtp_eventAction":"Home Middle",
      "vtp_eventLabel":["macro",82],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":281
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Click Banner",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_gaSettings":["macro",27],
      "vtp_eventAction":"Category Shelf",
      "vtp_eventLabel":["macro",82],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":282
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Click Banner",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_gaSettings":["macro",27],
      "vtp_eventAction":"Department Shelf",
      "vtp_eventLabel":["macro",82],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":283
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"User Login",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_gaSettings":["macro",27],
      "vtp_eventAction":["macro",85],
      "vtp_eventLabel":["macro",86],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":372
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"User Type",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",27],
      "vtp_eventAction":["macro",85],
      "vtp_eventLabel":["macro",86],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_eventValue":["macro",84],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":376
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Subscription",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_gaSettings":["macro",27],
      "vtp_eventAction":["macro",85],
      "vtp_eventLabel":["macro",86],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":378
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":["macro",31],
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",32],
      "tag_id":380
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=712576715490947\u0026ev=PageView\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",90],
      "tag_id":382
    },{
      "function":"__paused",
      "vtp_originalTagType":"sp",
      "tag_id":383
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":384
    },{
      "function":"__paused",
      "vtp_originalTagType":"awct",
      "tag_id":388
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":389
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Subscription",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",27],
      "vtp_eventAction":"unsubscribe",
      "vtp_eventLabel":"success",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":391
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_dataLayerVariable":["macro",20],
      "vtp_conversionId":["macro",31],
      "vtp_customParamsFormat":"DATA_LAYER",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",32],
      "tag_id":393
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_dataLayerVariable":["macro",95],
      "vtp_conversionId":["macro",31],
      "vtp_customParamsFormat":"DATA_LAYER",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",32],
      "tag_id":394
    },{
      "function":"__sp",
      "once_per_load":true,
      "vtp_dataLayerVariable":["macro",97],
      "vtp_conversionId":["macro",31],
      "vtp_customParamsFormat":"DATA_LAYER",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",32],
      "tag_id":395
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_dataLayerVariable":["macro",99],
      "vtp_conversionId":["macro",31],
      "vtp_customParamsFormat":"DATA_LAYER",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",32],
      "tag_id":396
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_dataLayerVariable":["macro",100],
      "vtp_conversionId":["macro",31],
      "vtp_customParamsFormat":"DATA_LAYER",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",32],
      "tag_id":397
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_dataLayerVariable":["macro",101],
      "vtp_conversionId":["macro",31],
      "vtp_customParamsFormat":"DATA_LAYER",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",32],
      "tag_id":398
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1034328806",
      "vtp_conversionLabel":"7MRXCPXJ4o8BEOa1mu0D",
      "vtp_url":["macro",32],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":400
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",30],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_currencyCode":"BRL",
      "vtp_conversionId":["macro",31],
      "vtp_conversionLabel":"4ULtCP-Ls5YBEOa1mu0D",
      "vtp_url":["macro",32],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":407
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",30],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_currencyCode":"BRL",
      "vtp_conversionId":["macro",31],
      "vtp_conversionLabel":"RmTVCJ7p5JYBEOa1mu0D",
      "vtp_url":["macro",32],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":408
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",102],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",27],
      "vtp_eventAction":["macro",85],
      "vtp_eventLabel":["macro",86],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_eventValue":["macro",84],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":411
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Subscription",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_gaSettings":["macro",27],
      "vtp_eventAction":["macro",85],
      "vtp_eventLabel":["macro",86],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":422
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"div[class='text-center text-lg text-white top-space']",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"1",
      "vtp_uniqueTriggerId":"673753_576",
      "tag_id":431
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"div[class='newsletter'] div[class='title']",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"1",
      "vtp_uniqueTriggerId":"673753_577",
      "tag_id":432
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":".alert-message",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"1",
      "vtp_uniqueTriggerId":"673753_583",
      "tag_id":433
    },{
      "function":"__fsl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"673753_710",
      "tag_id":434
    },{
      "function":"__cl",
      "tag_id":435
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E",["escape",["macro",41],8,16],"(\"Cart - Load - Infra -- Google_DynRMKT\",function(){try{var a=[],b=[],c=[];a=dataLayer.filter(function(a){return a.ecommerce}).reverse()[0].ecommerce.checkout.products;for(i=0;i\u003Ca.length;i++)c[i]=a[i].id,b[i]=parseFloat(a[i].price).toFixed(2);dataLayer.push({ecomm_prodid:c,ecomm_totalvalue:b,ecomm_pagetype:\"cart\",event:\"Google_DynRMKT\"})}catch(d){}},void 0,",["escape",["macro",103],8,16],");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":224
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E",["escape",["macro",41],8,16],"(\"Category - Load - Infra -- Google_DynRMKT\",function(){try{var a=[],b=[],c=[];a=dataLayer.filter(function(a){return a.ecommerce})[0].ecommerce.impressions;for(i=0;5\u003Ei;i++)c[i]=a[i].id,b[i]=parseFloat(a[i].price).toFixed(2);dataLayer.push({ecomm_prodid:c,ecomm_totalvalue:b,ecomm_pagetype:\"category\",event:\"Google_DynRMKT\"})}catch(d){}},void 0,",["escape",["macro",103],8,16],");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":225
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E",["escape",["macro",41],8,16],"(\"Home - Load - Infra -- Google_DynmRMKT\",function(){try{dataLayer.push({ecomm_pagetype:\"home\",event:\"Google_DynRMKT\"})}catch(a){}},void 0,",["escape",["macro",103],8,16],");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":226
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E",["escape",["macro",41],8,16],"(\"Product - Load - Infra -- Google_DynRMKT -- offerdetail\",function(){try{var a=[];a=dataLayer.filter(function(a){return a.ecommerce})[0].ecommerce.detail.products[0];dataLayer.push({ecomm_prodid:a.id,ecomm_totalvalue:parseFloat(a.price).toFixed(2),ecomm_pagetype:\"offerdetail\",event:\"Google_DynRMKT\"})}catch(b){}},void 0,",["escape",["macro",103],8,16],");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":227
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E",["escape",["macro",41],8,16],"(\"Purchase - Load - Infra -- Google_DynRMKT\",function(){try{var a=[],b=[],c=[];a=",["escape",["macro",104],8,16],".products||[];for(i=0;i\u003Ca.length;i++)c[i]=a[i].id,b[i]=parseFloat(a[i].price).toFixed(2);dataLayer.push({ecomm_prodid:c,ecomm_totalvalue:b,ecomm_pagetype:\"purchase\",event:\"Google_DynRMKT\"})}catch(d){}},void 0,",["escape",["macro",103],8,16],");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":228
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E",["escape",["macro",41],8,16],"(\"Search - Load - Infra -- Google_DynRMKT\",function(){try{var a=[],b=[],c=[];a=dataLayer.filter(function(a){return a.ecommerce})[0].ecommerce.impressions;for(i=0;5\u003Ei;i++)c[i]=a[i].id,b[i]=parseFloat(a[i].price).toFixed(2);dataLayer.push({ecomm_prodid:c,ecomm_totalvalue:b,ecomm_pagetype:\"searchresults\",event:\"Google_DynRMKT\"})}catch(d){}},void 0,",["escape",["macro",103],8,16],");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":229
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" id=\"getSelo\" data-gtmsrc=\"https:\/\/imgs.ebit.com.br\/ebitBR\/selo-ebit\/js\/getSelo.js?3160\u0026amp;lightbox=true\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":246
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"\/\/laas.neemu.com\/petlove\/neemuapi.js\" async=\"\" defer type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":271
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,c,e,f,d,b){a.hj=a.hj||function(){(a.hj.q=a.hj.q||[]).push(arguments)};a._hjSettings={hjid:918068,hjsv:6};d=c.getElementsByTagName(\"head\")[0];b=c.createElement(\"script\");b.async=1;b.src=e+a._hjSettings.hjid+f+a._hjSettings.hjsv;d.appendChild(b)})(window,document,\"https:\/\/static.hotjar.com\/c\/hotjar-\",\".js?sv\\x3d\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":371
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"712576715490947\");fbq(\"track\",\"PageView\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":379
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"712576715490947\");fbq(\"trackSingle\",\"712576715490947\",\"Lead\",{content_name:\"Unsubscribe\",content_category:\"Subscription\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":401
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/event.getblue.io\/js\/blue-tag.min.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.blue_q=window.blue_q||[];window.blue_q.push({event:\"setCampaignId\",value:\"0466AAB6-E734-16D3-05CF8F43B66B8E8A\"},{event:\"setPageType\",value:\"visit\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":413
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/event.getblue.io\/js\/blue-tag.min.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.blue_q=window.blue_q||[];window.blue_q.push({event:\"setCampaignId\",value:\"0466AAB6-E734-16D3-05CF8F43B66B8E8A\"},{event:\"setProductId\",value:",["escape",["macro",98],8,16],"},{event:\"setPageType\",value:\"product\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":414
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/event.getblue.io\/js\/blue-tag.min.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.blue_q=window.blue_q||[];window.blue_q.push({event:\"setCampaignId\",value:\"0466AAB6-E734-16D3-05CF8F43B66B8E8A\"},{event:\"setProductId\",value:",["escape",["macro",106],8,16],"},{event:\"setPageType\",value:\"basket\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":415
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/event.getblue.io\/js\/blue-tag.min.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.blue_q=window.blue_q||[];window.blue_q.push({event:\"setCampaignId\",value:\"0466AAB6-E734-16D3-05CF8F43B66B8E8A\"},{event:\"setProductId\",value:",["escape",["macro",108],8,16],"},{event:\"setTransactionTotal\",value:",["escape",["macro",30],8,16],"},{event:\"setTransactionId\",value:",["escape",["macro",109],8,16],"},{event:\"setPageType\",value:\"conversion\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":416
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript id=\"ze-snippet\" src=\"https:\/\/static.zdassets.com\/ekr\/snippet.js?key=8851c129-12b9-4d3b-808a-cfbf21e7cf45\"\u003E\u003C\/script\u003E\n\n\u003Cscript\u003Evar ENABLE_CHAT=!0,START_HOUR=8,FINISH_HOUR=18;function showButton(){var a=new Date,b=a.getHours();a=a.getDay();a=0===a;return!a\u0026\u0026b\u003E=START_HOUR\u0026\u0026b\u003CFINISH_HOUR}function loadWidget(){var a=window.subscriptionJSON||{},b=window.infoPetlove.client||{};window.$zopim=window.$zopim||function(){};$zopim(function(){$zopim.livechat.setName(b.firstname);$zopim.livechat.setEmail(b.email);$zopim.livechat.addTags(a.id);$zopim.livechat.button.show();$zopim.livechat.window.onHide(this.callChatAfterMinimize)})}\nfunction callChatAfterMinimize(){window.$zopim=window.$zopim||function(){};$zopim(function(){$zopim.livechat.button.show()})}ENABLE_CHAT\u0026\u0026setTimeout(function(){showButton()\u0026\u0026loadWidget()},5500);\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":418
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._tfa=window._tfa||[];window._tfa.push({notify:\"event\",name:\"page_view\",id:1225604});!function(a,b,d,c){document.getElementById(c)||(a.async=1,a.src=d,a.id=c,b.parentNode.insertBefore(a,b))}(document.createElement(\"script\"),document.getElementsByTagName(\"script\")[0],\"\/\/cdn.taboola.com\/libtrc\/unip\/1225604\/tfa.js\",\"tb_tfa_script\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n  \u003Cimg src=\"\/\/trc.taboola.com\/1225604\/log\/3\/unip?en=page_view\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":428
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Evar meliuzCookie=$app.Cookie.get(\"PL_meliuz\");\nfunction initMeliuzPixel(){var a=window.orderJSON||{},b=\"https:\/\/www.meliuz.com.br\/pixel\/pa\/144.png?auth\\x3d14453b2bfa4abce8\\x26xtra\\x3d{codigo_unico_da_transacao}\\x26iso_currency\\x3dBRL\\x26commission\\x3d{valor_da_comissao}\\x26value\\x3d{valor_total_do_pedido}\\x26order\\x3d{codigo_do_pedido}\",c=.09*parseFloat(a.item_total);c=c.toFixed(2);b=b.replace(\"{codigo_unico_da_transacao}\",meliuzCookie).replace(\"{valor_total_do_pedido}\",a.item_total).replace(\"{codigo_do_pedido}\",a.number).replace(\"{valor_da_comissao}\",\nc);a=document.createElement(\"img\");a.src=b;document.body.appendChild(a)}if(meliuzCookie)try{initMeliuzPixel()}catch(a){console.log(a)};\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":429
    },{
      "function":"__ua",
      "priority":-1,
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Security",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",27],
      "vtp_eventAction":"Suspect UTM Change",
      "vtp_eventLabel":["template",["macro",89]," origins: ",["macro",78]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":375
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"signUpNewsletterLightbox"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"removeProduct"
    },{
      "function":"_eq",
      "arg0":["macro",29],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"purchase"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"addCartEvent"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"clickProductEvent"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"viewCheckoutEvent"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"checkoutOptionEvent"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"scrollPage"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"gtm.js"
    },{
      "function":"_cn",
      "arg0":["macro",42],
      "arg1":"services"
    },{
      "function":"_re",
      "arg0":["macro",26],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"checkoutStateChanged"
    },{
      "function":"_eq",
      "arg0":["macro",29],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",29],
      "arg1":"not set"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"addProductCatalogEvent"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"signUpNewsletterBar"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"filterSelected"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"clickBannerCarousel"
    },{
      "function":"_eq",
      "arg0":["macro",83],
      "arg1":"\/"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"clickBannerFooter"
    },{
      "function":"_re",
      "arg0":["macro",26],
      "arg1":"couponHomeClick"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"ClientCookieDisabled"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"credentialEvent"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"pwaEvent"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"productPageSubscriptionEvent"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"subscriptionEvent"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"subscriptionSearchEvent"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"subscriptionPageComplete"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"subscriptionCheckoutComplete"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"clickHomeSideBanner"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"clickBannerHomeMiddle"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"clickBannerDeptShelf"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"clickBannerDeptShelfMobile"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"loginUserEvent"
    },{
      "function":"_eq",
      "arg0":["macro",88],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",73],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"userType"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"subscriptionPlaceOrderNow"
    },{
      "function":"_re",
      "arg0":["macro",83],
      "arg1":"^\\\/dicas",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",83],
      "arg1":"\\\/black-friday",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",91],
      "arg1":"(^$|((^|,)673753_576($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",91],
      "arg1":"(^$|((^|,)673753_577($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",92],
      "arg1":"assinatura foi cancelada"
    },{
      "function":"_re",
      "arg0":["macro",91],
      "arg1":"(^$|((^|,)673753_583($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",83],
      "arg1":"\/busca"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"SearchInfoReady"
    },{
      "function":"_re",
      "arg0":["macro",26],
      "arg1":"(Search|Category|Department|Brand)InfoReady"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"offerdetail"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"Google_DynRMKT"
    },{
      "function":"_eq",
      "arg0":["macro",11],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",83],
      "arg1":"\/carrinho"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"checkout"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"purchase"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"recProduct"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"petlove_prime"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"customEvent"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"subscriptionRecommendation"
    },{
      "function":"_re",
      "arg0":["macro",83],
      "arg1":"\\\/p$|\\\/amp$|\\\/destaque$"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"ProductInfoReady"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"HomeInfoReady"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"DepartmentInfoReady"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"CategoryInfoReady"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"CompleteOrderInfoReady"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"BreedInfoReady"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"CartInfoReady"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"CartInfoReady"
    },{
      "function":"_cn",
      "arg0":["macro",42],
      "arg1":"default-page"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"OrderDetailsInfoReady"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"cartLayoutTestPageView"
    },{
      "function":"_cn",
      "arg0":["macro",28],
      "arg1":"\/pergunta\/"
    },{
      "function":"_eq",
      "arg0":["macro",83],
      "arg1":"\/carrinho\/pedido"
    },{
      "function":"_ew",
      "arg0":["macro",83],
      "arg1":"\/p"
    },{
      "function":"_cn",
      "arg0":["macro",28],
      "arg1":"minha-conta\/assinaturas"
    },{
      "function":"_ew",
      "arg0":["macro",28],
      "arg1":"assinaturas"
    },{
      "function":"_cn",
      "arg0":["macro",28],
      "arg1":"nova"
    },{
      "function":"_cn",
      "arg0":["macro",28],
      "arg1":"adicionar"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",110],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"gtm.formSubmit"
    },{
      "function":"_re",
      "arg0":["macro",91],
      "arg1":"(^$|((^|,)673753_710($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"gtm.click"
    }],
  "rules":[
    [["if",0],["add",37]],
    [["if",1],["add",38]],
    [["if",2,3],["add",39,46,82]],
    [["if",4],["add",40]],
    [["if",5],["add",41]],
    [["if",6],["add",42,104]],
    [["if",7],["add",43]],
    [["if",8],["add",44]],
    [["if",9],["add",44,60,102,36,86,87,88,89,90]],
    [["if",12],["add",45]],
    [["if",3,13],["add",46,53,83]],
    [["if",3,14],["add",46]],
    [["if",15],["add",47]],
    [["if",16],["add",48]],
    [["if",17],["add",49]],
    [["if",18,19],["add",50]],
    [["if",18,20,21],["add",51]],
    [["if",22],["add",52]],
    [["if",23],["add",54]],
    [["if",24],["add",55]],
    [["if",25],["add",56]],
    [["if",26],["add",57]],
    [["if",27],["add",58]],
    [["if",28],["add",59]],
    [["if",29],["add",7,31]],
    [["if",30],["add",8,32]],
    [["if",18,20,31],["add",61]],
    [["if",18,20,32],["add",62]],
    [["if",18,20,33],["add",63]],
    [["if",34],["add",64]],
    [["if",35],["add",65]],
    [["if",9,36,37],["add",109]],
    [["if",38],["add",66]],
    [["if",39],["add",67]],
    [["if",9,40],["add",68,100,35]],
    [["if",9,40],["unless",41],["add",69]],
    [["if",9,42],["add",70,71]],
    [["if",42,43,44],["add",72,73]],
    [["if",42,43,45],["add",72,73]],
    [["if",43,46,47],["add",74,81,101]],
    [["if",9,20],["add",75]],
    [["if",48,49],["add",76]],
    [["if",50],["unless",48],["add",77]],
    [["if",51,52],["add",78,103]],
    [["if",54,55],["unless",53],["add",79]],
    [["if",52,56],["add",80]],
    [["if",57],["add",84]],
    [["if",58],["add",84]],
    [["if",59],["add",84]],
    [["if",60],["add",85]],
    [["if",18,61,62],["add",9,11,23,4,0,98]],
    [["if",18,20,63],["add",10,18,2,0]],
    [["if",18,64],["add",12,16,26,29,0,98]],
    [["if",18,65],["add",13,16,27,29,0,98]],
    [["if",18,49],["add",14,16,24,3,0,98]],
    [["if",63],["add",15,93]],
    [["if",66],["add",17,20,22,25,95,6,33,105,107,108],["block",91]],
    [["if",67],["add",18,35]],
    [["if",68],["add",19,34]],
    [["if",18,68],["add",21,28,30]],
    [["if",6,69],["add",91]],
    [["if",64],["add",92]],
    [["if",62],["add",94]],
    [["if",49],["add",96]],
    [["if",18,66],["add",97,98]],
    [["if",11,18,70],["add",1]],
    [["if",18,71],["add",5]],
    [["if",72],["add",99]],
    [["if",9,73],["add",35]],
    [["if",9,18,76],["unless",77,78,79],["add",106]],
    [["if",9,76,80],["unless",77,78,79],["add",106]],
    [["if",81,82,83],["add",36]],
    [["if",81,84],["add",36]],
    [["if",10,11],["block",44]],
    [["if",9,54],["block",102]],
    [["if",9,74],["block",102]],
    [["if",9,75],["block",102]]]
},
"runtime":[
[],[]
]



};
var aa,ba=this||self,ca=function(a){return"boolean"==typeof a},fa=/^[\w+/_-]+[=]{0,2}$/,ha=null;var ia=function(){},ja=function(a){return"function"==typeof a},ka=function(a){return"string"==typeof a},la=function(a){return"number"==typeof a&&!isNaN(a)},ma=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},f=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},na=function(a,b){if(a&&ma(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},pa=function(a,b){if(!la(a)||
!la(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},ra=function(a,b){for(var c=new qa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},sa=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},ta=function(a){return Math.round(Number(a))||0},ua=function(a){return"false"==String(a).toLowerCase()?!1:!!a},va=function(a){var b=[];if(ma(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},wa=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},xa=function(){return(new Date).getTime()},qa=function(){this.prefix="gtm.";this.values={}};qa.prototype.set=function(a,b){this.values[this.prefix+a]=b};qa.prototype.get=function(a){return this.values[this.prefix+a]};qa.prototype.contains=function(a){return void 0!==this.get(a)};
var ya=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},za=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ca=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Da=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ea=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Fa=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Ga=function(a){if(null==a)return String(a);var b=Fa.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Ha=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ia=function(a){if(!a||"object"!=Ga(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Ha(a,"constructor")&&!Ha(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Ha(a,b)},u=function(a,b){var c=b||("array"==Ga(a)?[]:{}),d;for(d in a)if(Ha(a,d)){var e=a[d];"array"==Ga(e)?("array"!=Ga(c[d])&&(c[d]=[]),c[d]=u(e,c[d])):Ia(e)?(Ia(c[d])||(c[d]={}),c[d]=u(e,c[d])):c[d]=e}return c};
var Ja=[],Ka={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},La=function(a){return Ka[a]},Ma=/[\x00\x22\x26\x27\x3c\x3e]/g;var Qa=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Ra={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Va=function(a){return Ra[a]};
Ja[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Qa,Va)+"'"}};var cb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,db={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},eb=function(a){return db[a]};Ja[16]=function(a){return a};var hb;
var ib=[],jb=[],kb=[],lb=[],mb=[],nb={},pb,qb,rb,sb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},tb=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=!!nb[c],e={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e[d?g:g.substr(4)]=a[g]);return d?nb[c](e):hb(c,e,b)},vb=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=ub(a[e],b,c));return d},wb=
function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=nb[b];return c?c.priorityOverride||0:0},ub=function(a,b,c){if(ma(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(ub(a[e],b,c));return d;case "macro":var g=a[1];if(c[g])return;var h=ib[g];if(!h||b.Ac(h))return;c[g]=!0;try{var k=vb(h,b,c);k.vtp_gtmEventId=b.id;d=tb(k,b);rb&&(d=rb.Ff(d,k))}catch(w){b.Yd&&b.Yd(w,Number(g)),d=!1}c[g]=!1;return d;case "map":d=
{};for(var l=1;l<a.length;l+=2)d[ub(a[l],b,c)]=ub(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var p=ub(a[n],b,c);qb&&(m=m||p===qb.vb);d.push(p)}return qb&&m?qb.If(d):d.join("");case "escape":d=ub(a[1],b,c);if(qb&&ma(a[1])&&"macro"===a[1][0]&&qb.jg(a))return qb.vg(d);d=String(d);for(var t=2;t<a.length;t++)Ja[a[t]]&&(d=Ja[a[t]](d));return d;case "tag":var q=a[1];if(!lb[q])throw Error("Unable to resolve tag reference "+q+".");return d={Kd:a[2],index:q};case "zb":var r=
{arg0:a[2],arg1:a[3],ignore_case:a[5]};r["function"]=a[1];var v=xb(r,b,c);a[4]&&(v=!v);return v;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},xb=function(a,b,c){try{return pb(vb(a,b,c))}catch(d){JSON.stringify(a)}return null};var yb=function(){var a=function(b){return{toString:function(){return b}}};return{cd:a("convert_case_to"),dd:a("convert_false_to"),ed:a("convert_null_to"),fd:a("convert_true_to"),gd:a("convert_undefined_to"),bh:a("debug_mode_metadata"),ia:a("function"),Se:a("instance_name"),Te:a("live_only"),Ue:a("malware_disabled"),Ve:a("metadata"),eh:a("original_vendor_template_id"),We:a("once_per_event"),yd:a("once_per_load"),zd:a("setup_tags"),Ad:a("tag_id"),Bd:a("teardown_tags")}}();var zb=null,Cb=function(a){function b(p){for(var t=0;t<p.length;t++)d[p[t]]=!0}var c=[],d=[];zb=Ab(a);for(var e=0;e<jb.length;e++){var g=jb[e],h=Bb(g);if(h){for(var k=g.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(g.block||[])}else null===h&&b(g.block||[])}for(var m=[],n=0;n<lb.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Bb=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=zb(b[c]);if(!d)return null===d?null:!1}for(var e=a.unless||[],g=0;g<e.length;g++){var h=zb(e[g]);if(null===h)return null;
if(h)return!1}return!0},Ab=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=xb(kb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var Db,Eb=function(){};(function(){function a(k,l){k=k||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.qf&&(l["fix_"+m]=!0),l.Ld=l.Ld||l["fix_"+m]);var n={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},p={comment:function(){var q=k.indexOf("--\x3e");if(0<=q)return{content:k.substr(4,q),length:q+3}},endTag:function(){var q=k.match(d);if(q)return{tagName:q[1],length:q[0].length}},atomicTag:function(){var q=p.startTag();
if(q){var r=k.slice(q.length);if(r.match(new RegExp("</\\s*"+q.tagName+"\\s*>","i"))){var v=r.match(new RegExp("([\\s\\S]*?)</\\s*"+q.tagName+"\\s*>","i"));if(v)return{tagName:q.tagName,H:q.H,content:v[1],length:v[0].length+q.length}}}},startTag:function(){var q=k.match(c);if(q){var r={};q[2].replace(e,function(v,w,y,x,A){var z=y||x||A||g.test(w)&&w||null,B=document.createElement("div");B.innerHTML=z;r[w]=B.textContent||B.innerText||z});return{tagName:q[1],H:r,jb:!!q[3],length:q[0].length}}},chars:function(){var q=
k.indexOf("<");return{length:0<=q?q:k.length}}},t=function(){for(var q in n)if(n[q].test(k)){var r=p[q]();return r?(r.type=r.type||q,r.text=k.substr(0,r.length),k=k.slice(r.length),r):null}};l.Ld&&function(){var q=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,r=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,v=[];v.Xd=function(){return this[this.length-1]};v.Ec=function(B){var E=this.Xd();return E&&E.tagName&&E.tagName.toUpperCase()===B.toUpperCase()};v.Ef=
function(B){for(var E=0,F;F=this[E];E++)if(F.tagName===B)return!0;return!1};var w=function(B){B&&"startTag"===B.type&&(B.jb=q.test(B.tagName)||B.jb);return B},y=t,x=function(){k="</"+v.pop().tagName+">"+k},A={startTag:function(B){var E=B.tagName;"TR"===E.toUpperCase()&&v.Ec("TABLE")?(k="<TBODY>"+k,z()):l.oh&&r.test(E)&&v.Ef(E)?v.Ec(E)?x():(k="</"+B.tagName+">"+k,z()):B.jb||v.push(B)},endTag:function(B){v.Xd()?l.Sf&&!v.Ec(B.tagName)?x():v.pop():l.Sf&&(y(),z())}},z=function(){var B=k,E=w(y());k=B;if(E&&
A[E.type])A[E.type](E)};t=function(){z();return w(y())}}();return{append:function(q){k+=q},Eg:t,th:function(q){for(var r;(r=t())&&(!q[r.type]||!1!==q[r.type](r)););},clear:function(){var q=k;k="";return q},uh:function(){return k},stack:[]}}var b=function(){var k={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";k.zh="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";k.vh=2===l.childNodes.length;return k}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,g=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=b;a.Ah=function(k){var l={comment:function(m){return"<--"+m.content+"--\x3e"},endTag:function(m){return"</"+m.tagName+">"},atomicTag:function(m){return l.startTag(m)+m.content+l.endTag(m)},startTag:function(m){var n="<"+m.tagName,p;for(p in m.H){var t=m.H[p];
n+=" "+p+'="'+(t?t.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return n+(m.jb?"/>":">")},chars:function(m){return m.text}};return l[k.type](k)};a.nh=function(k){var l={},m;for(m in k){var n=k[m];l[m]=n&&n.replace(/(^|[^\\])"/g,'$1\\"')}return l};for(var h in b)a.vf=a.vf||!b[h]&&h;Db=a})();(function(){function a(){}function b(p){return void 0!==p&&null!==p}function c(p,t,q){var r,v=p&&p.length||0;for(r=0;r<v;r++)t.call(q,p[r],r)}function d(p,t,q){for(var r in p)p.hasOwnProperty(r)&&t.call(q,r,p[r])}function e(p,
t){d(t,function(q,r){p[q]=r});return p}function g(p,t){p=p||{};d(t,function(q,r){b(p[q])||(p[q]=r)});return p}function h(p){try{return m.call(p)}catch(q){var t=[];c(p,function(r){t.push(r)});return t}}var k={cf:a,df:a,ef:a,ff:a,rf:a,sf:function(p){return p},done:a,error:function(p){throw p;},Ig:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function p(q,r,v){var w="data-ps-"+r;if(2===arguments.length){var y=q.getAttribute(w);return b(y)?String(y):y}b(v)&&""!==v?q.setAttribute(w,
v):q.removeAttribute(w)}function t(q,r){var v=q.ownerDocument;e(this,{root:q,options:r,lb:v.defaultView||v.parentWindow,Aa:v,Ob:Db("",{qf:!0}),mc:[q],Oc:"",Pc:v.createElement(q.nodeName),hb:[],na:[]});p(this.Pc,"proxyof",0)}t.prototype.write=function(){[].push.apply(this.na,arguments);for(var q;!this.Gb&&this.na.length;)q=this.na.shift(),"function"===typeof q?this.zf(q):this.Zc(q)};t.prototype.zf=function(q){var r={type:"function",value:q.name||q.toString()};this.Lc(r);q.call(this.lb,this.Aa);this.$d(r)};
t.prototype.Zc=function(q){this.Ob.append(q);for(var r,v=[],w,y;(r=this.Ob.Eg())&&!(w=r&&"tagName"in r?!!~r.tagName.toLowerCase().indexOf("script"):!1)&&!(y=r&&"tagName"in r?!!~r.tagName.toLowerCase().indexOf("style"):!1);)v.push(r);this.$g(v);w&&this.Yf(r);y&&this.Zf(r)};t.prototype.$g=function(q){var r=this.wf(q);r.Dd&&(r.yc=this.Oc+r.Dd,this.Oc+=r.Ag,this.Pc.innerHTML=r.yc,this.Yg())};t.prototype.wf=function(q){var r=this.mc.length,v=[],w=[],y=[];c(q,function(x){v.push(x.text);if(x.H){if(!/^noscript$/i.test(x.tagName)){var A=
r++;w.push(x.text.replace(/(\/?>)/," data-ps-id="+A+" $1"));"ps-script"!==x.H.id&&"ps-style"!==x.H.id&&y.push("atomicTag"===x.type?"":"<"+x.tagName+" data-ps-proxyof="+A+(x.jb?" />":">"))}}else w.push(x.text),y.push("endTag"===x.type?x.text:"")});return{Bh:q,raw:v.join(""),Dd:w.join(""),Ag:y.join("")}};t.prototype.Yg=function(){for(var q,r=[this.Pc];b(q=r.shift());){var v=1===q.nodeType;if(!v||!p(q,"proxyof")){v&&(this.mc[p(q,"id")]=q,p(q,"id",null));var w=q.parentNode&&p(q.parentNode,"proxyof");
w&&this.mc[w].appendChild(q)}r.unshift.apply(r,h(q.childNodes))}};t.prototype.Yf=function(q){var r=this.Ob.clear();r&&this.na.unshift(r);q.src=q.H.src||q.H.fh;q.src&&this.hb.length?this.Gb=q:this.Lc(q);var v=this;this.Zg(q,function(){v.$d(q)})};t.prototype.Zf=function(q){var r=this.Ob.clear();r&&this.na.unshift(r);q.type=q.H.type||q.H.gh||"text/css";this.ah(q);r&&this.write()};t.prototype.ah=function(q){var r=this.yf(q);this.hg(r);q.content&&(r.styleSheet&&!r.sheet?r.styleSheet.cssText=q.content:
r.appendChild(this.Aa.createTextNode(q.content)))};t.prototype.yf=function(q){var r=this.Aa.createElement(q.tagName);r.setAttribute("type",q.type);d(q.H,function(v,w){r.setAttribute(v,w)});return r};t.prototype.hg=function(q){this.Zc('<span id="ps-style"/>');var r=this.Aa.getElementById("ps-style");r.parentNode.replaceChild(q,r)};t.prototype.Lc=function(q){q.qg=this.na;this.na=[];this.hb.unshift(q)};t.prototype.$d=function(q){q!==this.hb[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.hb.shift(),this.write.apply(this,q.qg),!this.hb.length&&this.Gb&&(this.Lc(this.Gb),this.Gb=null))};t.prototype.Zg=function(q,r){var v=this.xf(q),w=this.Ng(v),y=this.options.cf;q.src&&(v.src=q.src,this.Lg(v,w?y:function(){r();y()}));try{this.gg(v),q.src&&!w||r()}catch(x){this.options.error(x),r()}};t.prototype.xf=function(q){var r=this.Aa.createElement(q.tagName);d(q.H,function(v,w){r.setAttribute(v,w)});q.content&&(r.text=q.content);return r};t.prototype.gg=function(q){this.Zc('<span id="ps-script"/>');
var r=this.Aa.getElementById("ps-script");r.parentNode.replaceChild(q,r)};t.prototype.Lg=function(q,r){function v(){q=q.onload=q.onreadystatechange=q.onerror=null}var w=this.options.error;e(q,{onload:function(){v();r()},onreadystatechange:function(){/^(loaded|complete)$/.test(q.readyState)&&(v(),r())},onerror:function(){var y={message:"remote script failed "+q.src};v();w(y);r()}})};t.prototype.Ng=function(q){return!/^script$/i.test(q.nodeName)||!!(this.options.Ig&&q.src&&q.hasAttribute("async"))};
return t}();l.postscribe=function(){function p(){var w=r.shift(),y;w&&(y=w[w.length-1],y.df(),w.stream=t.apply(null,w),y.ef())}function t(w,y,x){function A(F){F=x.sf(F);v.write(F);x.ff(F)}v=new n(w,x);v.id=q++;v.name=x.name||v.id;var z=w.ownerDocument,B={close:z.close,open:z.open,write:z.write,writeln:z.writeln};e(z,{close:a,open:a,write:function(){return A(h(arguments).join(""))},writeln:function(){return A(h(arguments).join("")+"\n")}});var E=v.lb.onerror||a;v.lb.onerror=function(F,M,N){x.error({qh:F+
" - "+M+":"+N});E.apply(v.lb,arguments)};v.write(y,function(){e(z,B);v.lb.onerror=E;x.done();v=null;p()});return v}var q=0,r=[],v=null;return e(function(w,y,x){"function"===typeof x&&(x={done:x});x=g(x,k);w=/^#/.test(w)?l.document.getElementById(w.substr(1)):w.ph?w[0]:w;var A=[w,y,x];w.ug={cancel:function(){A.stream?A.stream.abort():A[1]=a}};x.rf(A);r.push(A);v||p();return w.ug},{streams:{},sh:r,hh:n})}();Eb=l.postscribe}})();for(var Fb="floor ceil round max min abs pow sqrt".split(" "),Gb=0;Gb<Fb.length;Gb++)Math.hasOwnProperty(Fb[Gb]);var C=window,D=document,Hb=navigator,Ib=D.currentScript&&D.currentScript.src,Jb=function(a,b){var c=C[a];C[a]=void 0===c?b:c;return C[a]},Kb=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Lb=function(a,b,c){var d=D.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Kb(d,b);c&&(d.onerror=c);var e;if(null===ha)b:{var g=ba.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&fa.test(k)){ha=k;break b}}ha=""}e=ha;e&&d.setAttribute("nonce",e);var l=D.getElementsByTagName("script")[0]||D.body||D.head;l.parentNode.insertBefore(d,l);return d},Mb=function(){if(Ib){var a=Ib.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Nb=function(a,b){var c=D.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=D.body&&D.body.lastChild||
D.body||D.head;d.parentNode.insertBefore(c,d);Kb(c,b);void 0!==a&&(c.src=a);return c},Ob=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Pb=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Qb=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},G=function(a){C.setTimeout(a,0)},Rb=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Sb=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Tb=function(a){var b=D.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Ub=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;
g=g.parentElement}return null},Vb=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var H={Yb:"event_callback",La:"event_timeout",V:"gtag.config",O:"allow_ad_personalization_signals",R:"cookie_expires",Ka:"cookie_update",va:"session_duration"};var jc=/[A-Z]+/,kc=/\s/,lc=function(a){if(ka(a)&&(a=wa(a),!kc.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(jc.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],h:d}}}}},nc=function(a){for(var b={},c=0;c<a.length;++c){var d=lc(a[c]);d&&(b[d.id]=d)}mc(b);var e=[];sa(b,function(g,h){e.push(h)});return e};
function mc(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.h[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var oc={},pc=null,qc=Math.random();oc.m="GTM-TJZNNL";oc.zb="9p0";var rc={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0},sc="www.googletagmanager.com/gtm.js";var tc=sc,uc=null,vc=null,wc=null,xc="//www.googletagmanager.com/a?id="+oc.m+"&cv=813",yc={},zc={},Ac=function(){var a=pc.sequence||0;pc.sequence=a+1;return a};var Bc={},Dc=function(a,b){Bc[a]=Bc[a]||[];Bc[a][b]=!0},Ec=function(a){for(var b=[],c=Bc[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var Fc=function(){return"&tc="+lb.filter(function(a){return a}).length},Pc=function(){Gc&&(C.clearTimeout(Gc),Gc=void 0);void 0===Hc||Ic[Hc]&&!Jc||(Kc[Hc]||Lc.lg()||0>=Mc--?(Dc("GTM",1),Kc[Hc]=!0):(Lc.Gg(),Ob(Nc()),Ic[Hc]=!0,Oc=Jc=""))},Nc=function(){var a=Hc;if(void 0===a)return"";var b=Ec("GTM"),c=Ec("TAGGING");return[Qc,Ic[a]?"":"&es=1",Rc[a],b?"&u="+b:"",c?"&ut="+c:"",Fc(),Jc,Oc,"&z=0"].join("")},Sc=function(){return[xc,"&v=3&t=t","&pid="+pa(),"&rv="+oc.zb].join("")},Tc="0.005000">
Math.random(),Qc=Sc(),Uc=function(){Qc=Sc()},Ic={},Jc="",Oc="",Hc=void 0,Rc={},Kc={},Gc=void 0,Lc=function(a,b){var c=0,d=0;return{lg:function(){if(c<a)return!1;xa()-d>=b&&(c=0);return c>=a},Gg:function(){xa()-d>=b&&(c=0);c++;d=xa()}}}(2,1E3),Mc=1E3,Vc=function(a,b){if(Tc&&!Kc[a]&&Hc!==a){Pc();Hc=a;Jc="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";Rc[a]="&e="+c+"&eid="+a;Gc||(Gc=C.setTimeout(Pc,500))}},Wc=function(a,b,c){if(Tc&&!Kc[a]&&b){a!==Hc&&(Pc(),Hc=a);var d=String(b[yb.ia]||"").replace(/_/g,
"");0===d.indexOf("cvt")&&(d="cvt");var e=c+d;Jc=Jc?Jc+"."+e:"&tr="+e;Gc||(Gc=C.setTimeout(Pc,500));2022<=Nc().length&&Pc()}};var Xc={},Yc=new qa,Zc={},$c={},dd={name:"dataLayer",set:function(a,b){u(ad(a,b),Zc);bd()},get:function(a){return cd(a,2)},reset:function(){Yc=new qa;Zc={};bd()}},cd=function(a,b){if(2!=b){var c=Yc.get(a);if(Tc){var d=ed(a);c!==d&&Dc("GTM",5)}return c}return ed(a)},ed=function(a,b,c){var d=a.split("."),e=!1,g=void 0;return e?g:gd(d)},gd=function(a){for(var b=Zc,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var jd=function(a,b){$c.hasOwnProperty(a)||(Yc.set(a,b),u(ad(a,b),Zc),bd())},ad=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c},bd=function(a){sa($c,function(b,c){Yc.set(b,c);u(ad(b,void 0),Zc);u(ad(b,c),Zc);a&&delete $c[b]})},kd=function(a,b,c){Xc[a]=Xc[a]||{};var d=1!==c?ed(b):Yc.get(b);"array"===Ga(d)||"object"===Ga(d)?Xc[a][b]=u(d):Xc[a][b]=d},ld=function(a,b){if(Xc[a])return Xc[a][b]};var md=function(){var a=!1;return a};var J=function(a,b,c,d){return(2===nd()||d||"http:"!=C.location.protocol?a:b)+c},nd=function(){var a=Mb(),b;if(1===a)a:{var c=tc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=D.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var Cd=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Dd={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Ed={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Fd="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Hd=function(a){var b=cd("gtm.whitelist");b&&Dc("GTM",9);var c=b&&Ea(va(b),Dd),d=cd("gtm.blacklist");d||(d=cd("tagTypeBlacklist"))&&Dc("GTM",3);
d?Dc("GTM",8):d=[];Gd()&&(d=va(d),d.push("nonGooglePixels","nonGoogleScripts"));0<=f(va(d),"google")&&Dc("GTM",2);var e=d&&Ea(va(d),Ed),g={};return function(h){var k=h&&h[yb.ia];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];var l=zc[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>f(c,k))if(l&&0<l.length)for(var p=0;p<l.length;p++){if(0>
f(c,l[p])){Dc("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var q=0<=f(e,k);if(q)t=q;else{var r=ra(e,l||[]);r&&Dc("GTM",10);t=r}}var v=!m||t;v||!(0<=f(l,"sandboxedScripts"))||c&&-1!==f(c,"sandboxedScripts")||(v=ra(e,Fd));return g[k]=v}},Gd=function(){return Cd.test(C.location&&C.location.hostname)};var Id={Ff:function(a,b){b[yb.cd]&&"string"===typeof a&&(a=1==b[yb.cd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(yb.ed)&&null===a&&(a=b[yb.ed]);b.hasOwnProperty(yb.gd)&&void 0===a&&(a=b[yb.gd]);b.hasOwnProperty(yb.fd)&&!0===a&&(a=b[yb.fd]);b.hasOwnProperty(yb.dd)&&!1===a&&(a=b[yb.dd]);return a}};var Jd={active:!0,isWhitelisted:function(){return!0}},Kd=function(a){var b=pc.zones;!b&&a&&(b=pc.zones=a());return b};var Ld=!1,Md=0,Nd=[];function Od(a){if(!Ld){var b=D.createEventObject,c="complete"==D.readyState,d="interactive"==D.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Ld=!0;for(var e=0;e<Nd.length;e++)G(Nd[e])}Nd.push=function(){for(var g=0;g<arguments.length;g++)G(arguments[g]);return 0}}}function Pd(){if(!Ld&&140>Md){Md++;try{D.documentElement.doScroll("left"),Od()}catch(a){C.setTimeout(Pd,50)}}}var Qd=function(a){Ld?a():Nd.push(a)};var Rd={},Sd={},Td=function(a,b,c,d){if(!Sd[a]||rc[b]||"__zone"===b)return-1;var e={};Ia(d)&&(e=u(d,e));e.id=c;e.status="timeout";return Sd[a].tags.push(e)-1},Ud=function(a,b,c,d){if(Sd[a]){var e=Sd[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Vd(a){for(var b=Rd[a]||[],c=0;c<b.length;c++)b[c]();Rd[a]={push:function(d){d(oc.m,Sd[a])}}}
var Yd=function(a,b,c){Sd[a]={tags:[]};ja(b)&&Wd(a,b);c&&C.setTimeout(function(){return Vd(a)},Number(c));return Xd(a)},Wd=function(a,b){Rd[a]=Rd[a]||[];Rd[a].push(za(function(){return G(function(){b(oc.m,Sd[a])})}))};function Xd(a){var b=0,c=0,d=!1;return{add:function(){c++;return za(function(){b++;d&&b>=c&&Vd(a)})},nf:function(){d=!0;b>=c&&Vd(a)}}};var Zd=function(){function a(d){return!la(d)||0>d?0:d}if(!pc._li&&C.performance&&C.performance.timing){var b=C.performance.timing.navigationStart,c=la(dd.get("gtm.start"))?dd.get("gtm.start"):0;pc._li={cst:a(c-b),cbt:a(vc-b)}}};var ce=!1,de=function(){return C.GoogleAnalyticsObject&&C[C.GoogleAnalyticsObject]},ee=!1;
var fe=function(a){C.GoogleAnalyticsObject||(C.GoogleAnalyticsObject=a||"ga");var b=C.GoogleAnalyticsObject;if(C[b])C.hasOwnProperty(b)||Dc("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);C[b]=c}Zd();return C[b]},ge=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=de();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var ie=function(){},he=function(){return C.GoogleAnalyticsObject||"ga"};var ke=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var le=/:[0-9]+$/,me=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")===b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},pe=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=ne(a.protocol)||ne(C.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:C.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||C.location.hostname).replace(le,"").toLowerCase());var g=b,h,k=ne(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=oe(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(le,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||Dc("TAGGING",1);h="/"==a.pathname.substr(0,1)?a.pathname:
"/"+a.pathname;var m=h.split("/");0<=f(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=me(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},ne=function(a){return a?a.replace(":","").toLowerCase():""},oe=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},
qe=function(a){var b=D.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Dc("TAGGING",1),c="/"+c);var d=b.hostname.replace(le,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var we=function(a){};function ve(a,b){a.containerId=oc.m;var c={type:"GENERIC",value:a};b.length&&(c.trace=b);return c};function xe(a,b,c,d){var e=lb[a],g=ye(a,b,c,d);if(!g)return null;var h=ub(e[yb.zd],c,[]);if(h&&h.length){var k=h[0];g=xe(k.index,{J:g,T:1===k.Kd?b.terminate:g,terminate:b.terminate},c,d)}return g}
function ye(a,b,c,d){function e(){if(g[yb.Ue])k();else{var w=vb(g,c,[]),y=Td(c.id,String(g[yb.ia]),Number(g[yb.Ad]),w[yb.Ve]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var B=xa()-z;Wc(c.id,lb[a],"5");Ud(c.id,y,"success",B);h()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var B=xa()-z;Wc(c.id,lb[a],"6");Ud(c.id,y,"failure",B);k()}};w.vtp_gtmTagId=g.tag_id;
w.vtp_gtmEventId=c.id;Wc(c.id,g,"1");var A=function(B){var E=xa()-z;we(B);Wc(c.id,g,"7");Ud(c.id,y,"exception",E);x||(x=!0,k())};var z=xa();try{tb(w,c)}catch(B){A(B)}}}var g=lb[a],h=b.J,k=b.T,l=b.terminate;if(c.Ac(g))return null;var m=ub(g[yb.Bd],c,[]);if(m&&m.length){var n=m[0],p=xe(n.index,{J:h,T:k,terminate:l},c,d);if(!p)return null;h=p;k=2===n.Kd?l:p}if(g[yb.yd]||g[yb.We]){var t=g[yb.yd]?mb:c.Pg,q=h,r=k;if(!t[a]){e=za(e);var v=ze(a,t,e);h=v.J;k=v.T}return function(){t[a](q,r)}}return e}
function ze(a,b,c){var d=[],e=[];b[a]=Ae(d,e,c);return{J:function(){b[a]=Be;for(var g=0;g<d.length;g++)d[g]()},T:function(){b[a]=Ce;for(var g=0;g<e.length;g++)e[g]()}}}function Ae(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Be(a){a()}function Ce(a,b){b()};var Fe=function(a,b){for(var c=[],d=0;d<lb.length;d++)if(a.cb[d]){var e=lb[d];var g=b.add();try{var h=xe(d,{J:g,T:g,terminate:g},a,d);h?c.push({oe:d,de:wb(e),Qf:h}):(De(d,a),g())}catch(l){g()}}b.nf();c.sort(Ee);for(var k=0;k<c.length;k++)c[k].Qf();return 0<c.length};function Ee(a,b){var c,d=b.de,e=a.de;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.oe,k=b.oe;g=h>k?1:h<k?-1:0}return g}
function De(a,b){if(!Tc)return;var c=function(d){var e=b.Ac(lb[d])?"3":"4",g=ub(lb[d][yb.zd],b,[]);g&&g.length&&c(g[0].index);Wc(b.id,lb[d],e);var h=ub(lb[d][yb.Bd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var Ge=!1,He=function(a,b,c,d,e){if("gtm.js"==b){if(Ge)return!1;Ge=!0}Vc(a,b);var g=Yd(a,d,e);kd(a,"event",1);kd(a,"ecommerce",1);kd(a,"gtm");var h={id:a,name:b,Ac:Hd(c),cb:[],Pg:[],Yd:function(n){Dc("GTM",6);we(n)}};h.cb=Cb(h);var k=Fe(h,g);
if(!k)return k;for(var l=0;l<h.cb.length;l++)if(h.cb[l]){var m=lb[l];if(m&&!rc[String(m[yb.ia])])return!0}return!1};var Je=function(a,b,c,d,e){var g=this;this.eventModel=a;this.containerConfig=c||{};this.targetConfig=b||{};this.containerConfig=c||{};this.fb=d||{};this.globalConfig=e||{};this.getWithConfig=function(h){if(void 0!==g.eventModel[h])return g.eventModel[h];if(void 0!==g.targetConfig[h])return g.targetConfig[h];if(void 0!==g.containerConfig[h])return g.containerConfig[h];if(void 0!==g.fb[h])return g.fb[h];if(void 0!==g.globalConfig[h])return g.globalConfig[h]}};var Ke={},Le=["G"];Ke.pe="";var Me=Ke.pe.split(",");function Ne(){var a=pc;return a.gcq=a.gcq||new Oe}
var Pe=function(a,b){Ne().register(a,b,void 0)},Qe=function(a,b,c,d){Ne().push("event",[b,a],c,d)},Re=function(a,b){Ne().push("config",[a],b)},Se={},Te=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.fb={};this.ee=null;this.Ud=!1},Ue=function(a,b,c,d,e){this.type=a;this.Ug=b;this.N=c||"";this.Cb=d;this.defer=e},Oe=function(){this.Gd={};this.Pd={};this.Xa=[]},Ve=function(a,b){var c=lc(b);return a.Gd[c.containerId]=a.Gd[c.containerId]||new Te},We=function(a,b,c,d){if(d.N){var e=
Ve(a,d.N),g=e.ee;if(g){var h=u(c),k=u(e.targetConfig[d.N]),l=u(e.containerConfig),m=u(e.fb),n=u(a.Pd),p=new Je(h,k,l,m,n);try{g(b,d.Ug,p)}catch(t){}}}};Oe.prototype.register=function(a,b,c){if(3!==Ve(this,a).status){Ve(this,a).ee=b;Ve(this,a).status=3;c&&(Ve(this,a).fb=c);var d=lc(a),e=Se[d.containerId];if(void 0!==e){var g=cd("gtm.uniqueEventId"),h=d.prefix,k=xa()-e;if(Tc&&!Kc[g]){g!==Hc&&(Pc(),Hc=g);var l=""+h+Math.floor(k);Oc=Oc?Oc+"."+l:"&cl="+l}delete Se[d.containerId]}this.flush()}};
Oe.prototype.push=function(a,b,c,d){var e=Math.floor(xa()/1E3);if(c){var g=lc(c),h;if(h=g){var k;if(k=1===Ve(this,c).status)a:{var l=g.prefix;k=!0}h=k}if(h&&(Ve(this,c).status=2,this.push("require",[],g.containerId),Se[g.containerId]=xa(),!md())){var m=encodeURIComponent(g.containerId);Lb(("http:"!=C.location.protocol?"https:":
"http:")+("//www.googletagmanager.com/gtag/js?id="+m+"&l=dataLayer&cx=c"))}}this.Xa.push(new Ue(a,e,c,b,d));d||this.flush()};
Oe.prototype.flush=function(a){for(var b=this;this.Xa.length;){var c=this.Xa[0];if(c.defer)c.defer=!1,this.Xa.push(c);else switch(c.type){case "require":if(3!==Ve(this,c.N).status&&!a)return;break;case "set":sa(c.Cb[0],function(l,m){b.Pd[l]=m});break;case "config":var d=c.Cb[0],e=!!d[H.tb];delete d[H.tb];var g=Ve(this,c.N),h=lc(c.N),k=h.containerId===h.id;e||(k?g.containerConfig={}:g.targetConfig[c.N]={});g.Ud&&e||We(this,H.V,d,c);g.Ud=!0;k?u(d,g.containerConfig):u(d,g.targetConfig[c.N]);break;case "event":We(this,
c.Cb[1],c.Cb[0],c)}this.Xa.shift()}};var Xe=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},af=function(a,b,c,d){var e=Ye(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=Ze(e,function(g){return g.Hb},b);if(1===e.length)return e[0].id;e=Ze(e,function(g){return g.eb},c);return e[0]?e[0].id:void 0}};
function bf(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=Xe(b,e).indexOf(c)}
var ef=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var p=void 0,t=void 0,q;for(q in h)if(h.hasOwnProperty(q)){var r=h[q];if(null!=r)switch(q){case "secure":r&&(m+="; secure");break;case "domain":p=r;break;default:"path"==q&&(t=r),"expires"==q&&r instanceof Date&&(r=
r.toUTCString()),m+="; "+q+"="+r}}if("auto"===p){for(var v=cf(),w=0;w<v.length;++w){var y="none"!=v[w]?v[w]:void 0;if(!df(y,t)&&bf(m+(y?"; domain="+y:""),a,l)){k=!0;break a}}k=!1}else p&&"none"!=p&&(m+="; domain="+p),k=!df(p,t)&&bf(m,a,l)}return k};function Ze(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function Ye(a,b){for(var c=[],d=Xe(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),Hb:1*k[0]||1,eb:1*k[1]||1}))}}return c}
var ff=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,gf=/(^|\.)doubleclick\.net$/i,df=function(a,b){return gf.test(document.location.hostname)||"/"===b&&ff.test(a)},cf=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;gf.test(e)||ff.test(e)||a.push("none");return a};var hf="".split(/,/),jf=null,kf={},lf={},mf,nf=function(a,b){var c={event:a};b&&(c.eventModel=u(b),b[H.Yb]&&(c.eventCallback=b[H.Yb]),b[H.La]&&(c.eventTimeout=b[H.La]));return c};
var tf={config:function(a){},event:function(a){var b=
a[1];if(ka(b)&&!(3<a.length)){var c;if(2<a.length){if(!Ia(a[2])&&void 0!=a[2])return;c=a[2]}var d=nf(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){3===a.length&&(void 0).ih(a[1],a[2])},set:function(a){var b;2==a.length&&Ia(a[1])?b=u(a[1]):3==a.length&&ka(a[1])&&(b={},Ia(a[2])||ma(a[2])?b[a[1]]=u(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},uf={policy:!0};var wf=function(a){return vf?D.querySelectorAll(a):null},xf=function(a,b){if(!vf)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!D.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},yf=!1;if(D.querySelectorAll)try{var zf=D.querySelectorAll(":root");zf&&1==zf.length&&zf[0]==D.documentElement&&(yf=!0)}catch(a){}var vf=yf;var Gf=function(a){if(Ff(a))return a;this.Xg=a};Gf.prototype.Xf=function(){return this.Xg};var Ff=function(a){return!a||"object"!==Ga(a)||Ia(a)?!1:"getUntrustedUpdateValue"in a};Gf.prototype.getUntrustedUpdateValue=Gf.prototype.Xf;var Hf=!1,If=[];function Jf(){if(!Hf){Hf=!0;for(var a=0;a<If.length;a++)G(If[a])}}var Kf=function(a){Hf?G(a):If.push(a)};var Lf=[],Mf=!1,Nf=function(a){return C["dataLayer"].push(a)},Of=function(a){var b=pc["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}},Qf=function(a){var b=a._clear;sa(a,function(g,h){"_clear"!==g&&(b&&jd(g,void 0),jd(g,h))});uc||(uc=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Ac(),a["gtm.uniqueEventId"]=d,jd("gtm.uniqueEventId",d));wc=c;var e=Pf(a);
wc=null;switch(c){case "gtm.init":Dc("GTM",19),e&&Dc("GTM",20)}return e};function Pf(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=pc.zones;d=e?e.checkState(oc.m,c):Jd;return d.active?He(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
var Rf=function(){for(var a=!1;!Mf&&0<Lf.length;){Mf=!0;delete Zc.eventModel;bd();var b=Lf.shift();if(null!=b){var c=Ff(b);if(c){var d=b;b=Ff(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=cd(h,1);if(ma(k)||Ia(k))k=u(k);$c[h]=k}}try{if(ja(b))try{b.call(dd)}catch(v){}else if(ma(b)){var l=b;if(ka(l[0])){var m=
l[0].split("."),n=m.pop(),p=l.slice(1),t=cd(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,p)}catch(v){}}}else{var q=b;if(q&&("[object Arguments]"==Object.prototype.toString.call(q)||Object.prototype.hasOwnProperty.call(q,"callee"))){a:{if(b.length&&ka(b[0])){var r=tf[b[0]];if(r&&(!c||!uf[b[0]])){b=r(b);break a}}b=void 0}if(!b){Mf=!1;continue}}a=Qf(b)||a}}finally{c&&bd(!0)}}Mf=!1}
return!a},Sf=function(){var a=Rf();try{var b=oc.m,c=C["dataLayer"].hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}}catch(g){}return a},Tf=function(){var a=Jb("dataLayer",[]),b=Jb("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Qd(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Kf(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||
0)+1;var c=a.push;a.push=function(){var d;if(0<pc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new Gf(arguments[e])}else d=[].slice.call(arguments,0);var g=c.apply(a,d);Lf.push.apply(Lf,d);if(300<this.length)for(Dc("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return Rf()&&h};Lf.push.apply(Lf,a.slice(0));G(Sf)};var Uf;var pg={};pg.vb=new String("undefined");
var qg=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===pg.vb?b:a[d]);return c.join("")}};qg.prototype.toString=function(){return this.resolve("undefined")};qg.prototype.valueOf=qg.prototype.toString;pg.Ye=qg;pg.jc={};pg.If=function(a){return new qg(a)};var rg={};pg.Hg=function(a,b){var c=Ac();rg[c]=[a,b];return c};pg.Hd=function(a){var b=a?0:1;return function(c){var d=rg[c];if(d&&"function"===typeof d[b])d[b]();rg[c]=void 0}};pg.jg=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};pg.vg=function(a){if(a===pg.vb)return a;var b=Ac();pg.jc[b]=a;return'google_tag_manager["'+oc.m+'"].macro('+b+")"};pg.ng=function(a,b,c){a instanceof pg.Ye&&(a=a.resolve(pg.Hg(b,c)),b=ia);return{yc:a,J:b}};var sg=function(a,b,c){function d(g,h){var k=g[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Rb(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},tg=function(a){pc.hasOwnProperty("autoEventsSettings")||(pc.autoEventsSettings={});var b=pc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},ug=function(a,b,c){tg(a)[b]=c},vg=function(a,b,c,d){var e=tg(a),g=ya(e,b,d);e[b]=c(g)},wg=function(a,b,c){var d=tg(a);return ya(d,b,c)};var xg=function(){for(var a=Hb.userAgent+(D.cookie||"")+(D.referrer||""),b=a.length,c=C.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(xa()/1E3)].join(".")},Ag=function(a,b,c,d){var e=yg(b);return af(a,e,zg(c),d)},Bg=function(a,b,c,d){var e=""+yg(c),g=zg(d);1<g&&(e+="-"+g);return[b,e,a].join(".")},yg=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},zg=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var Cg=["1"],Dg={},Hg=function(a,b,c,d){var e=Eg(a);Dg[e]||Fg(e,b,c)||(Gg(e,xg(),b,c,d),Fg(e,b,c))};function Gg(a,b,c,d,e){var g=Bg(b,"1",d,c);ef(a,g,c,d,0==e?void 0:new Date(xa()+1E3*(void 0==e?7776E3:e)))}function Fg(a,b,c){var d=Ag(a,b,c,Cg);d&&(Dg[a]=d);return d}function Eg(a){return(a||"_gcl")+"_au"};var Ig=function(){for(var a=[],b=D.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({Wc:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].Wc]||(g[a[h].Wc]=[]),g[a[h].Wc].push({timestamp:k[1],Uf:k[2]}))}return g};function Jg(){for(var a=Kg,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Lg(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var Kg,Mg,Ng=function(a){Kg=Kg||Lg();Mg=Mg||Jg();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,n=(h&15)<<2|k>>6,p=k&63;e||(p=64,d||(n=64));b.push(Kg[l],Kg[m],Kg[n],Kg[p])}return b.join("")},Og=function(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Mg[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Kg=Kg||Lg();Mg=Mg||
Jg();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Pg;function Qg(a,b){if(!a||b===D.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}
var Ug=function(){var a=Rg,b=Sg,c=Tg(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){Pb(D,"mousedown",d);Pb(D,"keyup",d);Pb(D,"submit",e);var g=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);g.call(this)};c.init=!0}},Tg=function(){var a=Jb("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Vg=/(.*?)\*(.*?)\*(.*)/,Wg=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Xg=/^(?:www\.|m\.|amp\.)+/,Yg=/([^?#]+)(\?[^#]*)?(#.*)?/,Zg=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,ah=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Ng(String(d))))}var e=b.join("*");return["1",$g(e),e].join("*")},$g=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Pg)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}Pg=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Pg[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},ch=function(){return function(a){var b=qe(C.location.href),c=b.search.replace("?",""),d=me(c,"_gl",!0)||"";a.query=bh(d)||{};var e=pe(b,"fragment").match(Zg);a.fragment=bh(e&&e[3]||
"")||{}}},dh=function(){var a=ch(),b=Tg();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Ca(c,d.query),Ca(c,d.fragment));return c},bh=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=Vg.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===$g(k,n)){l=!0;break a}l=!1}if(l){for(var p={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)p[t[q]]=Og(t[q+1]);return p}}}}catch(r){}};
function eh(a,b,c){function d(m){var n=m,p=Zg.exec(n),t=n;if(p){var q=p[2],r=p[4];t=p[1];r&&(t=t+q+r)}m=t;var v=m.charAt(m.length-1);m&&"&"!==v&&(m+="&");return m+l}c=void 0===c?!1:c;var e=Yg.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function fh(a,b,c){for(var d={},e={},g=Tg().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&Qg(k.domains,b)&&(k.fragment?Ca(e,k.callback()):Ca(d,k.callback()))}if(Da(d)){var l=ah(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],p=!1,t=0;t<n.length;t++){var q=n[t];if("_gl"===q.name){q.setAttribute("value",l);p=!0;break}}if(!p){var r=D.createElement("input");r.setAttribute("type","hidden");r.setAttribute("name","_gl");r.setAttribute("value",
l);a.appendChild(r)}}else if("post"===m){var v=eh(l,a.action);ke.test(v)&&(a.action=v)}}}else gh(l,a,!1)}if(!c&&Da(e)){var w=ah(e);gh(w,a,!0)}}function gh(a,b,c){if(b.href){var d=eh(a,b.href,void 0===c?!1:c);ke.test(d)&&(b.href=d)}}
var Rg=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||fh(e,e.hostname,!1)}}catch(h){}},Sg=function(a){try{if(a.action){var b=pe(qe(a.action),"host");fh(a,b,!0)}}catch(c){}},hh=function(a,b,c,d){Ug();var e={callback:a,domains:b,fragment:"fragment"===c,forms:!!d};Tg().decorators.push(e)},ih=function(){var a=D.location.hostname,b=Wg.exec(D.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(Xg,""),l=e.replace(Xg,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},jh=function(a,b){return!1===a?!1:a||b||ih()};var kh={};var lh=/^\w+$/,mh=/^[\w-]+$/,nh=/^~?[\w-]+$/,oh={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"};function ph(a){return a&&"string"==typeof a&&a.match(lh)?a:"_gcl"}var rh=function(){var a=qe(C.location.href),b=pe(a,"query",!1,void 0,"gclid"),c=pe(a,"query",!1,void 0,"gclsrc"),d=pe(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||me(e,"gclid",void 0);c=c||me(e,"gclsrc",void 0)}return qh(b,c,d)};
function qh(a,b,c){var d={},e=function(g,h){d[h]||(d[h]=[]);d[h].push(g)};if(void 0!==a&&a.match(mh))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==kh.gtm_3pds?0:kh.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}var th=function(a){var b=rh();sh(b,a)};
function sh(a,b,c){function d(p,t){var q=uh(p,e);q&&ef(q,t,h,g,l,!0)}b=b||{};var e=ph(b.prefix),g=b.domain||"auto",h=b.path||"/",k=void 0==b.Hc?7776E3:b.Hc;c=c||xa();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(p){return["GCL",m,p].join(".")};a.aw&&(!0===b.Dh?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]))}
var wh=function(a,b,c,d,e){for(var g=dh(),h=ph(b),k=0;k<a.length;++k){var l=a[k];if(void 0!==oh[l]){var m=uh(l,h),n=g[m];if(n){var p=Math.min(vh(n),xa()),t;b:{for(var q=p,r=Xe(m,D.cookie),v=0;v<r.length;++v)if(vh(r[v])>q){t=!0;break b}t=!1}t||ef(m,n,c,d,0==e?void 0:new Date(p+1E3*(null==e?7776E3:e)),!0)}}}var w={prefix:b,path:c,domain:d};sh(qh(g.gclid,g.gclsrc),w)},uh=function(a,b){var c=oh[a];if(void 0!==c)return b+c},vh=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function xh(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var yh=function(a,b,c,d,e){if(ma(b)){var g=ph(e);hh(function(){for(var h={},k=0;k<a.length;++k){var l=uh(a[k],g);if(l){var m=Xe(l,D.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},zh=function(a){return a.filter(function(b){return nh.test(b)})},Ah=function(a){for(var b=["aw","dc"],c=ph(a&&a.prefix),d={},e=0;e<b.length;e++)oh[b[e]]&&(d[b[e]]=oh[b[e]]);sa(d,function(g,h){var k=Xe(c+h,D.cookie);if(k.length){var l=k[0],m=vh(l),n={};n[g]=[xh(l)];sh(n,a,m)}})};var Bh=/^\d+\.fls\.doubleclick\.net$/;function Ch(a){var b=qe(C.location.href),c=pe(b,"host",!1);if(c&&c.match(Bh)){var d=pe(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Dh(a,b){if("aw"==a||"dc"==a){var c=Ch("gcl"+a);if(c)return c.split(".")}var d=ph(b);if("_gcl"==d){var e;e=rh()[a]||[];if(0<e.length)return e}var g=uh(a,d),h;if(g){var k=[];if(D.cookie){var l=Xe(g,D.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=xh(l[m]);n&&-1===f(k,n)&&k.push(n)}h=zh(k)}else h=k}else h=k}else h=[];return h}
var Eh=function(){var a=Ch("gac");if(a)return decodeURIComponent(a);var b=Ig(),c=[];sa(b,function(d,e){for(var g=[],h=0;h<e.length;h++)g.push(e[h].Uf);g=zh(g);g.length&&c.push(d+":"+g.join(","))});return c.join(";")},Fh=function(a,b,c,d,e){Hg(b,c,d,e);var g=Dg[Eg(b)],h=rh().dc||[],k=!1;if(g&&0<h.length){var l=pc.joined_au=pc.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var p="https://adservice.google.com/ddm/regclk",t=p=p+"?gclid="+h[n]+"&auiddc="+g;Hb.sendBeacon&&Hb.sendBeacon(t)||Ob(t);k=l[m]=
!0}}null==a&&(a=k);if(a&&g){var q=Eg(b),r=Dg[q];r&&Gg(q,r,c,d,e)}};var Gh;if(3===oc.zb.length)Gh="g";else{var Hh="G";Gh=Hh}
var Jh={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Gh,OPT:"o"},Kh=function(a){var b=oc.m.split("-"),c=b[0].toUpperCase(),d=Jh[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",g;if(3===oc.zb.length){var h=void 0;g="2"+(h||"w")}else g=
"";return g+d+oc.zb+e};var Ph=["input","select","textarea"],Qh=["button","hidden","image","reset","submit"],Rh=function(a){var b=a.tagName.toLowerCase();return!na(Ph,function(c){return c===b})||"input"===b&&na(Qh,function(c){return c===a.type.toLowerCase()})?!1:!0},Sh=function(a){return a.form?a.form.tagName?a.form:D.getElementById(a.form):Ub(a,["form"],100)},Th=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,g=1;e<a.elements.length;e++){var h=a.elements[e];if(Rh(h)){if(h.getAttribute(c)===d)return g;
g++}}return 0};var Wh=!!C.MutationObserver,Xh=void 0,Yh=function(a){if(!Xh){var b=function(){var c=D.body;if(c)if(Wh)(new MutationObserver(function(){for(var e=0;e<Xh.length;e++)G(Xh[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Pb(c,"DOMNodeInserted",function(){d||(d=!0,G(function(){d=!1;for(var e=0;e<Xh.length;e++)G(Xh[e])}))})}};Xh=[];D.body?b():G(b)}Xh.push(a)};
var pi=function(){var a=D.body,b=D.documentElement||a&&a.parentElement,c,d;if(D.compatMode&&"BackCompat"!==D.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(g,h){return g&&h?Math.min(g,h):Math.max(g,h)};Dc("GTM",7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},qi=function(a){var b=pi(),c=b.height,d=b.width,e=a.getBoundingClientRect(),g=e.bottom-e.top,h=e.right-e.left;return g&&h?(1-Math.min((Math.max(0-e.left,
0)+Math.max(e.right-d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/g,1)):0},ri=function(a){if(D.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!C.getComputedStyle)return!0;var c=C.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var g=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-
1)),g=Math.min(h,g))}if(void 0!==g&&0>=g)return!0;(d=d.parentElement)&&(e=C.getComputedStyle(d,null))}return!1};var si=[],ti=!(!C.IntersectionObserver||!C.IntersectionObserverEntry),ui=function(a,b,c){for(var d=new C.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var g=0;g<si.length;g++)if(!si[g])return si[g]=d,g;return si.push(d)-1},vi=function(a,b,c){function d(k,l){var m={top:0,bottom:0,right:0,left:0,width:0,
height:0},n={boundingClientRect:k.getBoundingClientRect(),intersectionRatio:l,intersectionRect:m,isIntersecting:0<l,rootBounds:m,target:k,time:xa()};G(function(){return a(n)})}for(var e=[],g=[],h=0;h<b.length;h++)e.push(0),g.push(-1);c.sort(function(k,l){return k-l});return function(){for(var k=0;k<b.length;k++){var l=qi(b[k]);if(l>e[k])for(;g[k]<c.length-1&&l>=c[g[k]+1];)d(b[k],l),g[k]++;else if(l<e[k])for(;0<=g[k]&&l<=c[g[k]];)d(b[k],l),g[k]--;e[k]=l}}},wi=function(a,b,c){for(var d=0;d<c.length;d++)1<
c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(ti){var e=!1;G(function(){e||vi(a,b,c)()});return ui(function(g){e=!0;for(var h={Ga:0};h.Ga<g.length;h={Ga:h.Ga},h.Ga++)G(function(k){return function(){return a(g[k.Ga])}}(h))},b,c)}return C.setInterval(vi(a,b,c),1E3)},xi=function(a){ti?0<=a&&a<si.length&&si[a]&&(si[a].disconnect(),si[a]=void 0):C.clearInterval(a)};var zi=C.clearTimeout,Ai=C.setTimeout,K=function(a,b,c){if(md()){b&&G(b)}else return Lb(a,b,c)},Bi=function(){return C.location.href},Ci=function(a){return pe(qe(a),"fragment")},Di=function(a){return oe(qe(a))},Ei=null;
var Fi=function(a,b){return cd(a,b||2)},Gi=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return Nf(a)},Hi=function(a,b){C[a]=b},W=function(a,b,c){b&&(void 0===C[a]||c&&!C[a])&&(C[a]=b);return C[a]},Ii=function(a,b,c){return Xe(a,b,void 0===c?!0:!!c)},Ji=function(a,b,c,d){var e={prefix:a,path:b,domain:c,Hc:d};th(e);Ah(e)},Ki=function(a,b,c,d,e){wh(a,b,c,d,e);},Li=function(a,b,c,d,e){
yh(a,b,c,d,e);},Mi=function(a,b){if(md()){b&&G(b)}else Nb(a,b)},Ni=function(a){return!!wg(a,"init",!1)},Oi=function(a){ug(a,"init",!0)},Pi=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":tc;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";b&&sa(b,function(e,g){g&&(d+="&"+e+"="+encodeURIComponent(g))});K(J("https://","http://",d))},Qi=function(a,b){var c=a[b];
return c};
var Si=pg.ng;var Ti=new qa,Ui=function(a,b){function c(h){var k=qe(h),l=pe(k,"protocol"),m=pe(k,"host",!0),n=pe(k,"port"),p=pe(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,p]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0},Vi=function(a){var b=a.arg0,c=a.arg1;if(a.any_of&&ma(c)){for(var d=0;d<c.length;d++)if(Vi({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=
String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");
return 0<=f(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var p;var t=a.ignore_case?"i":void 0;try{var q=String(c)+t,r=Ti.get(q);r||(r=new RegExp(c,t),Ti.set(q,r));p=r.test(b)}catch(v){p=!1}return p;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Ui(b,c)}return!1};var Xi={},Yi=function(){if(C._gtmexpgrp&&C._gtmexpgrp.hasOwnProperty(1))return C._gtmexpgrp[1];void 0===Xi[1]&&(Xi[1]=Math.floor(2*Math.random()));return Xi[1]};var Zi=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var $i={},aj=encodeURI,X=encodeURIComponent,bj=Ob;var cj=function(a,b){if(!a)return!1;var c=pe(qe(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var dj=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};$i.kg=function(){var a=!1;return a};var Ej=function(){var a=C.gaGlobal=C.gaGlobal||{};a.hid=a.hid||pa();return a.hid};var nk=window,ok=document,pk=function(a){var b=nk._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===nk["ga-disable-"+a])return!0;try{var c=nk.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=Xe("AMP_TOKEN",ok.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return ok.getElementById("__gaOptOutExtension")?!0:!1};var uk=function(a,b,c){Qe(b,c,a)},vk=function(a,b,c){Qe(b,c,a,!0)},xk=function(a,b){},wk=function(a,b){},
yk=function(a){return"_"===a.charAt(0)},zk=function(a){sa(a,function(c){yk(c)&&delete a[c]});var b=a[H.ub]||{};sa(b,function(c){yk(c)&&delete b[c]})};var Z={a:{}};
Z.a.ctv=["google"],function(){(function(a){Z.__ctv=a;Z.__ctv.b="ctv";Z.__ctv.g=!0;Z.__ctv.priorityOverride=0})(function(){return"813"})}();

Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=W("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.a.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.b="sp";Z.__sp.g=!0;Z.__sp.priorityOverride=0})(function(a){var b=void 0,c="//www.googleadservices.com/pagead/conversion_async.js";
var d=a.vtp_gtmOnFailure;Zd();K(c,function(){var e=W("google_trackConversion");if(ja(e)){var g={};"DATA_LAYER"==a.vtp_customParamsFormat?g=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(g=dj(a.vtp_customParams,"key","value"));var h={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(g.event=a.vtp_eventName),a.vtp_eventValue&&(h.value=a.vtp_eventValue),a.vtp_eventItems&&(h.items=a.vtp_eventItems));var k={google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,
google_custom_params:g,google_gtag_event_data:h,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:Kh()};b&&(k.google_additional_conversion_params=b);e(k)||d()}else d()},d)})}();Z.a.c=["google"],function(){(function(a){Z.__c=a;Z.__c.b="c";Z.__c.g=!0;Z.__c.priorityOverride=0})(function(a){return a.vtp_value})}();

Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(function(a){return String(ld(a.vtp_gtmEventId,"event"))})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.b="f";Z.__f.g=!0;Z.__f.priorityOverride=0})(function(a){var b=Fi("gtm.referrer",1)||D.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?pe(qe(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Di(String(b)):String(b)})}();
Z.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=sg(c,"gtm.click");Gi(d)}}(function(b){Z.__cl=b;Z.__cl.b="cl";Z.__cl.g=!0;Z.__cl.priorityOverride=0})(function(b){if(!Ni("cl")){var c=W("document");Pb(c,"click",a,!0);Oi("cl")}G(b.vtp_gtmOnSuccess)})}();
Z.a.j=["google"],function(){(function(a){Z.__j=a;Z.__j.b="j";Z.__j.g=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=W(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Z.a.k=["google"],function(){(function(a){Z.__k=a;Z.__k.b="k";Z.__k.g=!0;Z.__k.priorityOverride=0})(function(a){return Ii(a.vtp_name,Fi("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();
Z.a.r=["google"],function(){(function(a){Z.__r=a;Z.__r.b="r";Z.__r.g=!0;Z.__r.priorityOverride=0})(function(a){return pa(a.vtp_min,a.vtp_max)})}();
Z.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.b="u";Z.__u.g=!0;Z.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:Fi("gtm.url",1))||Bi();var d=b[a("vtp_component")];if(!d||"URL"==d)return Di(String(c));var e=qe(String(c)),g;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;m=h?ma(k)?k:String(k).replace(/\s+/g,
"").split(","):[String(k)];for(var n=0;n<m.length;n++){var p=pe(e,"QUERY",void 0,void 0,m[n]);if(void 0!=p&&(!l||""!==p)){g=p;break a}}g=void 0}else g=pe(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return g})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Fi(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.ua=["google"],function(){var a,b={},c=function(d){var e={},g={},h={},k={},l={},m=void 0;if(d.vtp_gaSettings){var n=d.vtp_gaSettings;u(dj(n.vtp_fieldsToSet,"fieldName","value"),g);u(dj(n.vtp_contentGroup,"index","group"),h);u(dj(n.vtp_dimension,"index","dimension"),k);u(dj(n.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var p=u(n);d=u(d,p)}u(dj(d.vtp_fieldsToSet,"fieldName","value"),g);u(dj(d.vtp_contentGroup,
"index","group"),h);u(dj(d.vtp_dimension,"index","dimension"),k);u(dj(d.vtp_metric,"index","metric"),l);var t=fe(d.vtp_functionName);if(ja(t)){var q="",r="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(r=d.vtp_trackerName,q=r+"."):(r="gtm"+Ac(),q=r+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},y=function(S){var O=[].slice.call(arguments,0);O[0]=q+O[0];t.apply(window,O)},x=function(S,O){return void 0===O?O:S(O)},A=function(S,O){if(O)for(var oa in O)O.hasOwnProperty(oa)&&y("set",S+oa,O[oa])},z=function(){
var S=function(Jk,Ih,Kk){if(!Ia(Ih))return!1;for(var Cc=ya(Object(Ih),Kk,[]),$e=0;Cc&&$e<Cc.length;$e++)y(Jk,Cc[$e]);return!!Cc&&0<Cc.length},O;if(d.vtp_useEcommerceDataLayer){var oa=!1;oa||(O=Fi("ecommerce",1))}else d.vtp_ecommerceMacroData&&(O=d.vtp_ecommerceMacroData.ecommerce);if(!Ia(O))return;O=Object(O);var Sa=ya(g,"currencyCode",O.currencyCode);
void 0!==Sa&&y("set","&cu",Sa);S("ec:addImpression",O,"impressions");if(S("ec:addPromo",O[O.promoClick?"promoClick":"promoView"],"promotions")&&O.promoClick){y("ec:setAction","promo_click",O.promoClick.actionField);return}for(var Aa="detail checkout checkout_option click add remove purchase refund".split(" "),Ta="refund purchase remove checkout checkout_option add click detail".split(" "),Ua=0;Ua<Aa.length;Ua++){var gb=O[Aa[Ua]];if(gb){S("ec:addProduct",gb,"products");y("ec:setAction",Aa[Ua],gb.actionField);
if(Tc)for(var ob=0;ob<Ta.length;ob++){var Zb=O[Ta[ob]];if(Zb){Zb!==gb&&Dc("GTM",13);break}}break}}},B=function(S,O,oa){var Sa=0;if(S)for(var Aa in S)if(S.hasOwnProperty(Aa)&&(oa&&v[Aa]||!oa&&void 0===v[Aa])){var Ta=w[Aa]?ua(S[Aa]):S[Aa];"anonymizeIp"!=Aa||Ta||(Ta=void 0);O[Aa]=Ta;Sa++}return Sa},E={name:r};B(g,E,!0);t("create",d.vtp_trackingId||e.trackingId,E);y("set","&gtm",Kh(!0));d.vtp_enableRecaptcha&&y("require","recaptcha","recaptcha.js");(function(S,O){void 0!==d[O]&&y("set",S,d[O])})("nonInteraction","vtp_nonInteraction");A("contentGroup",h);A("dimension",k);A("metric",l);var F={};B(g,F,!1)&&y("set",F);var M;
d.vtp_enableLinkId&&y("require","linkid","linkid.js");y("set","hitCallback",function(){var S=g&&g.hitCallback;ja(S)&&S();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(y("require","ec","ec.js"),z());var N={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||e.action),eventLabel:x(String,d.vtp_eventLabel||e.label),eventValue:x(ta,d.vtp_eventValue||
e.value)};B(M,N,!1);y("send",N);}else if("TRACK_SOCIAL"==d.vtp_trackType){}else if("TRACK_TRANSACTION"==d.vtp_trackType){}else if("TRACK_TIMING"==
d.vtp_trackType){}else if("DECORATE_LINK"==d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&(y("require","ec","ec.js"),z());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var Y=
"_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","displayfeatures",void 0,{cookieName:Y})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var da="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","adfeatures",{cookieName:da})}M?y("send","pageview",M):y("send","pageview");}if(!a){var ea=d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(ea="internal/"+ea);a=!0;var Ba=J("https:","http:","//www.google-analytics.com/"+ea,g&&g.forceSSL);K(Ba,function(){var S=de();S&&S.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else G(d.vtp_gtmOnFailure)};Z.__ua=c;Z.__ua.b="ua";Z.__ua.g=!0;Z.__ua.priorityOverride=0}();



Z.a.cid=["google"],function(){(function(a){Z.__cid=a;Z.__cid.b="cid";Z.__cid.g=!0;Z.__cid.priorityOverride=0})(function(){return oc.m})}();

Z.a.gclidw=["google"],function(){var a=["aw","dc","gf","ha"];(function(b){Z.__gclidw=b;Z.__gclidw.b="gclidw";Z.__gclidw.g=!0;Z.__gclidw.priorityOverride=100})(function(b){G(b.vtp_gtmOnSuccess);var c,d,e;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain);var g=null;b.vtp_enableCookieUpdateFeature&&(g=!0,void 0!==b.vtp_cookieUpdate&&(g=!!b.vtp_cookieUpdate));var h=e,k=c,l=d;b.vtp_enableCrossDomainFeature&&(b.vtp_enableCrossDomain&&!1===b.vtp_acceptIncoming||(b.vtp_enableCrossDomain||
ih())&&Ki(a,h,k,l));Ji(e,c,d);Fh(g,e,c,d);var m=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var n=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");Li(a,n,b.vtp_urlPosition,!!b.vtp_formDecoration,m)}})}();

Z.a.aev=["google"],function(){function a(q,r){var v=ld(q,"gtm");if(v)return v[r]}function b(q,r,v,w){w||(w="element");var y=q+"."+r,x;if(n.hasOwnProperty(y))x=n[y];else{var A=a(q,w);if(A&&(x=v(A),n[y]=x,p.push(y),35<p.length)){var z=p.shift();delete n[z]}}return x}function c(q,r,v){var w=a(q,t[r]);return void 0!==w?w:v}function d(q,r){if(!q)return!1;var v=e(Bi());ma(r)||(r=String(r||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<r.length;y++)if(r[y]instanceof RegExp){if(r[y].test(q))return!1}else{var x=
r[y];if(0!=x.length){if(0<=e(q).indexOf(x))return!1;w.push(e(x))}}return!cj(q,w)}function e(q){m.test(q)||(q="http://"+q);return pe(qe(q),"HOST",!0)}function g(q,r,v){switch(q){case "SUBMIT_TEXT":return b(r,"FORM."+q,h,"formSubmitElement")||v;case "LENGTH":var w=b(r,"FORM."+q,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(r,"id",v);case "INTERACTED_FIELD_NAME":return l(r,"name",v);case "INTERACTED_FIELD_TYPE":return l(r,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(r,"interactedFormFieldPosition");
return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(r,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function h(q){switch(q.tagName.toLowerCase()){case "input":return Rb(q,"value");case "button":return Sb(q);default:return null}}function k(q){if("form"===q.tagName.toLowerCase()&&q.elements){for(var r=0,v=0;v<q.elements.length;v++)Rh(q.elements[v])&&r++;return r}}function l(q,r,v){var w=a(q,"interactedFormField");return w&&Rb(w,r)||v}var m=/^https?:\/\//i,n={},p=[],t={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(q){Z.__aev=q;Z.__aev.b="aev";Z.__aev.g=!0;Z.__aev.priorityOverride=0})(function(q){var r=q.vtp_gtmEventId,v=q.vtp_defaultValue,w=q.vtp_varType;switch(w){case "TAG_NAME":var y=a(r,"element");return y&&y.tagName||
v;case "TEXT":return b(r,w,Sb)||v;case "URL":var x;a:{var A=String(a(r,"elementUrl")||v||""),z=qe(A),B=String(q.vtp_component||"URL");switch(B){case "URL":x=A;break a;case "IS_OUTBOUND":x=d(A,q.vtp_affiliatedDomains);break a;default:x=pe(z,B,q.vtp_stripWww,q.vtp_defaultPages,q.vtp_queryKey)}}return x;case "ATTRIBUTE":var E;if(void 0===q.vtp_attribute)E=c(r,w,v);else{var F=q.vtp_attribute,M=a(r,"element");E=M&&Rb(M,F)||v||""}return E;case "MD":var N=q.vtp_mdValue,U=b(r,"MD",li);return N&&U?oi(U,N)||
v:U||v;case "FORM":return g(String(q.vtp_component||"SUBMIT_TEXT"),r,v);default:return c(r,w,v)}})}();
Z.a.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.b="gas";Z.__gas.g=!0;Z.__gas.priorityOverride=0})(function(a){var b=u(a),c=b;c[yb.ia]=null;c[yb.Se]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Z.a.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=W("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},g=function(){return function(){d();b={push:c};}},h=function(k){Zd();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:Kh()},m=function(v){return function(w,y,x){var A="DATA_LAYER"==v?Fi(x):k[y];A&&(l[w]=A)}},n=m("JSON");n("google_conversion_currency","vtp_currencyCode");n("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(n=m(k.vtp_productReportingDataSource),n("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),n("google_basket_feed_country",
"vtp_awFeedCountry","aw_feed_country"),n("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),n("google_basket_discount","vtp_discount","discount"),n("google_conversion_items","vtp_items","items"),l.google_conversion_items=l.google_conversion_items.map(function(v){return{value:v.price,quantity:v.quantity,item_id:v.id}}));var p=function(v,w){(l.google_additional_conversion_params=l.google_additional_conversion_params||{})[v]=w},t=function(v){return function(w,y,x,A){var z="DATA_LAYER"==
v?Fi(x):k[y];A(z)&&p(w,z)}},q="//www.googleadservices.com/pagead/conversion_async.js";k.vtp_enableNewCustomerReporting&&(n=t(k.vtp_newCustomerReportingDataSource),n("vdnc",
"vtp_awNewCustomer","new_customer",ca),n("vdltv","vtp_awCustomerLTV","customer_lifetime_value",function(v){return void 0!=v&&""!==v}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;var r=!0;r&&b.push(l);a||(a=!0,K(q,g(),e(q)))};Z.__awct=h;Z.__awct.b="awct";Z.__awct.g=!0;Z.__awct.priorityOverride=0}();Z.a.remm=["google"],function(){(function(a){Z.__remm=a;Z.__remm.b="remm";Z.__remm.g=!0;Z.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",g=0;g<c.length;g++){var h=c[g].key||"";d&&(h="^"+h+"$");var k=new RegExp(h,e);if(k.test(b)){var l=c[g].value;a.vtp_replaceAfterMatch&&(l=String(b).replace(k,l));return l}}return a.vtp_defaultValue})}();

Z.a.fsl=[],function(){function a(){var e=W("document"),g=c(),h=HTMLFormElement.prototype.submit;Pb(e,"click",function(k){var l=k.target;if(l&&(l=Ub(l,["button","input"],100))&&("submit"==l.type||"image"==l.type)&&l.name&&Rb(l,"value")){var m;(m=l.form?l.form.tagName?l.form:D.getElementById(l.form):Ub(l,["form"],100))&&g.store(m,l)}},!1);Pb(e,"submit",function(k){var l=k.target;if(!l)return k.returnValue;var m=k.defaultPrevented||!1===k.returnValue,n=b(l)&&!m,p=g.get(l),t=!0;if(d(l,function(){if(t){var q;
p&&(q=e.createElement("input"),q.type="hidden",q.name=p.name,q.value=p.value,l.appendChild(q));h.call(l);q&&l.removeChild(q)}},m,n,p))t=!1;else return m||(k.preventDefault&&k.preventDefault(),k.returnValue=!1),!1;return k.returnValue},!1);HTMLFormElement.prototype.submit=function(){var k=this,l=b(k),m=!0;d(k,function(){m&&h.call(k)},!1,l)&&(h.call(k),m=!1)}}function b(e){var g=e.target;return g&&"_self"!==g&&"_parent"!==g&&"_top"!==g?!1:!0}function c(){var e=[],g=function(h){return na(e,function(k){return k.form===
h})};return{store:function(h,k){var l=g(h);l?l.button=k:e.push({form:h,button:k})},get:function(h){var k=g(h);return k?k.button:null}}}function d(e,g,h,k,l){var m=wg("fsl",h?"nv.mwt":"mwt",0),n;n=h?wg("fsl","nv.ids",[]):wg("fsl","ids",[]);if(!n.length)return!0;var p=sg(e,"gtm.formSubmit",n),t=e.action;t&&t.tagName&&(t=e.cloneNode(!1).action);p["gtm.elementUrl"]=t;l&&(p["gtm.formSubmitElement"]=l);if(k&&m){if(!Gi(p,Of(g),m))return!1}else Gi(p,function(){},m||2E3);return!0}(function(e){Z.__fsl=e;Z.__fsl.b=
"fsl";Z.__fsl.g=!0;Z.__fsl.priorityOverride=0})(function(e){var g=e.vtp_waitForTags,h=e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(g){var m=function(p){return Math.max(k,p)};vg("fsl","mwt",m,0);h||vg("fsl","nv.mwt",m,0)}var n=function(p){p.push(l);return p};vg("fsl","ids",n,[]);h||vg("fsl","nv.ids",n,[]);Ni("fsl")||(a(),Oi("fsl"));G(e.vtp_gtmOnSuccess)})}();




Z.a.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.b="paused";Z.__paused.g=!0;Z.__paused.priorityOverride=0})(function(a){G(a.vtp_gtmOnFailure)})}();Z.a.hid=["google"],function(){(function(a){Z.__hid=a;Z.__hid.b="hid";Z.__hid.g=!0;Z.__hid.priorityOverride=0})(function(){return pg.vb})}();
Z.a.html=["customScripts"],function(){function a(d,e,g,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,g,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=D.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Kb(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];k.firstChild;)p.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,p,l,h)()}else d.insertBefore(k,null),l()}else g()}catch(t){G(h)}}}var b=function(d,e,g){Qd(function(){var h,k=pc;k.postscribe||(k.postscribe=Eb);h=k.postscribe;var l={done:e},m=D.createElement("div");m.style.display="none";m.style.visibility="hidden";D.body.appendChild(m);try{h(m,d,l)}catch(n){G(g)}})};var c=function(d){if(D.body){var e=
d.vtp_gtmOnFailure,g=Si(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.yc,k=g.J;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(D.body,Tb(h),k,e)()}else Ai(function(){c(d)},
200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0;Z.__html.priorityOverride=0}();


Z.a.dbg=["google"],function(){(function(a){Z.__dbg=a;Z.__dbg.b="dbg";Z.__dbg.g=!0;Z.__dbg.priorityOverride=0})(function(){return!1})}();


Z.a.img=["customPixels"],function(){(function(a){Z.__img=a;Z.__img.b="img";Z.__img.g=!0;Z.__img.priorityOverride=0})(function(a){var b=Tb('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}bj(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();


Z.a.evl=["google"],function(){function a(g,h){this.element=g;this.uid=h}function b(){var g=Number(Fi("gtm.start"))||0;return(new Date).getTime()-g}function c(g,h,k,l){function m(){if(!ri(g.target)){h.has(e.yb)||h.set(e.yb,""+b());h.has(e.ic)||h.set(e.ic,""+b());var p=0;h.has(e.Ab)&&(p=Number(h.get(e.Ab)));p+=100;h.set(e.Ab,""+p);if(p>=k){var t=sg(g.target,"gtm.elementVisibility",[h.uid]),q=qi(g.target);t["gtm.visibleRatio"]=Math.round(1E3*q)/10;t["gtm.visibleTime"]=k;t["gtm.visibleFirstTime"]=Number(h.get(e.ic));
t["gtm.visibleLastTime"]=Number(h.get(e.yb));Gi(t);l()}}}if(!h.has(e.Ua)&&(0==k&&m(),!h.has(e.wa))){var n=W("self").setInterval(m,100);h.set(e.Ua,n)}}function d(g){g.has(e.Ua)&&(W("self").clearInterval(Number(g.get(e.Ua))),g.remove(e.Ua))}var e={Ua:"polling-id-",ic:"first-on-screen-",yb:"recent-on-screen-",Ab:"total-visible-time-",wa:"has-fired-"};a.prototype.has=function(g){return!!this.element.getAttribute("data-gtm-vis-"+g+this.uid)};a.prototype.get=function(g){return this.element.getAttribute("data-gtm-vis-"+
g+this.uid)};a.prototype.set=function(g,h){this.element.setAttribute("data-gtm-vis-"+g+this.uid,h)};a.prototype.remove=function(g){this.element.removeAttribute("data-gtm-vis-"+g+this.uid)};(function(g){Z.__evl=g;Z.__evl.b="evl";Z.__evl.g=!0;Z.__evl.priorityOverride=0})(function(g){function h(){var y=!1,x=null;if("CSS"===l){try{x=wf(m)}catch(F){}y=!!x&&v.length!=x.length}else if("ID"===l){var A=D.getElementById(m);A&&(x=[A],y=1!=v.length||v[0]!==A)}x||(x=[],y=0<v.length);if(y){for(var z=0;z<v.length;z++){var B=
new a(v[z],q);d(B)}v=[];for(var E=0;E<x.length;E++)v.push(x[E]);0<=w&&xi(w);0<v.length&&(w=wi(k,v,[t]))}}function k(y){var x=new a(y.target,q);y.intersectionRatio>=t?x.has(e.wa)||c(y,x,p,"ONCE"===r?function(){for(var A=0;A<v.length;A++){var z=new a(v[A],q);z.set(e.wa,"1");d(z)}xi(w);if(n&&Xh)for(var B=0;B<Xh.length;B++)Xh[B]===h&&Xh.splice(B,1)}:function(){x.set(e.wa,"1");d(x)}):(d(x),"MANY_PER_ELEMENT"===r&&x.has(e.wa)&&(x.remove(e.wa),x.remove(e.Ab)),x.remove(e.yb))}var l=g.vtp_selectorType,m;"ID"===
l?m=String(g.vtp_elementId):"CSS"===l&&(m=String(g.vtp_elementSelector));var n=!!g.vtp_useDomChangeListener,p=g.vtp_useOnScreenDuration&&Number(g.vtp_onScreenDuration)||0,t=(Number(g.vtp_onScreenRatio)||50)/100,q=g.vtp_uniqueTriggerId,r=g.vtp_firingFrequency,v=[],w=-1;h();n&&Yh(h);G(g.vtp_gtmOnSuccess)})}();

var Ik={};Ik.macro=function(a){if(pg.jc.hasOwnProperty(a))return pg.jc[a]},Ik.onHtmlSuccess=pg.Hd(!0),Ik.onHtmlFailure=pg.Hd(!1);Ik.dataLayer=dd;Ik.callback=function(a){yc.hasOwnProperty(a)&&ja(yc[a])&&yc[a]();delete yc[a]};Ik.tf=function(){pc[oc.m]=Ik;Ca(zc,Z.a);qb=qb||pg;rb=Id};
Ik.fg=function(){kh.gtm_3pds=!0;pc=C.google_tag_manager=C.google_tag_manager||{};if(pc[oc.m]){var a=pc.zones;a&&a.unregisterChild(oc.m)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)ib.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)lb.push(e[g]);for(var h=b.predicates||[],
k=0;k<h.length;k++)kb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},t=0;t<n.length;t++)p[n[t][0]]=Array.prototype.slice.call(n[t],1);jb.push(p)}nb=Z;pb=Vi;Ik.tf();Tf();Ld=!1;Md=0;if("interactive"==D.readyState&&!D.createEventObject||"complete"==D.readyState)Od();else{Pb(D,"DOMContentLoaded",Od);Pb(D,"readystatechange",Od);if(D.createEventObject&&D.documentElement.doScroll){var q=!0;try{q=!C.frameElement}catch(y){}q&&Pd()}Pb(C,"load",Od)}Hf=!1;"complete"===D.readyState?Jf():
Pb(C,"load",Jf);a:{if(!Tc)break a;C.setInterval(Uc,864E5);}
vc=(new Date).getTime();}};(0,Ik.fg)();

})()
