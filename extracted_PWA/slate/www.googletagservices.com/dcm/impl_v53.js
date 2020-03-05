(function(){var l=this||self,m=function(a){return"string"==typeof a},aa=/^[\w+/_-]+[=]{0,2}$/,w=null,ba=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&
"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b};var ca=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(m(a))return m(b)&&1==b.length?a.indexOf(b,0):-1;for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},da=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=m(a)?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},y=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=
a.length,d=Array(c),e=m(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));return d},la=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;da(a,function(e,f){d=b.call(void 0,d,e,f,a)});return d},ma=function(a){for(var b=[],c=0;c<a;c++)b[c]="";return b};var na=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};var qa=function(a,b){this.b=a===oa&&b||"";this.a=pa},pa={},oa={};var z;a:{var ra=l.navigator;if(ra){var sa=ra.userAgent;if(sa){z=sa;break a}}z=""};var E=function(a){E[" "](a);return a};E[" "]=function(){};var ta=-1!=z.toLowerCase().indexOf("webkit")&&-1==z.indexOf("Edge");var F=function(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{E(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}},ua=function(a,b){b=b||l;for(var c=0;b&&40>c++&&!a(b);)a:{try{var d=b.parent;if(d&&d!=b){b=d;break a}}catch(e){}b=null}},va=function(a,b){var c=a.createElement("script");b=new qa(oa,b,null);c.src=b instanceof qa&&b.constructor===qa&&b.a===pa?b.b:"type_error:TrustedResourceUrl";if(null===w)a:{b=l.document;if((b=b.querySelector&&b.querySelector("script[nonce]"))&&(b=b.nonce||
b.getAttribute("nonce"))&&aa.test(b)){w=b;break a}w=""}(b=w)&&c.setAttribute("nonce",b);(a=a.getElementsByTagName("script")[0])&&a.parentNode&&a.parentNode.insertBefore(c,a)},Ra=function(){if(!l.crypto)return Math.random();try{var a=new Uint32Array(1);l.crypto.getRandomValues(a);return a[0]/65536/65536}catch(b){return Math.random()}},L=function(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)},Sa=na(function(){return-1!=z.indexOf("Google Web Preview")||1E-4>
Math.random()}),Ta=na(function(){return-1!=z.indexOf("MSIE")}),Ua=/https?:\/\/[^\/]+/,Va=function(a){return(a=Ua.exec(a))&&a[0]||""},Wa=/^([0-9.]+)px$/,M=function(a){return(a=Wa.exec(a))?+a[1]:null},Xa=function(a){var b=l;a=void 0===a?!0:a;try{for(var c=null;c!=b;c=b,b=b.parent)switch(b.location.protocol){case "https:":return!0;case "file:":return a;case "http:":return!1}}catch(d){}return!0};var T=function(){this.a=function(){return!1}};T.a=void 0;T.b=function(){return T.a?T.a:T.a=new T};var Ya=function(a,b){var c=a.ampInaboxIframes=a.ampInaboxIframes||[],d=function(){};b&&(c.push(b),d=function(){if(a.AMP&&a.AMP.inaboxUnregisterIframe)a.AMP.inaboxUnregisterIframe(b);else{var f=ca(c,b);0<=f&&Array.prototype.splice.call(c,f,1)}});if(!a.ampInaboxInitialized&&(a.ampInaboxPendingMessages=a.ampInaboxPendingMessages||[],!c.google_amp_listener_added)){c.google_amp_listener_added=!0;var e=function(f){if(a.ampInaboxInitialized)return a.removeEventListener&&a.removeEventListener("message",e,
!1),d;var g,h=T.b().a()&&"amp-ini-load"===f.data;a.ampInaboxPendingMessages&&!h&&(g=/^amp-(\d{15,20})?/.exec(f.data))&&(a.ampInaboxPendingMessages.push(f),f=g[1],a.ampInaboxInitialized||f&&!/^\d{15,20}$/.test(f)||a.document.querySelector('script[src$="amp4ads-host-v0.js"]')||va(a.document,"https://cdn.ampproject.org/"+(f?"rtv/"+f+"/":"")+"amp4ads-host-v0.js"))};a.addEventListener&&a.addEventListener("message",e,!1)}};var Za=function(a,b){var c=void 0===c?{}:c;this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta=c};var $a=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/,db=function(a){a=a||ab();for(var b=new bb(l.location.href,!1),c=null,d=a.length-1,e=d;0<=e;--e){var f=a[e];!c&&$a.test(f.url)&&(c=f);if(f.url&&!f.A){b=f;break}}e=null;f=a.length&&a[d].url;0!=b.depth&&f&&(e=a[d]);return new cb(b,e,c)},ab=function(){var a=l,b=[],c=null;do{var d=a;if(F(d)){var e=d.location.href;c=d.document&&d.document.referrer||null}else e=c,c=null;b.push(new bb(e||""));try{a=d.parent}catch(f){a=null}}while(a&&d!=a);
d=0;for(a=b.length-1;d<=a;++d)b[d].depth=a-d;d=l;if(d.location&&d.location.ancestorOrigins&&d.location.ancestorOrigins.length==b.length-1)for(a=1;a<b.length;++a)e=b[a],e.url||(e.url=d.location.ancestorOrigins[a-1]||"",e.A=!0);return b},cb=function(a,b,c){this.b=a;this.a=b;this.c=c},bb=function(a,b){this.url=a;this.A=!!b;this.depth=null};var eb=function(a){l.google_image_requests||(l.google_image_requests=[]);var b=l.document.createElement("img");b.src=a;l.google_image_requests.push(b)};var U=function(a,b,c){this.j=c||4E3;this.b=a||"&";this.i=b||",$";this.g=!1;this.c={};this.l=0;this.a=[]},fb=function(a,b){var c={};c[a]=b;return[c]},hb=function(a,b,c,d,e){var f=[];L(a,function(g,h){(g=gb(g,b,c,d,e))&&f.push(h+"="+g)});return f.join(b)},gb=function(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],g=0;g<a.length;g++)f.push(gb(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=
e||0,2>e?encodeURIComponent(hb(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))},V=function(a,b,c){a.a.push(b);a.c[b]=c},W=function(a,b,c,d){a.a.push(b);a.c[b]=fb(c,d)},X=function(a,b,c,d,e){b=b+"//"+c+d;var f=ib(a)-d.length-e.length;if(0>f)return"";a.a.sort(function(u,t){return u-t});d=null;c="";for(var g=0;g<a.a.length;g++)for(var h=a.a[g],p=a.c[h],n=0;n<p.length;n++){if(!f){d=null==d?h:d;break}var r=hb(p[n],a.b,a.i);if(r){r=c+r;if(f>=r.length){f-=r.length;b+=r;c=a.b;break}a.g&&(c=f,r[c-
1]==a.b&&--c,b+=r.substr(0,c),c=a.b,f=0);d=null==d?h:d}}a="";null!=d&&(a=c+"trn="+d);return b+a+e},ib=function(a){var b=1,c;for(c in a.c)b=c.length>b?c.length:b;return a.j-3-b-a.b.length-1};var jb=function(a,b,c,d){if(Math.random()<(d||.01))try{if(c instanceof U)var e=c;else e=new U,L(c,function(g,h){var p=e,n=p.l++;V(p,n,fb(h,g))});var f=X(e,a.a,"pagead2.googlesyndication.com","/pagead/gen_204?id="+b+"&","");f&&eb(f)}catch(g){}};var kb=!1,lb=null,mb=function(){this.b={};this.a={};for(var a=[],b=0,c=a.length;b<c;++b)this.a[a[b]]=""},nb=function(a,b,c){""!=b&&(c?a.a.hasOwnProperty(c)&&(a.a[c]=b):a.b[b]=!0)},ob=function(a){var b=[];L(a.b,function(c,d){b.push(d)});L(a.a,function(c){""!=c&&b.push(c)});return b};var qb=function(){this.c=pb;this.a=!0;this.g=this.b},tb=function(a,b){var c=rb;try{var d=a()}catch(e){a=c.a;try{a=c.g(529,new Za(e,{message:sb(e)}),void 0,b)}catch(f){c.b(217,f)}if(!a)throw e;}return d};
qb.prototype.b=function(a,b,c,d,e){e=e||"dcmads-err";try{var f=new U;f.g=!0;W(f,1,"context",a);b.error&&b.meta&&b.id||(b=new Za(b,{message:sb(b)}));b.msg&&W(f,2,"msg",b.msg.substring(0,512));var g=b.meta||{};if(d)try{d(g)}catch(p){}V(f,3,[g]);var h=db();h.a&&W(f,4,"top",h.a.url||"");W(f,5,"url",h.b.url||"");jb(this.c,e,f,c)}catch(p){try{jb(this.c,e,{context:"ecmserr",rctx:a,msg:sb(p),url:h&&h.b.url},c)}catch(n){}}return this.a};
var sb=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;try{-1==a.indexOf(b)&&(a=b+"\n"+a);for(var c;a!=c;)c=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(d){}}return b};var ub=function(a,b,c){this.a=[];this.a[0]=c;this.a[1]=a;this.a[2]=b;this.b=this.a[3]=!1};var kc=function(){var a=(Xa()?"https:":"http:")+vb;l.google_osd_loaded||(va(l.document,a),l.google_osd_loaded=!0)},oc=function(a,b){a&&a.addEventListener&&a.addEventListener("load",b,!1)},pc=function(){var a=l.google_osd_amcb;return"function"==ba(a)?a:null};var Y=function(){this.b=0;this.a=[]},qc=function(){var a=l.goog_osd_adp;return a&&"function"==ba(a.getOseId)?a:l.goog_osd_adp=new Y};Y.prototype.numBlocks=function(){return this.a.length};Y.prototype.getOseId=function(){return this.b};Y.prototype.getNewBlocks=function(a,b){rc(this,a);b&&(l.google_osd_amcb=a)};Y.prototype.setup=function(a){this.b=a};Y.prototype.registerAdBlock=function(a,b,c){var d=new ub(a,b,c);pc()?d.a[3]=!0:oc(c,function(){d.a[3]=!0});this.a.push(d);rc(this);kc()};
var rc=function(a,b){if(b=b||pc())for(var c=0;c<a.a.length;++c){var d=a.a[c];d.b||(b.apply(void 0,d.a),d.b=!0)}},vb=("http://www.googletagservices.com/activeview/js/current/osd.js?cb="+encodeURIComponent("/r20100101")).slice(5);window.Goog_Common_getAdAdapterInstance=qc;E(Y.prototype.getNewBlocks);E(Y.prototype.getOseId);E(Y.prototype.numBlocks);E(Y.prototype.registerAdBlock);E(Y.prototype.setup);var sc=function(a,b){this.a=a;this.depth=b},uc=function(a){a=a||ab();var b=Math.max(a.length-1,0),c=db(a);a=c.b;var d=c.a,e=c.c,f=[];c=function(h,p){return null==h?p:h};e&&f.push(new sc([e.url,e.A?2:0],c(e.depth,1)));d&&d!=e&&f.push(new sc([d.url,2],0));a.url&&a!=e&&f.push(new sc([a.url,0],c(a.depth,b)));var g=y(f,function(h,p){return f.slice(0,f.length-p)});!a.url||(e||d)&&a!=e||(d=Va(a.url))&&g.push([new sc([d,1],c(a.depth,b))]);g.push([]);return y(g,function(h){return tc(b,h)})},vc=function(a,
b){b=b||uc();return y(b,function(c){var d={};d[a]=c;return d})};function tc(a,b){var c=la(b,function(e,f){return Math.max(e,f.depth)},-1),d=ma(c+2);d[0]=a;da(b,function(e){return d[e.depth+1]=e.a});return d}var wc=function(a){a=a||uc();return y(a,function(b){return gb(b)})};var xc;if(xc=ta)xc="srcdoc"in document.createElement("IFRAME");var yc=xc;var zc=Xa(!1)?"https:":"http:",pb,rb;pb=new function(){this.a=zc};rb=new qb;var Ac=function(a){rb.a=!1;throw Error(a);};var Bc={1:{w:"40004000",o:"40004001"}},Cc={w:"40004006",o:"40004007"};Bc[4]=Cc;var Dc={w:"40004008",o:"40004009"};Bc[5]=Dc;Bc[6]={w:"50005001",o:"50005002"};var Ec={na:1,ma:4,oa:5},Fc={1:1,4:4,5:4,6:5};var Gc=function(a,b,c){if(a=a.dcmads&&a.dcmads.expts&&a.dcmads.expts[c]){var d=Bc[c],e=[],f=0;for(h in d)e[f++]=d[h];if((c=Fc[c])?b.a.hasOwnProperty(c)&&""==b.a[c]:1){var g;if(null===lb){lb="";try{var h="";try{h=l.top.location.hash}catch(p){h=l.location.hash}h&&(lb=(g=h.match(/\bdeid=([\d,]+)/))?g[1]:"")}catch(p){}}g=(g=lb)?(g=g.match(new RegExp("\\b("+e.join("|")+")\\b")))?g[0]:null:null;if(g)a=g;else if(kb)a=null;else b:{if(!Ta()&&!Sa()&&(g=Math.random(),g<a)){g=Ra();a=e[Math.floor(g*e.length)];
break b}a=null}a&&nb(b,a,c)}}};function Hc(a,b){if(b&&b.split){b=b.split(",");for(var c=0;c<b.length;++c){var d=b[c].split("|");1<d.length?nb(a,d[1],d[0]):nb(a,d[0])}}};var Ic=function(a){var b=this,c=3===a?"":"dc_";this.c={};var d=function(e){b.c[e]=!0;return e};this.i=d(c+"adk");this.j=d("amp");this.appId=d(c+"msid");this.l=d(2===a?"chd":"tfcd");this.b=d("click");this.m=d("cesc");this.s=d("cmpl");this.u=d("crlt");this.B=d("xdt");this.C=d("mtfIFPath");this.a=d("dcopt");this.D=d("deal_id");this.devicePixelRatio=d("u_sd");this.ka=d("mtfIFrameRequest");this.la=d("dv3_deal");this.H=d(c+"eid");this.I=d(c+"xid");this.height=d("h");this.J=d("pc");this.K=d("dcapp");this.L=
d("kw");this.M=d("mtfLeft");this.N=d(1===a?c+"lat":"lat");this.O=d("msdk");this.P=d("mtfBottomFloat");this.R=d("mtfLeftFloat");this.S=d("mtfRightFloat");this.T=d("mtfTopFloat");this.U=d(c+"omid_p");this.V=d("ord");this.W=d("osdl");this.X=d("osda");this.Y=d("output");this.Z=d("pdid");this.$=d("pdidtype");this.aa=d("prcl");this.ba=d(c+"ref");this.ca=d(c+"rxp");this.da=d(c+"rdid");this.ea=d("sttr");this.G=d(c+"sdk_apis");d("sz");this.fa=d(3===a?"insv":"dc_ver");this.ga=d("mtfTop");this.ha=d("url");this.g=
d(c+"rfl");this.ia=d("tfua");this.ja=d("u");this.width=d("w")};Ic.prototype.has=function(a){return!!this.c[a]};var Jc=/^data-d([bc]m|v3)-.+/i,Kc=/^https?%3A.+/i,Lc=/^N\d+\.[A-Za-z0-9._-]*[A-Za-z0-9_-]\.?\/B\d+\.\d+/;function Mc(a,b,c,d,e){try{for(var f=[],g,h=0;(g=c(a))&&a!=b&&100>++h;){for(var p=null,n=d(g),r=0,u=0;u<n.length;++u){if(n[u]==a){p=u-r;break}e(n[u])&&++r}if(null===p)return null;f.unshift(p);a=g}return f}catch(t){return null}}function Nc(a){return Mc(a,a.top,function(b){try{return b.parent}catch(c){return null}},function(b){return b.frames},function(){return!1})}
function Oc(a){return Mc(a,document.documentElement,function(b){return b.parentElement},function(b){return b.children},function(b){return 8==b.nodeType})};var Pc=/https?:\/\/d-\d+\.ampproject\.net/;function Qc(a){return"data-dcm-http-only"in a?"http:":"https:"}function Rc(a,b,c){for(var d=0;d<c.length;d++){var e=c[d];V(a,e.priority,Sc(b,e))}}function Sc(a,b){a=a[b.f];var c=b.v;if(null==a||!c&&0==a.length||null!=b.F&&a===b.F)return[];var d={};d[b.h]=null!=c?c:a;return[d]}function Tc(a,b,c){a=a[b];if(!a)return[];a=String(a).toLowerCase();b={};if("1"==a||"true"==a)b[c]="1";return b[c]?[b]:[]}
function Uc(a,b,c,d){var e,f,g=!1,h=0,p=a.__cmp?1:0;ua(function(t){try{a!=t&&t.google_osd_static_frame&&(h=t==a.top?2:1)}catch(N){}try{a!==t&&t.__cmpLocator&&(p=2)}catch(N){}if(!F(t))return!1;if(t.mraid)try{e=t.mraid.getVersion()}catch(N){}t.MRAID_ENV&&(e=t.MRAID_ENV.version||void 0,f=t.MRAID_ENV.sdk||void 0);t.omid_v1_present&&(g=!0);return!1},a);var n=[];if(e){var r=e.split(".")[0];"2"==r?n.push(5):"3"==r&&n.push(6);f&&W(b,35,d.O,f)}g&&n.push(7);if(c)for(c=c.split?c.split(","):[c],r=0;r<c.length;++r){var u=
+c[r];0<u&&-1===n.indexOf(u)&&n.push(u)}0<n.length&&W(b,34,d.G,n);h&&W(b,39,d.X,h);p&&W(b,37,d.s,p)};var Vc=/^(?:https?:)?\/\/ad\.doubleclick\.net(?:\/ddm)?\/ad[ij]\/(N[^;]+)/,Wc=/(^| )dcmads( |$)/;E(qc);
function Xc(a,b){var c=a.document;kb=!1;var d=new mb,e;for(e in Ec)d.a[Ec[e]]="";try{Hc(d,a.dcmads&&a.dcmads.eids);var f=/.*#.*eids=([0-9,|]+)/.exec(a.location.href);f&&Hc(d,f[1])}catch(ea){}Gc(a,d,1);Gc(a,d,5);b.l=d;b.C=!!a.dcmads.version.experiment;b.D=a.dcmads.startTime||0;b.version="53."+(a.dcmads.version.loader||"?");b.g=a.goog_ddm_ps;if(!Yc(b.g)){b.g={};for(var g=[l.top],h=[],p=0,n;n=g[p++];){!F(n)||h.push(n);try{if(n.frames)for(var r=n.frames.length,u=0;u<r&&1024>g.length;++u)g.push(n.frames[u])}catch(ea){}}for(var t=
0;t<h.length;++t){var N=h[t].goog_ddm_ps;if(Yc(N)){b.g.corr=N.corr;break}}if(!Yc(b.g)){for(var wb="",xb=0;10>xb;++xb)wb+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_.!*'()"[Math.floor(70*Math.random())];b.g.corr=wb}a.goog_ddm_ps=b.g}c.body||(c.write('<b style="display:none;">_</b>'),c.body||Ac("Body element does not exist"));for(var yb=c.getElementsByClassName?c.getElementsByClassName("dcmads"):c.getElementsByTagName("ins"),fa,wa=0;wa<yb.length;wa++){var G=yb[wa];if((G.getAttribute("data-dcm-placement")||
G.getAttribute("data-dbm-deal")||G.getAttribute("data-dv3-deal"))&&Wc.test(G.className)&&!G.getAttribute("data-dcm-processed")){fa=G;fa.setAttribute("data-dcm-processed","y");break}}if(fa){var x=fa,xa=x.attributes;b.a={};for(var ha=0;ha<xa.length;ha++){var ya=xa[ha].name;if(Jc.test(ya)){var zb=ya.toLowerCase();var Ab=0==zb.indexOf("data-dcm-param-")?"data-dcm-param-"+ya.substring(15):zb}else Ab=null;var za=Ab;if(za){var B=xa[ha].value;B=null!=B?B:"";"data-dcm-click-tracker"==za&&(B=Kc.test(B)?decodeURIComponent(B):
B);b.a[za]=B}}var ia=b.a["data-dcm-placement"],Bb=b.a["data-dbm-deal"],Aa=b.a["data-dv3-deal"];ia||Bb||Aa||Ac("No placement or deal attribute set on ins tag");var ad=b.a["data-dcm-rendering-mode"];if(ia){b.b=1;var Cb=Lc.exec(ia);Cb||Ac("Invalid placement: "+ia);b.m=Cb[0]}else Aa?(b.b=3,b.j=Aa):(b.b=2,b.j=Bb);b.c=new Ic(b.b);switch(ad){case "iframe":b.i="iframe";break;case "script":b.i="script";break;default:b.i=2===b.b?"script":"iframe"}b.B=x;var Db=x.style,Ba={};try{Ba=(l.getComputedStyle?l.getComputedStyle(x,
null):x.currentStyle)||{}}catch(ea){}var Eb=M(Db.width)||M(Ba.width);Eb&&(b.width=Math.round(Eb));var Fb=M(Db.height)||M(Ba.height);Fb&&(b.height=Math.round(Fb));if("iframe"==b.i&&1===b.b&&F(l.top)){var Gb=Goog_Common_getAdAdapterInstance();Gb.setup(3);b.u=!0;var Hb=Gb}else Hb=null;var Ib=Hb;var k=new U(1===b.b?";":void 0,void 0,/Edge/.test(a.navigator.userAgent)?void 0:8100),q=b.c;var Ca=b.a,ja=b.c,Da=Ca["data-dcm-click-tracker"];if(null==Da)var Jb=[];else{var H=Ca["data-dcm-landing-page-escapes"]||
"";"0"!==H&&"1"!==H&&"2"!==H&&(H="");var O={};3===b.b?(O[ja.b]=Da,O[ja.m]=H):O[ja.b+H]=Da;null!=Ca["data-dcm-reverse-click-tracker"]&&(O[ja.a]="rcl");Jb=[O]}V(k,27,Jb);W(k,36,q.u,b.g.corr);var Kb=b.a,P=[],Ea;for(Ea in Kb)0==Ea.indexOf("data-dcm-param-")&&P.push(Ea);if(0==P.length)var Lb=[];else{var ka=[];P.sort();for(var Fa=0;Fa<P.length;Fa++){if(0<ka.length){var Ga=void 0,Mb=ka[0],Nb={};for(Ga in Mb)Nb[Ga]=Mb[Ga];var Ob=Nb}else Ob={};var Pb=Ob,Qb=P[Fa],Ha=encodeURIComponent(Qb.substring(15));Ha&&
!b.c.has(Ha)&&(Pb[Ha]=Kb[Qb],ka.unshift(Pb))}Lb=ka}V(k,20,Lb);b:{c:{var I=void 0===I?l:I;var J=I.context||I.AMP_CONTEXT_DATA;if(!J)try{J=I.parent.context||I.parent.AMP_CONTEXT_DATA}catch(ea){}try{if(J&&J.pageViewId&&J.canonicalUrl){var Rb=J;break c}}catch(ea){}Rb=null}if(Rb)var Ia=!0;else{for(var Sb=b.s,Ja=0;Ja<Sb.length;Ja++)if(Pc.test(Sb[Ja].url)){Ia=!0;break b}Ia=!1}}Ia&&W(k,38,q.j,"1");var bd=F(a.top)?0:1;W(k,32,q.B,bd);var Tb=ob(b.l);Tb.length&&W(k,4,q.H,Tb);b.C&&W(k,3,q.ca,"1");W(k,2,q.fa,b.version);
var Ub=b.D;if(Ub){var Ka=(new Date).getTime()-Ub;99999<Ka&&(Ka="M");var Vb=Ka}else Vb="";W(k,40,q.ea,Vb);Uc(a,k,b.a["data-dcm-api-frameworks"],q);var Wb,Xb=l.devicePixelRatio;(Wb="number"===typeof Xb?+Xb.toFixed(3):null)&&W(k,13,q.devicePixelRatio,Wb);var Yb=b.a["data-dcm-ssaid"];if(Yb){var La={};La[b.c.Z]=Yb;La[b.c.$]="ssaid";var Zb=[La]}else Zb=[];V(k,24,Zb);if(1===b.b)W(k,5,"sz",b.width&&b.height?b.width+"x"+b.height:"");else{W(k,1,q.Y,"iframe"==b.i?"html":"js");var Ma={};Ma[q.width]=b.width;Ma[q.height]=
b.height;V(k,5,[Ma])}var cd=q.i,dd=b.B,ed=Nc(a)||["?"],fd=Oc(dd)||["?"];var $b=ed.join(",")+":"+fd.join(","),ac=$b.length;if(0==ac)var bc=0;else{for(var K=305419896,Na=0;Na<ac;Na++)K^=(K<<5)+(K>>2)+$b.charCodeAt(Na)&4294967295;bc=0<K?K:4294967296+K}W(k,25,cd,bc);Rc(k,b.a,[{priority:31,f:"data-dcm-app-id",h:q.appId},{priority:30,f:"data-dcm-publisher-url",h:q.ba},{priority:19,f:"data-dcm-keywords",h:q.L},{priority:23,f:"data-dcm-impression-exchange-id",h:q.J},{priority:33,f:"data-dcm-omid-partner",
h:q.U,F:"[OMIDPARTNER]"}]);V(k,14,Tc(b.a,"data-dcm-underage",q.ia));V(k,15,Tc(b.a,"data-dcm-child-directed",q.l));if(2===b.b||"https:"==Qc(b.a))V(k,17,Tc(b.a,"data-dcm-limit-ad-tracking",q.N)),V(k,16,Sc(b.a,{f:"data-dcm-resettable-device-id",h:q.da}));if(2===b.b){var cc=b.c;W(k,0,cc.D,b.j);var Oa=db(b.s);W(k,29,cc.ha,Oa.a?Oa.a.url:Oa.b.url)}else{var v=b.c,dc=uc(b.s);1===b.b?V(k,29,vc(v.g,dc)):(W(k,0,v.la,b.j),V(k,29,vc(v.g,wc(dc))));var ec=b.a,Q="";"data-dcm-http-only"in ec&&(Q+="h");"data-dcm-https-only"in
ec&&(Q+="s");""==Q&&(Q="n");W(k,41,v.aa,Q);W(k,26,v.V,("00000"+Math.floor(Math.random()*Math.pow(36,6)).toString(36)).slice(-6));var C=b.a;if("data-dcm-multi-bottom-float"in C){var R=b.c.P;var A=C["data-dcm-multi-bottom-float"]}else"data-dcm-multi-left-float"in C?(R=b.c.R,A=C["data-dcm-multi-left-float"]):"data-dcm-multi-right-float"in C?(R=b.c.S,A=C["data-dcm-multi-right-float"]):"data-dcm-multi-top-float"in C&&(R=b.c.T,A=C["data-dcm-multi-top-float"]);R&&A&&(A=A.split?A.split(","):A,W(k,11,R,A));
b.u&&W(k,12,v.W,"1");Rc(k,b.a,[{priority:21,f:"data-dcm-anonymous-inventory",h:v.a,v:"anid"},{priority:8,f:"data-dcm-disable-iframe-breakout",h:v.ka,v:"false"},{priority:7,f:"data-dcm-dart-iframe-path",h:v.C},{priority:18,f:"data-dcm-external-id",h:v.I},{priority:28,f:"data-dcm-in-app",h:v.K,v:"1"},{priority:6,f:"data-dcm-interstitial",h:v.a,v:"1_ist"},{priority:9,f:"data-dcm-left-float",h:v.M},{priority:10,f:"data-dcm-top-float",h:v.ga},{priority:22,f:"data-dcm-user-defined",h:v.ja}])}if(2===b.b)var fc=
X(k,"https:","bid.g.doubleclick.net","/xbbe/bid/xpub?","");else{var gc=Qc(b.a);fc=3===b.b?X(k,gc,"ad.doubleclick.net","/dv3/ad?",""):X(k,gc,"ad.doubleclick.net","/ddm/"+("script"==b.i?"adj":"adi")+"/"+b.m+";","?")}var S=fc;if(1===b.b&&!Vc.test(S))throw Error("Invalid tag URL: "+S);var Pa=a.document;if("script"==b.i){var hc=b.l;var ic=hc.a.hasOwnProperty(4)?hc.a[4]:"";var jc='<script src="'+S+'">\x3c/script>';if(ic===Cc.o||ic===Dc.o){var D=Zc(Pa);x.appendChild(D);var lc=D,mc="<body>"+jc+"</body>";
if(yc)lc.srcdoc=mc;else{var nc=lc.contentWindow;if(nc){var Qa=nc.document;Qa.open("text/html","replace");Qa.write(mc);Qa.close()}}}else 1<x.children.length||1==x.children.length&&"b"==x.children[0].tagName.toLowerCase()||(x.style.display="none"),Pa.write(jc)}else D=Zc(Pa),D.src=S,x.appendChild(D),Ib&&Ib.registerAdBlock(S,11,D);D&&Ya(a,D);x.style.textDecoration="none"}else Ac("No ad ins element found")}function Yc(a){var b=typeof a;return("object"==b&&null!=a||"function"==b)&&!!a.corr}
function Zc(a){a=a.createElement("iframe");var b=a.style;b.width="100%";b.height="100%";b.border="0";b.margin="0";b.padding="0";a.marginWidth="0";a.marginHeight="0";a.scrolling="no";a.frameBorder="0";return a};var Z=window;Z.dcmads=Z.dcmads||{};Z.dcmads.version=Z.dcmads.version||{};var $c=new function(){this.j=this.m=null;this.s=ab();this.u=!1};
(function(a){return function(b){for(var c=[],d=0;d<arguments.length;++d)c[d]=arguments[d];return tb(function(){return Xc.apply(void 0,c)},a)}})(function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}(function(a,b,c){b.version?(c.ver=b.version,c.rm=b.i||"",c.mode=b.b?b.b+"":"0",b.m?c.plcmt=b.m||"":b.j&&(c.deal=b.j||""),(a=b.l&&ob(b.l))&&a.length&&(c.eids=a)):(c.ver="53."+(a.dcmads.version.loader||"?"),c.rm="",
c.mode="0")},Z,$c))(Z,$c);}).call(this);