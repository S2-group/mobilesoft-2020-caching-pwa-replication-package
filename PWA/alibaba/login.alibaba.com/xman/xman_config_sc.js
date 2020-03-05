




AE.define('AE.common.xman.xmanConfig',function(){
  var xmanConfig = {
    isNew:'new',
    mode:'run',
    xloginPassport: "",
    passportDomain: "https://passport.alibaba.com",
    getLoginTypeName : "xlogin",
    getJoinTypeName : "d",
    intlHatchServer : "https://ushatch.alibaba.com",
    needUMID : eval("true"),
    umidToken : "B1eca764163e7559bade50a8879838c74",
    umidTimestamp: "81718244595D5E41594B6179",
    umidServer: "https://ynuf.alibaba.com",
    getActionJsSslUrl : "https://acjsus.aliyun.com/js/ua.js",
    uaOptToken : "MLxwD4T4RyOg87e0j3Y/cNuO7+ACv9RcPrLNPjPPfSEeVO4Y/X384kjzKWcgsKw3LXAW4w4ok/ptEcIZLE5dUHsrWvvfYOhzfA7RWlFFbuKTWpvNndgmdsBpGSIipBQ9rp0jV+RXSbeevMnO1nEOWQ==",
    tvsProxyDomainName : 'alibaba',
    currentXmanDomain : 'alibaba.com',
    imageSslUrl : 'https://captcha.alibaba.com/get_img?identity=alibaba.com&sessionid=7cfc74dce20143a4bb2911353dfeb30c&kjtype=b2b_default',
    getForgotPasswordLink : 'http://accounts.alibaba.com/user/company/forget_password_input_email.htm',
    i18nLadingPlsWait : 'Loading, Please wait....',
    // vmConfigs
            xlogin_js_url : 'https://login.alibaba.com/xman/xlogin.js?pd=alibaba&pageFrom=&u_token=B1eca764163e7559bade50a8879838c74',
    xlogin_group_name : ['xloginPassportId','xloginPasswordId','xloginCheckTokenId'],
    xbind_group_name : ['xbindPassport','xbindPasswordId','xbindCheckToken'],
    xjoin_group_name : ['','xjoinEmail','xjoinPassword','xjoinCountry','xjoinBusinessRoleBuyer','xjoinBusinessRoleSupplier','xjoinBusinessRole','xjoinFirstName','xjoinLastName','xjoinGender','xjoinGenderF','xjoinCompanyName','xjoinPhoneCountry','xjoinPhoneArea','xjoinPhoneNumber','xjoinCheckToken','xjoinGroupName'],
    xjoin_js_url : 'https://login.alibaba.com/xman/xjoin.js?u_token=B1eca764163e7559bade50a8879838c74&pd=alibaba&pageFrom=',
    xjoinbind_js_url : 'https://login.alibaba.com/xman/xbind.js?event_method=xjoinbind&xbind_partner_name='+window._xman_partner_name+'&xbind_partner_userid='+window._xman_partner_userid+'&pageFrom=&bindingSource=',
    xbind_js_url : 'https://login.alibaba.com/xman/xbind.js?event_method=xbind&xbind_partner_name='+window._xman_partner_name+'&xbind_partner_userid='+window._xman_partner_userid+'&bindingSource=',
    currentServer : "https://login.alibaba.com",
    countryNameByIP : "Anonymous Proxy",
    countryCodeByIP : "",
	  localIp : "",
    authorizeUrls : [],
    isShowFacebook: '',
    currentLocale: 'us',
    enableEdm:true,
    edmCountryList : ["DE","BE","FI","PT","BG","DK","LT","LU","HR","LV","FR","HU","SE","SI","UK","SK","GB","IE","EE","MT","GR","IT","ES","AT","CY","CZ","PL","RO","NL"]  };

  xmanConfig.xuidUrls = [];
      xmanConfig.xuidUrls.push('https://login.alibaba.com/xman/xuid.do?v=XNGvYgBSeeRDbXfm%2F6yphEjnCNIrpbIUUD74%2BzuR2WhGaT1ZpiT%2F0W6VcDkA%2BRIr&ts=RrCawBlt5nKqC03wesAwtOjBcawU5apVzw%2Fy4Ku4E78A%2F4kaBg%2Bc7A%3D%3D');
      xmanConfig.xuidUrls.push('https://login.aliexpress.com/xman/xuid.do?v=XNGvYgBSeeRDbXfm%2F6yphEjnCNIrpbIUUD74%2BzuR2WhGaT1ZpiT%2F0W6VcDkA%2BRIr&ts=RrCawBlt5nKqC03wesAwtOjBcawU5apVzw%2Fy4Ku4E78A%2F4kaBg%2Bc7A%3D%3D');
  
  // 抛回模块化配置
  this.exports = xmanConfig;
});
