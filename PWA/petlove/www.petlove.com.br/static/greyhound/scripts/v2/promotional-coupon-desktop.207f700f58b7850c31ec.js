(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{269:function(o,e,t){"use strict";function n(o,e,t,n,s,a,i,r){var d,p="function"==typeof o?o.options:o;if(e&&(p.render=e,p.staticRenderFns=t,p._compiled=!0),n&&(p.functional=!0),a&&(p._scopeId="data-v-"+a),i?(d=function(o){(o=o||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(o=__VUE_SSR_CONTEXT__),s&&s.call(this,o),o&&o._registeredComponents&&o._registeredComponents.add(i)},p._ssrRegister=d):s&&(d=r?function(){s.call(this,this.$root.$options.shadowRoot)}:s),d)if(p.functional){p._injectStyles=d;var c=p.render;p.render=function(o,e){return d.call(e),c(o,e)}}else{var A=p.beforeCreate;p.beforeCreate=A?[].concat(A,d):[d]}return{exports:o,options:p}}t.d(e,"a",function(){return n})},357:function(o,e,t){"use strict";t.r(e);var n=t(112),s=t(76),a={name:"promotional-coupon-desktop",data:function(){return{isUserLogged:!0,isNewClient:!1,hasCookieCoupon:!1,addCoupon:!1}},methods:{applyCoupon:function(o){this.addCoupon=!0,dataLayer.push({event:"couponHomeClick"}),s.q.set("PL_pendingCoupon","BOASVINDAS")}},beforeCreate:function(){var o=this;n.a.subscribe(n.a.events.user_loaded,function(e){o.isUserLogged=e.logged,o.isNewClient=e.new_client})},mounted:function(){(s.q.get("PL_welcomePromotionClicked")||s.q.get("PL_pendingCoupon"))&&(this.addCoupon=!0,this.hasCookieCoupon=!0)}},i=t(269),r=Object(i.a)(a,function(){var o=this,e=o.$createElement,t=o._self._c||e;return o.hasCookieCoupon||!o.isNewClient&&o.isUserLogged?o._e():t("div",{staticClass:"promotion-coupon text-center"},[t("div",{directives:[{name:"show",rawName:"v-show",value:!o.addCoupon,expression:"!addCoupon"}],staticClass:"promotion-coupon-step1 container"},[t("img",{staticClass:"lazyload",attrs:{width:"208",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAABCAQAAAACofQlAAAADElEQVR42mNkoAEAAACqAAKIjptDAAAAAElFTkSuQmCC","data-src":"https://www.petlove.com.br/static/uploads/banner_image/image/8801/USP_boasvindas.png",alt:"cupom de desconto"},on:{click:function(e){return o.applyCoupon()}}})]),o._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:o.addCoupon,expression:"addCoupon"}],staticClass:"promotion-coupon-step1"},[t("img",{staticClass:"lazyload",attrs:{width:" 208",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAABCAQAAAACofQlAAAADElEQVR42mNkoAEAAACqAAKIjptDAAAAAElFTkSuQmCC","data-src":"https://www.petlove.com.br/static/uploads/banner_image/image/8800/USP_boasvindas-aplicado.png",alt:"cupom de desconto"}})])])},[],!1,null,null,null);e.default=r.exports}}]);