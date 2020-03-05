'use strict';

~function (){
    var cb = window.onload;
    window.onload = function (){
        cb && cb();
        window.setTimeout(report, 0);
    };

    function report(){
        var shouldReport = /__perf_report__=true/.test(window.location.href);

        if(shouldReport){
            if(window.__bl === void 0){
                window.alert('上报失败：您的页面尚未接入arms!');
                return;
            }else if(window.performance === void 0){
                window.alert('上报失败：您的浏览器不支持 performance api!');
                return;
            }

            var timing = window.performance.timing;
            var data = {
                begin: timing.fetchStart,
                dom: timing.domInteractive - timing.responseEnd,
                load: timing.loadEventStart - timing.fetchStart,
                res: window.performance.getEntriesByType('resource'),
                dl: window.location.href,
            };

            data.res = data.res.concat(window.performance.getEntriesByType('navigation'));
            window.__bl.resource(data, 1);
            window.alert('上报成功:' + window.__bl.session);
        }
    }
}();
