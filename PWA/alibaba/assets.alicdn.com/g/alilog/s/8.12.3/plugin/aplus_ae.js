/*! 2019-08-20 17:18:45 v8.12.3 */
!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";!function(){var e=window.goldlog||(window.goldlog={});if(!e._aplus_auto_exp){e._aplus_auto_exp={tags:{},status:"init",exp_times:0,elementSelectorSizeMap:{}};var t=n(1);t.init(function(){e._aplus_auto_exp.status="complete"})}}()},function(e,t,n){"use strict";var o,r=n(2),i=n(3),a=n(4);o=n(window.IntersectionObserver?19:22);var u=n(23),s=n(12);t.init=function(e){var t,n=window.goldlog||(window.goldlog={}),l=!1,c=!1,p=function(e){c||(c=e,l||(r.wrap(function(){t=s.getAutoExpConfig()||[],i.isDebugAplus()&&i.logger({msg:"aplus-auto-exp metaVaue init: "+JSON.stringify(t)});var e;t&&t.length>0&&(u.watch_data_change(),o.watch_exposure_change(t),e=a.create({isThrottleWatch:s.isThrottleWatchDom(),autoExpConfig:t}),e.init({type:"init"})),n.aplus_pubsub.subscribe("setMetaInfo",function(n,r,l){if("aplus-auto-exp"===n){i.isDebugAplus()&&i.logger({msg:"aplus-auto-exp metaVaue change: "+JSON.stringify(r)});var c=s.getAutoExpConfig(r);if(JSON.stringify(c)===JSON.stringify(t))return;if(t=c,u.clear(),o.clear(t,l),e&&e.clear(l),r&&t&&t.length>0){u.watch_data_change(),o.watch_exposure_change(t);var p={isThrottleWatch:s.isThrottleWatchDom(),autoExpConfig:t};e?e.reset(p,l):(e=a.create(p),e.init({type:"init"}))}}})},"do_init"),l=!0))};setTimeout(function(){l||i.logger({msg:"aplus_auto_exp_init failed! please check whether aplusJs is loaded correctly!"})},5e3);var g=n._$||{},f=window.g_SPM||{};"complete"===g.status&&f.spm&&p();var h=window.goldlog_queue||(window.goldlog_queue=[]);h.push({action:"goldlog.aplus_pubsub.subscribe",arguments:["aplusReady",function(e){"complete"===e&&p("aplusReady")}]}),"function"==typeof e&&e()}},function(e,t){"use strict";var n=function(e,t){var n=window.goldlog_queue||(window.goldlog_queue=[]);n.push({action:"goldlog._aplus_cplugin_track_deb.monitor",arguments:[{key:"APLUS_PLUGIN_DEBUG",title:"aplus_core",msg:["_error_:methodName="+t+",params="+JSON.stringify(e)],type:"updateMsg",description:t||"aplus_core"}]})},o=function(e,t,n){var o=window.goldlog_queue||(window.goldlog_queue=[]);o.push({action:["goldlog","_aplus_cplugin_m",t].join("."),arguments:[e,n]})};t.do_tracker_jserror=function(e,t){var r="do_tracker_jserror";o(e,r,t),n(e,r)},t.do_tracker_obsolete_inter=function(e,t){var r="do_tracker_obsolete_inter";o(e,r,t),n(e,r)},t.wrap=function(e){if("function"==typeof e)try{e()}catch(e){n({msg:e.message||e},"exception")}finally{}}},function(e,t){"use strict";var n=function(){var e=!1;return"boolean"==typeof goldlog.aplusDebug&&(e=goldlog.aplusDebug),e};t.isDebugAplus=n;var o=function(e){e||(e={});var t=e.level||"warn";window.console&&window.console[t]&&window.console[t](e.msg)};t.logger=o},function(e,t,n){"use strict";var o=n(5),r=n(6),i=n(2),a=n(16),u=n(3),s=n(18),l=n(12),c=window,p=document,g=o.extend({eachElements:function(e,t){for(var n=t.logkey||"",o=0;o<e.length;o++){var i=e[o],a=i.getAttribute(l.DATA_APLUS_AE_KEY);if(!(a&&a.indexOf("_")>0)){isNaN(parseInt(a))&&(a=goldlog._aplus_auto_exp.elementSelectorSizeMap[t.elementSelector]++,i.setAttribute(l.DATA_APLUS_AE_KEY,a));var u=r.getElementHash(t,{ignore_attr:!1,index:a,ele:i}),c=s.checkIsRecord(i,u,l.DATA_APLUS_AE_KEY),p=r.checkIsInHashMap({logkey:n,hash_value:u,goldlogKey:"_aplus_auto_exp"});if(!c&&!p){var g={expConfig:t,hash_value:u,element:i,status:0,elementSelector:t.elementSelector};r.updateExpHashMap(n,g,"ADD")}}}},handler_dom_change:function(e,t){try{for(var n=this.autoExpConfig||[],o=0;o<n.length;o++){var i=n[o],a=r.getElements(i,p);goldlog._aplus_auto_exp.elementSelectorSizeMap[i.elementSelector]||(goldlog._aplus_auto_exp.elementSelectorSizeMap[i.elementSelector]=1),this.eachElements(a,i)}goldlog.aplus_pubsub.publish("APLUS_AE_DOM_CHANGE",t||{})}catch(e){u.logger({msg:e&&e.message})}},throttle_handler_dom_change:r.throttle(function(e,t){this.handler_dom_change(e,t)},200),init_watch_dom:function(){var e=this,t=goldlog._aplus_auto_exp||{};e._loop_observer=setTimeout(function(){"blur"!==t.current_win_status?(goldlog.aplusDebug&&u.logger({msg:"watch_dom LOOP_TIME is "+l.LOOP_TIME+"ms total: "+ ++t.watch_times}),e.handler_dom_change(null,{type:"polling"}),e.init_watch_dom()):t.watch_dom_running=!1},l.LOOP_TIME)},onFocusHandler:function(){var e=this,t=goldlog._aplus_auto_exp||{};t.current_win_status="focus",t.watch_dom_running||e.init_watch_dom()},onBlurHandler:function(){var e=goldlog._aplus_auto_exp||{};e.current_win_status="blur"},onVisibilityChange:function(){var e=this;"visible"===p.visibilityState?e.onFocusHandler():"hidden"===p.visibilityState&&e.onBlurHandler()},addAllListener:function(){var e=this,t=goldlog._aplus_auto_exp||{};t.watch_times=0,t.watch_dom_running=!0,e.init_watch_dom(),c.WindVane&&p.addEventListener&&(a.on(p,"WV.Event.APP.Active",e.onFocusHandler,!1),a.on(p,"WV.Event.APP.Background",e.onBlurHandler,!1)),"hidden"in p?a.on(c,"visibilitychange",e.onVisibilityChange):(a.on(c,"blur",e.onBlurHandler),a.on(c,"focus",e.onFocusHandler))},removeAllListener:function(){var e=this;c.WindVane&&p.removeEventListener&&(a.un(p,"WV.Event.APP.Active",e.onFocusHandler,!1),a.un(p,"WV.Event.APP.Background",e.onBlurHandler,!1)),"hidden"in p?a.un(c,"visibilitychange",e.onVisibilityChange):(a.un(c,"blur",e.onBlurHandler),a.un(c,"focus",e.onFocusHandler))},init_observer:function(e,t){var n=["IFRAME","BODY","OBJECT","SCRIPT","NOSCRIPT","LINK","STYLE"],o=["class","style"],a=function(e){return"characterData"===e.type?[e.target]:"attributes"===e.type&&o.indexOf(e.attributeName)>-1?[e.target]:"childList"!==e.type?[]:void 0},s=function(e,o){if(e&&e.length>0)for(var r=0;r<e.length;r++){var a=e[r]||{},u=a.nodeName,s=goldlog._aplus_auto_exp.tags||{};s[u]||(s[u]=0),s[u]++,goldlog._aplus_auto_exp.tags=s,n.indexOf(u)===-1&&i.wrap(function(){var e=goldlog._aplus_auto_exp||{};++e.observer_times;var n=o.attributeName;t(a,{type:o.type+(n?"_"+n:"")})},"init_observer_init_elements")}};this._observer||(this._observer=new e(function(e){if(e&&e.length>0)for(var t=0;t<e.length;t++){var n=e[t]||{},o=r.nodelistToArray(n.addedNodes||[]);o=r.nodelistToArray(a(n),o),s(o,n)}}));var l={attributes:!0,childList:!0,characterData:!0,subtree:!0};this._observer.observe(p.body,l),r.IS_DEBUG&&u.logger({msg:"aplus_auto_exp init MutationObserver success!"})},init:function(e){var t=this,n=goldlog._aplus_auto_exp||{};e&&"reset"!==e.type&&!n.hash_value&&(n.hash_value={}),t.handler_dom_change(null,{type:"aplus_init"});var o=c.MutationObserver||c.WebKitMutationObserver||c.MozMutationObserver;o?(n.observer_times=0,t.init_observer(o,function(e,n){var o=e&&e.parentElement?e.parentElement:e;t.throttle_handler_dom_change(o,n)})):t.addAllListener()},clear:function(e){if(!e||"appendMetaInfo"!==e.from){var t=goldlog._aplus_auto_exp||{};t._acHashMap&&(t._acHashMap={}),t.hash_value&&(t.hash_value={}),goldlog._aplus_auto_exp=t,this._loop_observer&&(clearTimeout(this._loop_observer),this._loop_observer=null),this._observer?(this._observer.takeRecords(),this._observer.disconnect()):this.removeAllListener()}},clearDom:function(e,t){var n=this.autoExpConfig||[];if(t&&"appendMetaInfo"!==t.from)for(var o=0;o<n.length;o++)try{var r=n[o].elementSelector,i=p.querySelector(r);i.setAttribute(l.DATA_APLUS_AE_KEY,"")}catch(e){}this.autoExpConfig=e&&e.autoExpConfig?e.autoExpConfig:[]},reset:function(e,t){this.clearDom(e,t),this.init({type:"reset"})}});e.exports=g},function(e,t){"use strict";function n(){}n.prototype.extend=function(){},n.prototype.create=function(){},n.extend=function(e){return this.prototype.extend.call(this,e)},n.prototype.create=function(e){var t=new this;for(var n in e)t[n]=e[n];return t},n.prototype.extend=function(e){var t=function(){};try{"function"!=typeof Object.create&&(Object.create=function(e){function t(){}return t.prototype=e,new t}),t.prototype=Object.create(this.prototype);for(var n in e)t.prototype[n]=e[n];t.prototype.constructor=t,t.extend=t.prototype.extend,t.create=t.prototype.create}catch(e){console.log(e)}finally{return t}},e.exports=n},function(e,t,n){"use strict";function o(e,t,n){var o=t.hash_value,r=a.getGoldlogVal(n)||{};if(r.hash_value||(r.hash_value={}),r.hash_value[e]||(r.hash_value[e]=i.Map?new i.Map:{}),i.Map){var u=r.hash_value[e].get(o);u?++u:u=1,r.hash_value[e].set(o,u)}else r.hash_value[e][o]?++r.hash_value[e][o]:r.hash_value[e][o]=1;a.setGoldlogVal(n,r)}var r=document,i=window,a=n(7),u=n(3),s=n(8),l=n(9),c=n(10),p=n(11),g=n(12),f=function(e){return"[object Array]"===Object.prototype.toString.call(e)};t.isArray=f,t.getXPath=function(e){var t,n,o,i,a,u,s=r.getElementsByTagName("*");for(t=[];e&&1==e.nodeType;e=e.parentNode)if(e.id){for(u=e.id,i=0,n=0;n<s.length;n++)if(a=s[n],a.id&&a.id==u){i++;break}if(t.unshift(e.tagName.toLowerCase()+'[@id="'+u+'"]'),1==i)return t.unshift("/"),t.join("/")}else{for(n=1,o=e.previousSibling;o;o=o.previousSibling)o.tagName==e.tagName&&n++;t.unshift(e.tagName.toLowerCase()+"["+n+"]")}return t.length?"/"+t.join("/"):null};var h=function(e,t){if(t&&0!==t.length||(t=[]),e&&e.length>0)for(var n=0;n<e.length;n++)t.push(e[n]);return t};t.nodelistToArray=h,t.getElements=function(e,t){var n=t||r,o=[];if(n.querySelectorAll)o=h(n.querySelectorAll(e.elementSelector)||[]);else for(var i=document.getElementsByTagName(e.tag),a=e.filter.split("="),u=a.length>0?a[0].trim():"",s=a.length>1?a[1].trim():"",l=0;l<i.length;l++){var c=i[l],p=c.getAttribute(u),g=c.hasAttribute(u);!g||s&&s!==p||o.push(c)}return o};var d=function(){return/aplusDebug=true/.test(location.search)},v=d();t.IS_DEBUG=v,t.fillPropsData=function(e,t,n){n||(n={});try{var o=e.props||[];if(o&&f(o)&&o.length>0)for(var r=0;r<o.length;r++)if(t&&t.getAttribute){var i=o[r],a=t.getAttribute(i);void 0!==typeof a&&null!==a&&""!==a&&(n[i]=encodeURIComponent(a))}}catch(e){u.logger({msg:e&&e.message})}return n},t.fillFilterData=function(e,t,n){n||(n={});try{var o=e.filter||"",r=o.split("=");if(f(r)&&r[1])n[r[0]]=r[1];else if(r[0]&&t&&t.getAttribute){var i=t.getAttribute(r[0])||"";void 0!==typeof i&&null!==i&&""!==i&&(n[r[0]]=i)}}catch(e){u.logger({msg:e&&e.message})}return n};var _=function(e){return!!/^POST|GET$/i.test(e)};t.isMethod=_;var m=function(e){var t=!!/^\d+$/.test(e);return!!(t&&parseInt(e)>0)};t.isPkgSize=m,t.filterExpConfigRequestCfg=function(e){var t=g.getDefaultRequestCfg()||{};try{var n=e||{};_(n.method)&&(t.method=n.method),m(n.pkgSize)&&(t.pkgSize=parseInt(n.pkgSize))}catch(e){u.logger({msg:e&&e.message})}return t};var y=function(e){var t=e.split("&"),n={};return t.length>0&&l(t,function(e){var t=e.split("=");2===t.length&&(n[t[0]]=p.tryToEncodeURIComponent(t[1]))}),n};t.autoUserFnHandler=function(e,t,n){var o={userdata:{},spm:"",scm:""};try{var r=e(t,n);r&&("string"==typeof r?o.userdata=y(r):"object"==typeof r&&"object"==typeof r.userdata&&(c(r.userdata,function(e,t){o.userdata[e]=p.tryToEncodeURIComponent(t)}),o.spm=r.spm,o.scm=r.scm))}catch(e){console.log(e)}return o};var b=function(e,t){var n="";if(e&&t){var o=[e.getAttribute(t.filter)],r=t.props||[];if(r)for(var i=0;i<r.length;i++)o.push(e.getAttribute(r[i]));n=o.join("_")}return n},w=function(e){var t=e.getAttribute("data-spm-anchor-id");if(t){var n=t.split(".");return{a:n[0],b:n[1],c:n[2],d:n[3],e:n[4]}}};t.getSpmObj=w,t.getElementHash=function(e,t){var n={};"aplus_webvt"!==e.source&&(n=w(t.ele)||g_SPM.getParam(t.ele));var o="",r="x"+t.index;if(n.a&&n.b&&n.c&&n.d){var i=/^i/.test(n.d)?r:n.d;o=n.a+"_"+n.b+"_"+n.c+"_"+i,n.e&&(o+="_"+n.e)}else o=r,goldlog.pvid&&(o+=goldlog.pvid);t.ignore_attr||(o+=e.logkey+"_",o+=e.elementSelector+"_",o+=b(t.ele,e));var a=r+"_"+s.hash(o);return a},t.filterUnloadAttr=function(e){return e&&(e=e.replace(/(href|style|data-spm-anchor-id)=[\'|\"][\w|\W|\.]+[\'|\"]/,""),e=e.replace(/\s\>/g,">"),e=e.replace(new RegExp(g.DATA_APLUS_AE_KEY+"=[\\'|\\\"]\\w+[\\'|\\\"]"),""),e=e.replace(new RegExp(g.DATA_APLUS_AC_KEY+"=[\\'|\\\"]\\w+[\\'|\\\"]"),"")),e};var E=function(e,t){for(var n,o=0,r=e.length;o<r;){var i=e[o]||{};if(i.hash_value===t.hash_value)return e[o]=t,n=!0,e;o++}return n||e.push(t),e},A=function(e,t,n,r){if(n||(n="ADD"),e&&"object"==typeof t){var i=a.getGoldlogVal(r)||{},u=i._acHashMap||{},s=u[e]||[],l=function(){for(var e=0,n=s.length;e<n;){var o=s[e]||{};if(o.hash_value===t.hash_value)return e;e++}return-1},c=l();"ADD"===n&&c===-1?(s.push(t),o(e,t,r)):"CLEAR"===n&&c>-1?s.splice(c,1):"UPDATE"===n&&(s=E(s,t)),u[e]=s,i._acHashMap=u,a.setGoldlogVal(r,i)}};t.updateExpHashMap=function(e,t,n){A(e,t,n,"_aplus_auto_exp")},t.updateClkHashMap=function(e,t,n){A(e,t,n,"_aplus_ac")};var x=function(){return(new Date).getTime()};t.throttle=function(e,t,n){var o,r,i,a,u=0;n||(n={});var s=function(){u=n.leading===!1?0:x(),o=null,a=e.apply(r,i),o||(r=i=null)},l=function(){var l=x();u||n.leading!==!1||(u=l);var c=t-(l-u);return r=this,i=arguments,c<=0||c>t?(o&&(clearTimeout(o),o=null),u=l,a=e.apply(r,i),o||(r=i=null)):o||n.trailing===!1||(o=setTimeout(s,c)),a};return l.cancel=function(){clearTimeout(o),u=0,o=r=i=null},l},t.checkIsInHashMap=function(e){var t=a.getGoldlogVal(e.goldlogKey)||{},n=t.hash_value||{},o=n[e.logkey]||(i.Map?new i.Map:{}),r=o&&o.get?o.get(e.hash_value):o[e.hash_value];if(r>1)return!0;for(var u=t._acHashMap||{},s=u[e.logkey]||[],l=s.length,c=0;c<l;c++)if(s[c].hash_value===e.hash_value)return!0;return!1},t.setRecordSuccess=function(e,t){try{var n=e?e.element:{},o=e.hash_value||"";n&&n.setAttribute&&n.setAttribute(t,o)}catch(e){}}},function(e,t){"use strict";var n=function(e){var t;try{window.goldlog||(window.goldlog={}),t=window.goldlog[e]}catch(e){t=""}finally{return t}};t.getGoldlogVal=n;var o=function(e,t){var n=!1;try{window.goldlog||(window.goldlog={}),e&&(window.goldlog[e]=t,n=!0)}catch(e){n=!1}finally{return n}};t.setGoldlogVal=o,t.getClientInfo=function(){return n("_aplus_client")||{}}},function(e,t){"use strict";var n=1315423911;t.hash=function(e,t){var o,r,i=t||n;for(o=e.length-1;o>=0;o--)r=e.charCodeAt(o),i^=(i<<5)+r+(i>>2);var a=(2147483647&i).toString(16);return a}},function(e,t){"use strict";e.exports=function(e,t){var n,o=e.length;for(n=0;n<o;n++)t(e[n],n)}},function(e,t){"use strict";e.exports=function(e,t){if(Object&&Object.keys)for(var n=Object.keys(e),o=n.length,r=0;r<o;r++){var i=n[r];t(i,e[i])}else for(var a in e)t(a,e[a])}},function(e,t){"use strict";t.tryToEncodeURIComponent=function(e){var t=e||"";if(e)try{t=encodeURIComponent(decodeURIComponent(e))}catch(e){}return t}},function(e,t,n){"use strict";function o(e){return goldlog&&goldlog.getMetaInfo?goldlog.getMetaInfo(e):i.getMetaCnt(e)}var r=n(13),i=n(14);t.DATA_APLUS_AE_KEY="data-aplus-ae",t.DATA_APLUS_AC_KEY="data-aplus-clk",t.LOOP_TIME=1e3,t.getDefaultRequestCfg=function(){return{method:"POST",pkgSize:10}};var a=function(e,t){var n=t;try{var r=o(e);r&&(n=parseFloat(r)),n<=0&&(n=t)}catch(e){n=t}finally{return n}},u=a("aplus-auto-exp-visible",.3);t.AUTO_AT_VIEW_RATE=u,t.AUTO_AT_VIEW_RATE_IN_WINDOW=a("aplus-auto-exp-window",0)||u;var s=function(e){var t=e;try{var n=o("aplus-auto-exp-duration"),r=parseInt(n);r+""!="NaN"&&(t=r)}catch(e){}finally{return t}};t.EXP_DURATION=s(300);var l=function(e,t){var n,i=[],a=[];try{n=t||o(e);var u=[];if(n&&"string"==typeof n)try{u=JSON.parse(n)}catch(e){u=JSON.parse(n.replace(/'/g,'"'))}else"object"==typeof n&&n.constructor===Array&&(u=n);if(u&&u.constructor===Array)for(var s=0;s<u.length;s++){var l=u[s]||{},c=l.logkey||"",p=l.tag?l.tag:"",g=l.filter,f=l.cssSelector,h=f||p&&g;if(!c||!h)throw new Error("meta "+e+" config error, "+JSON.stringify(l));g="string"==typeof g?g.split("="):[];var d=p;if(g.length>=2?d+="["+g.shift()+'="'+decodeURIComponent(g.join(""))+'"]':1==g.length&&g[0]&&(d+="["+decodeURIComponent(g[0])+"]"),f&&(d+=f),l.elementSelector=d,r.indexof(a,d)>-1)throw new Error("meta "+e+" config error, tag_filter_cssSelector "+d+" repeated");a.push(d),i.push(l)}}catch(e){}finally{return i}};t.getAutoExpConfig=function(e){return l("aplus-auto-exp",e)||[]},t.getAutoExpUserFn=function(){var e=o("aplus-auto-exp-userfn");if(e){var t=window[e]||e;if("function"==typeof t)return t}return null},t.isThrottleWatchDom=function(){var e=!1;try{e="throttle"===o("aplus-auto-exp-watchdom")}catch(e){}return e},t.getAutoClkConfig=function(e){return l("aplus-auto-clk",e)||[]},t.getAutoClkUserFn=function(){var e=o("aplus-auto-clk-userfn");if(e){var t=window[e]||e;if("function"==typeof t)return t}return null}},function(e,t){"use strict";t.indexof=function(e,t){var n=-1;try{n=e.indexOf(t)}catch(r){for(var o=0;o<e.length;o++)e[o]===t&&(n=o)}finally{return n}}},function(e,t,n){"use strict";function o(e){return a=a||document.getElementsByTagName("head")[0],u&&!e?u:a?u=a.getElementsByTagName("meta"):[]}function r(e,t){var n,r,i,a=o(),u=a.length;for(n=0;n<u;n++)r=a[n],s.tryToGetAttribute(r,"name")===e&&(i=s.tryToGetAttribute(r,t||"content"));return i||""}function i(e){var t={isonepage:"-1",urlpagename:""},n=e.qGet();if(n&&n.hasOwnProperty("isonepage_data"))t.isonepage=n.isonepage_data.isonepage,t.urlpagename=n.isonepage_data.urlpagename;else{var o=r("isonepage")||"-1",i=o.split("|");t.isonepage=i[0],t.urlpagename=i[1]?i[1]:""}return t}var a,u,s=n(15);t.getMetaTags=o,t.getMetaCnt=r,t.getOnePageInfo=i},function(e,t){"use strict";t.tryToGetAttribute=function(e,t){return e&&e.getAttribute?e.getAttribute(t)||"":""};var n=function(e,t,n){if(e&&e.setAttribute)try{e.setAttribute(t,n)}catch(e){}};t.tryToSetAttribute=n,t.tryToRemoveAttribute=function(e,t){if(e&&e.removeAttribute)try{e.removeAttribute(t)}catch(o){n(e,t,"")}}},function(e,t,n){"use strict";function o(e,t){var n=goldlog._$||{},o=n.meta_info||{},r=o.aplus_ctap||{},i=o["aplus-touch"];if(r&&"function"==typeof r.on)r.on(e,t);else{var s="ontouchend"in document.createElement("div");s&&"tap"===i?a.on(e,t):u(e,s?"touchstart":"mousedown",t)}}function r(e,t){var n=goldlog._$||{},o=n.meta_info||{},r=o.aplus_ctap||{},i=o["aplus-touch"];if(r&&"function"==typeof r.un)r.un(e,t);else{var u="ontouchend"in document.createElement("div");u&&"tap"===i?a.un(e,t):s(e,u?"touchstart":"mousedown",t)}}var i=!!document.attachEvent,a=n(17),u=function(e,t,n){return"tap"===t?void o(e,n):void(i?e.attachEvent(t,n):e.addEventListener(t,n))};t.on=u;var s=function(e,t,n){return"tap"===t?void r(e,n):void(i?e.detachEvent(t,n):e.removeEventListener(t,n))};t.un=s},function(e,t){"use strict";function n(e,t){return e+Math.floor(Math.random()*(t-e+1))}function o(e,t,n){var o=c.createEvent("HTMLEvents");if(o.initEvent(t,!0,!0),"object"==typeof n)for(var r in n)o[r]=n[r];e.dispatchEvent(o)}function r(e){0===Object.keys(g).length&&(p.addEventListener(d,i,!1),p.addEventListener(h,a,!1),p.addEventListener(_,a,!1));for(var t=0;t<e.changedTouches.length;t++){var n=e.changedTouches[t],o={};for(var r in n)o[r]=n[r];var u={startTouch:o,startTime:Date.now(),status:v,element:e.srcElement||e.target};g[n.identifier]=u}}function i(e){for(var t=0;t<e.changedTouches.length;t++){var n=e.changedTouches[t],o=g[n.identifier];if(!o)return;var r=n.clientX-o.startTouch.clientX,i=n.clientY-o.startTouch.clientY,a=Math.sqrt(Math.pow(r,2)+Math.pow(i,2));(o.status===v||"pressing"===o.status)&&a>10&&(o.status="panning")}}function a(e){for(var t=0;t<e.changedTouches.length;t++){var n=e.changedTouches[t],r=n.identifier,u=g[r];u&&(u.status===v&&e.type===h&&(u.timestamp=Date.now(),o(u.element,m,{touch:n,touchEvent:e})),delete g[r])}0===Object.keys(g).length&&(p.removeEventListener(d,i,!1),p.removeEventListener(h,a,!1),p.removeEventListener(_,a,!1))}function u(e){e.__fixTouchEvent||(e.addEventListener(f,function(){},!1),e.__fixTouchEvent=!0)}function s(){l||(p.addEventListener(f,r,!1),l=!0)}var l=!1,c=window.document,p=c.documentElement,g={},f="touchstart",h="touchend",d="touchmove",v="tapping",_="touchcancel",m="aplus_tap"+n(1,1e5);e.exports={on:function(e,t){s(),e&&e.addEventListener&&t&&(u(e),e.addEventListener(m,t._aplus_tap_callback=function(e){t(e,e.target)},!1))},un:function(e,t){e&&e.removeEventListener&&t&&t._aplus_tap_callback&&e.removeEventListener(m,t._aplus_tap_callback,!1)}}},function(e,t,n){"use strict";var o=n(3),r=document,i=function(e,t){return t.x>=e.pLeftTop[0]&&t.x<=e.pRightBottom[0]&&t.y>=e.pLeftTop[1]&&t.y<=e.pRightBottom[1]},a=function(e,t){var n=0,r={x:t.x,y:t.y},a=i(e,r),u={x:t.x+t.width,y:t.y},s=i(e,u),l={x:t.x,y:t.y+t.height},c=i(e,l),p={x:t.x+t.width,y:t.y+t.height},g=i(e,p),f=function(){var e=0;return a&&g&&(e=t.size/t.size),e},h=function(){var n,o=0,r=0;return a&&s&&!c&&!g?(o=t.width,r=e.pLeftBottom[1]-t.y,n="top"):!a&&s&&!c&&g?(o=e.pLeftTop[0]-t.x,r=t.y,n="right"):!a&&!s&&c&&g?(o=t.width,r=e.pLeftTop[1]-t.y,n="bottom"):a&&!s&&c&&!g&&(o=e.pRightTop[0]-t.x,r=t.y,n="left"),o=o>e.clientWidth?e.clientWidth:o,r=r>e.clientHeight?e.clientHeight:r,{rate:t.size>0?Math.abs(o*r)/t.size:0,exp_pos:n}},d=function(){var n=0,o=0,i=e.pLeftTop[0],a=e.pLeftTop[1],u=e.pLeftBottom[0],s=e.pLeftBottom[1],c=e.pRightBottom[0],g=r.x<=i&&r.y<=a,f=p.x>=u&&p.y>=s;g&&f&&(o=e.clientHeight,n=p.x<c?p.x-u:e.clientWidth);var h=r.x>i&&r.y<=a;return h&&f&&(o=e.clientHeight,n=p.x-l.x,p.x>c&&(n=c-l.x)),t.size>0?Math.abs(n*o)/t.size:0},v=function(){var n,o=0,r=0;return!a||s||c||g?a||!s||c||g?a||s||!c||g?a||s||c||!g||(o=t.x+t.width,r=t.y+t.height,n="rightBottom"):(o=e.pRightTop[0]-t.x,r=e.clientHeight-(l.y-e.pRightBottom[1]),n="leftBottom"):(o=u.x,r=e.clientHeight-u.y,n="rightTop"):(o=e.clientWidth-t.x,r=e.clientHeight-t.y,n="leftTop"),{rate:t.size>0?Math.abs(o*r)/t.size:0,exp_pos:n}};if(n=f(),n>0)return n;var _=h();if(n=_.rate,n>0)return o.isDebugAplus()&&o.logger({msg:_}),n;var m=v();return n=m.rate,n>0?(o.isDebugAplus()&&o.logger({msg:m}),n):(n=d(),n>0?(o.isDebugAplus()&&o.logger({msg:"cover rate is "+n}),n):n>1?1:n)};t.wrapViewabilityRate=function(e,t,n){var o=0;if(e)for(var r=0;r<e.length;r++)if(o=a(e[r],t),o>=n)return o;return o},t.getViewabilityRateInWindow=function(e,t,n){var o=0;if(e)for(var r=0;r<e.length;r++)if(o=t/e[r].size,o>=n)return o;return o};var u=function(e){return"number"==typeof e&&NaN!==e},s=function(e){var t={};return e&&("function"==typeof e.getBoundingClientRect&&(t=e.getBoundingClientRect()||{}),u(t.x)||u(t.left)&&(t.x=t.left),u(t.y)||u(t.top)&&(t.y=t.top),u(t.width)||(t.width=e.offsetWidth),u(t.height)||(t.height=e.offsetHeight)),t};t.getElementPosition=s,t.getWinPositions=function(e){var t=[];if(e&&"function"==typeof document.querySelector){var n=document.querySelector(e);if(n){var o=s(n)||{};u(o.x)&&u(o.y)&&u(o.width)&&u(o.height)&&t.push({pLeftTop:[o.x,o.y],pRightTop:[o.x+o.width,o.y],pLeftBottom:[o.x,o.y+o.height],pRightBottom:[o.x+o.width,o.y+o.height],size:o.width*o.height})}}var i=r.documentElement,a=r.body,l=i.clientWidth||a.offsetWidth||0,c=i.clientHeight||a.offsetHeight||0;return t.push({pLeftTop:[0,0],pRightTop:[l,0],pLeftBottom:[0,c],pRightBottom:[l,c],size:l*c,clientHeight:c,clientWidth:l}),t},t.checkIsRecord=function(e,t,n){var o;try{if(e&&e.getAttribute){var r=e.getAttribute(n)||"";o=t?r===t:!!r}}catch(e){}return o}},function(e,t,n){"use strict";function o(e,t){var n=f.getWinPositions(),o=0,r=l.getGoldlogVal("_aplus_auto_exp")||{},i=r._acHashMap||{};for(var a in i)for(var u=i[a]||[],c=0;c<u.length;c++){var g=u[c]||{};if(g.eventType="IObserver",0===g.status&&g.expConfig&&g.element===t.target){var _=t.boundingClientRect||{};if(_.width||_.height||(_=t.target.getBoundingClientRect()||{}),_.width&&_.height){g=s.assign(g,_),g.x=_.x||_.left,g.y=_.y||_.top,g.width=_.width,g.height=_.height,g.size=_.width*_.height;var m=f.checkIsRecord(g.element,g.hash_value,"_aplus_auto_exp"),y=g.width*g.height*t.intersectionRatio,b=f.getViewabilityRateInWindow(n,y,v);if(!m){var w=t.intersectionRatio>=d;if(w||b>=v){g.exposureTime=e,g.status=1;var E=p.getAutoExpUserFn();E&&(g.userParams=h.autoUserFnHandler(E,g.element,g.elementSelector)),g.viewabilityRate=w?t.intersectionRatio:b,g.viewability=w?"intersection":"fillwindow",p.EXP_DURATION||(g.status=2),h.updateExpHashMap(a,g,"UPDATE"),++o}else b&&h.updateExpHashMap(a,Object.assign(u[c],{lastEventType:g.eventType}),"UPDATE")}}}}return o}function r(e,t){var n="APLUS_AE_EXPOSURE_CHANGE",r=e&&e.type?e.type:"IObserver",i=(new Date).getTime(),a=0;a="IObserver"!==t.from?g.filterStartExposureSize(i,r,!0):o(i,e),a>0&&(p.EXP_DURATION?setTimeout(function(){a=g.filterEndExposureSize(i,r),a>0&&goldlog.aplus_pubsub.publish(n,{size:a,eventType:r})},p.EXP_DURATION):goldlog.aplus_pubsub.publish(n,{size:a,eventType:r}))}function i(e){var t={root:null,rootMargin:"0px",threshold:d};return new m(function(e){c(e,function(e){e.intersectionRatio>0&&r(e,{from:"IObserver"})})},s.assign(t,e))}function a(e){if(m){y.io_base||(y.io_base=i());var t=l.getGoldlogVal("_aplus_auto_exp")||{},n=t._acHashMap||{};for(var o in n)for(var r=n[o]||[],a=0;a<r.length;a++){var u=r[a]||{};if(!u.inObserver){var s,c="io_v_"+encodeURIComponent(u.positionSelector);u.positionSelector&&!y[c]&&(s=i({root:document.querySelector(u.positionSelector),expConfig:e}),y[c]=s),s?s.observe(u.element):y.io_base.observe(u.element),u.inObserver=!0}}}return!0}var u=n(16),s=n(20),l=n(7),c=n(9),p=n(12),g=n(21),f=n(18),h=n(6),d=p.AUTO_AT_VIEW_RATE,v=p.AUTO_AT_VIEW_RATE_IN_WINDOW,_=window,m=_.IntersectionObserver,y={};goldlog._aplus_auto_exp.iobserverMap=y;var b=h.throttle(function(e){r(e,{from:e.type})},100);t.watch_exposure_change=function(e){goldlog.aplus_pubsub.subscribe("APLUS_AE_DOM_CHANGE",function(){a(e)}),u.on(window,"touchmove",b),u.on(window,"scroll",b),u.on(window,"resize",b),a(e)},t.clear=function(e,t){if(t&&"appendMetaInfo"!==t.from){u.un(window,"touchmove",b),u.un(window,"scroll",b),u.un(window,"resize",b);for(var n in y){var o=y[n];o.disconnect()}}}},function(e,t,n){"use strict";function o(e,t){return"function"!=typeof Object.assign?function(e){if(null===e)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(e),n=1;n<arguments.length;n++){var o=arguments[n];if(null!==o)for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t}(e,t):Object.assign({},e,t)}function r(e){return"function"==typeof e}function i(e){return"string"==typeof e}function a(e){return"undefined"==typeof e}function u(e,t){return e.indexOf(t)>-1}var s=window;t.assign=o,t.makeCacheNum=function(){return Math.floor(268435456*Math.random()).toString(16)},t.each=n(9),t.isStartWith=function(e,t){return 0===e.indexOf(t)},t.isEndWith=function(e,t){var n=e.length,o=t.length;return n>=o&&e.indexOf(t)==n-o},t.any=function(e,t){var n,o=e.length;for(n=0;n<o;n++)if(t(e[n]))return!0;return!1},t.isFunction=r,t.isArray=function(e){return Array.isArray?Array.isArray(e):/Array/.test(Object.prototype.toString.call(e))},t.isString=i,t.isNumber=function(e){return"number"==typeof e},t.isUnDefined=a,t.isContain=u;var l=function(e){var t,n=e.constructor===Array?[]:{};if("object"==typeof e){if(s.JSON&&s.JSON.parse)t=JSON.stringify(e),n=JSON.parse(t);else for(var o in e)n[o]="object"==typeof e[o]?l(e[o]):e[o];return n}};t.cloneObj=l,t.cloneDeep=l},function(e,t,n){"use strict";var o=n(18),r=n(7),i=n(12),a=n(6),u=i.AUTO_AT_VIEW_RATE,s=i.AUTO_AT_VIEW_RATE_IN_WINDOW,l=function(e){for(var t;e&&"HTML"!==e.tagName;){t=e.style.display;{if("none"===t)break;e=e.parentNode}}return"none"===t};t.filterStartExposureSize=function(e,t,n){var c=0,p=o.getWinPositions(),g=r.getGoldlogVal("_aplus_auto_exp")||{},f=g._acHashMap||{};for(var h in f)for(var d=f[h]||[],v=0;v<d.length;v++){var _=d[v]||{},m=!0;if(n&&(m="IObserver"===_.lastEventType),0===_.status&&_.expConfig&&m&&!l(_.element)){var y=o.getElementPosition(_.element);if(y.width&&y.height){_.x=y.x,_.y=y.y,_.eventType=t,_.width=y.width,_.height=y.height,_.size=y.width*y.height;var b;_.expConfig.positionSelector&&(b=o.getWinPositions(_.expConfig.positionSelector));var w=o.wrapViewabilityRate(b||p,_,u),E=w>=u,A=w;b&&(A=o.wrapViewabilityRate(p,_,u));var x=_.width*_.height*A,T=o.getViewabilityRateInWindow(p,x,s),S=o.checkIsRecord(_.element,_.hash_value,"_aplus_auto_exp");if((E||T>=s)&&!S){_.exposureTime=e,_.status=1;var O=i.getAutoExpUserFn();O&&(_.userParams=a.autoUserFnHandler(O,_.element,_.elementSelector)),i.EXP_DURATION||(_.viewabilityRate=E?w:T,_.viewability=E?"intersection":"fillwindow",_.status=2),a.updateExpHashMap(h,_,"UPDATE"),++c}}}}return c},t.filterEndExposureSize=function(e,t){var n=0,i=o.getWinPositions(),l=r.getGoldlogVal("_aplus_auto_exp")||{},c=l._acHashMap||{};for(var p in c)for(var g=c[p]||[],f=0;f<g.length;f++){var h=g[f]||{};if(1===h.status&&h.exposureTime===e&&h.expConfig){h.eventType=t;var d;h.expConfig.positionSelector&&(d=o.getWinPositions(h.expConfig.positionSelector));var v=o.checkIsRecord(h.element,h.hash_value,"_aplus_auto_exp"),_=o.wrapViewabilityRate(d||i,h,u),m=_>=u,y=_;d&&(y=o.wrapViewabilityRate(i,h,u));var b=h.width*h.height*y,w=o.getViewabilityRateInWindow(i,b,s);(m||w>=s)&&!v?(h.viewabilityRate=m?_:w,h.viewability=m?"intersection":"fillwindow",h.status=2,a.updateExpHashMap(p,h,"UPDATE"),++n):(h.status=0,h.exposureTime="",a.updateExpHashMap(p,h,"UPDATE"))}}return n}},function(e,t,n){"use strict";var o=n(16),r=n(21),i=n(6),a=n(12),u=function(e){var t="APLUS_AE_EXPOSURE_CHANGE",n=e&&e.type?e.type:"init",o=(new Date).getTime(),i=r.filterStartExposureSize(o,n,!1);i>0&&(a.EXP_DURATION?setTimeout(function(){i=r.filterEndExposureSize(o,n),i>0&&goldlog.aplus_pubsub.publish(t,{size:i,eventType:n})},a.EXP_DURATION):goldlog.aplus_pubsub.publish(t,{size:i,eventType:n}))},s=i.throttle(function(e){u(e)},100),l={},c=function(e,t){if(e&&e.forEach&&Object.keys&&document.querySelector){e.forEach(function(e){e.positionSelector&&document.querySelector(e.positionSelector)&&(l[e.positionSelector]=!0)});var n=Object.keys(l);n.forEach(function(e){o[t]&&o[t](document.querySelector(e),"scroll",function(e){s(e)})})}};t.watch_exposure_change=function(e){goldlog.aplus_pubsub.subscribe("APLUS_AE_DOM_CHANGE",u),o.on(window,"touchmove",s),o.on(window,"scroll",s),o.on(window,"resize",u),c(e,"on")},t.clear=function(e){o.un(window,"touchmove",s),o.un(window,"scroll",s),o.un(window,"resize",u),c(e,"un")}},function(e,t,n){"use strict";function o(e,t,n){var o="0";if(n){if("spmc"===e){var r=n.split(".");o=r[2]?r[2]:r[3],/^(\i|\d)[0-9]+$/.test(o)&&(o="0"),n=[r[0],r[1],o].join(".")}}else{n="";var i=window.g_SPM||{};if("function"==typeof i.getParam){var a=i.getParam(t);"spmc"===e?(o=t.getAttribute("data-spm")||"0",n=[a.a,a.b,o].join(".")):n=[a.a,a.b,a.c,a.d].join(".")}}return n}var r=n(2),i=n(20),a=n(7),u=n(3),s=n(10),l=n(6),c=n(12),p=function(){var e=u.isDebugAplus(),t={},n=c.getDefaultRequestCfg(),r=a.getGoldlogVal("_aplus_auto_exp")||{},p=r._acHashMap||{};return s(p,function(a,s){for(var c=s||[],p=0,g=c.length;p<g;p++){var f=c[p]||{};if(2===f.status){f.status=3,l.updateExpHashMap(a,f,"UPDATE"),r.exp_times++;var h,d=f.expConfig||{},v=goldlog.spm_ab?goldlog.spm_ab.join("."):"0.0.0.0",_=o(d.eltype,f.element)||v,m="";try{var y=new Number(f.viewabilityRate);h=y.toFixed(2)}catch(e){h=f.viewabilityRate}var b={_w:f.width,_h:f.height,_x:f.x,_y:f.y,_rate:h,_viewability:f.viewability};"object"==typeof f.userParams&&("object"==typeof f.userParams.userdata&&(b=i.assign(b,f.userParams.userdata)),f.userParams.spm&&(_=o(d.eltype,"",f.userParams.spm)),f.userParams.scm&&(m=f.userParams.scm)),(l.isMethod(d.method)||l.isPkgSize(d.pkgSize))&&(n=l.filterExpConfigRequestCfg(d));var w=l.fillPropsData(d,f.element,b);w=l.fillFilterData(d,f.element,b);var E={exargs:w,scm:m,spm:_,aplusContentId:""};t[a]||(t[a]=[]),t[a].push(E),e&&u.logger({msg:"logkey = "+a+", params = "+decodeURIComponent(JSON.stringify(E))})}}}),{logkeyContainer:t,request_cfg:n}},g=function(e){for(var t=[],n=0,o=e.length;n<o;n++){var r=e[n]||{},a={};s(r,function(e,t){"element"!==e&&(a[e]=t)});var u=i.cloneObj(a);u.element=r.element,t.push(u)}return t},f=function(e){var t=a.getGoldlogVal("_aplus_auto_exp")||{},n=t._acHashMap||{},o=[];s(n,function(t,n){for(var r=g(n)||[],i=0,a=r.length;i<a;i++){var s=r[i]||{},p=n[i]||{};if(3===s.status)try{l.setRecordSuccess(p,c.DATA_APLUS_AE_KEY),goldlog.aplus_pubsub.publish("APLUS_ELEMENT_EXPOSURE",{
logkey:t,v_origin:p,options:e}),o.push(p)}catch(e){u.logger({msg:e&&e.message})}}for(;o.length>0;)l.updateExpHashMap(t,o.pop(),"CLEAR")})},h=function(e,t,n){var o=e.logkeyContainer||[],i=e.request_cfg||{};r.wrap(function(){s(o,function(e,o){if(o&&o.length>0){for(var r=0;r<o.length;){var a=[],u=JSON.stringify(o.slice(r,r+i.pkgSize));a.push("expdata="+u),a.push("_is_auto_exp=1"),a.push("_eventType="+t.eventType),a.push("_method="+i.method),a.push("_pkgSize="+i.pkgSize),goldlog.record(e,"EXP",a.join("&"),i.method||"POST"),r+=i.pkgSize}n(t)}})},"recordAplusAt")},d=function(e){if(e.size>0){var t=p()||{};h(t,e,f)}};t.watch_data_change=function(){goldlog.aplus_pubsub.subscribe("APLUS_AE_EXPOSURE_CHANGE",d)},t.clear=function(){goldlog.aplus_pubsub.unsubscribe("APLUS_AE_EXPOSURE_CHANGE",d)}}]);