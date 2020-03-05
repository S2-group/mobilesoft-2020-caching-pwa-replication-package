/*
 Quantcast measurement tag
 Copyright (c) 2008-2018, Quantcast Corp.
*/
(function(f,k,h){var p=function(a){var b=h.createElement("a");b.href=a;return b},q=function(a){return a.replace(/^[\s\ufeff\xA0]+|[\s\ufeff\xA0]+$/g,"")},r=function(a){return{}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase()},s=function(a,b){if(!b)return b;var c,d;c=-1!==a.toLowerCase().indexOf("tag")||-1!==a.toLowerCase().indexOf("keyword")||0===a.toLowerCase().indexOf("qc:");d=-1===a.toLowerCase().indexOf("tag")&&-1===a.toLowerCase().indexOf("keyword")&&0===a.toLowerCase().indexOf("qc:")?
!1:!0;d&&(b=b.replace(/\.+/g," "));if(c){d=b.split(",");for(c=0;c<d.length;c++)d[c]=q(d[c]);return d}return q(b.replace(/,+/g," "))},t=function(a,b,c){return a?"nc"===a?!b||!c||0>b.indexOf(c):"eq"===a?b===c:"sw"===a?0===b.indexOf(c):"ew"===a?(a=b.length-c.length,b=b.lastIndexOf(c,a),-1!==b&&b===a):"c"===a?0<=b.indexOf(c):!1:!1},e=function(a,b,c){var d;d=k.top===k.self?h.location.href:p(h.referrer).href;t(b,d,c)?a(d):a(!1)},m=function(a,b,c){b=document.getElementsByTagName("meta");for(var d,f,e=[],
g=0;g<b.length;g++)d=b[g],f=d.getAttribute("name")||d.getAttribute("property"),f==c&&(e=e.concat(s(c,d.getAttribute("content"))));0<e.length?a(e):a(!1)},l=function(a){return{labels:a}},g=function(a){return"array"===r(a)?l(a.join(",")):l(""+a)},n=function(a,b){var c=[],d;if("array"===r(b)){for(d=0;d<b.length;d++)c.push(a+"."+b[d]);return l(c.join(","))}return l(a+"."+b)},e=["rules",[f,null,[[g,"Podcasts"]],[[e,"c","/podcasts/"]]],[f,null,[[n,"Keywords"]],[[m,"exactmatch","news_keywords"]]],[f,null,
[[n,"Author"]],[[m,"exactmatch","author"]]],[f,null,[[n,"Title"]],[[m,"exactmatch","og:title"]]],[f,null,[[g,"Human Interest"]],[[e,"c","https://slate.com/human-interest/"]]],[f,null,[[g,"Business"]],[[e,"c","https://slate.com/business/"]]],[f,null,[[g,"Technology"]],[[e,"c","https://slate.com/technology/"]]],[f,null,[[g,"Culture"]],[[e,"c","https://slate.com/culture/"]]],[f,null,[[g,"News \x26 Politics"]],[[e,"c","https://slate.com/news-and-politics/"]]]];__qc.apply(null,e);(function(a){var b=function(){return k.top===
k.self?h.location.href:p(h.referrer).href},c=b();setInterval(function(){var d=b();d!==c&&(c=d,__qc.apply(null,a),__qc("push",{qacct:f,event:"load"},!0))},2E3)})(e)})("p-fw53_-Tq3MNK1",window,document);