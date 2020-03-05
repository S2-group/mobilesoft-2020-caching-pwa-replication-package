var cmTag = cmTag || {}; cmTag.dSettings = {
    "wirewax": {
        "adtnlscrpts": [ 
            { 
                "src": "//edge-player.wirewax.com/ww4release/javascripts/wirewax-iframe-api.js",
                "clbk": function () { 
                    try {
                        this.adUnit.unsubscribe(this.vpaidEvents.AdImpression, '*');
                        this.adUnit.unsubscribe(this.vpaidEvents.AdVideoComplete, '*');
                        
                        for (var event in this.adUnit._iframe.contentWindow.wirewax.events.listeners) {
                            this.adUnit._iframe.contentWindow.wirewax.addEventListener(this.adUnit._iframe.contentWindow.wirewax.events.listeners[event], this.onIframeEvent);  
                        }
                    } catch (ex) {}
                }
            }
        ],
        "ifrmevts": {
            "playerReady": "AdImpression",
            "videoEnd": "AdVideoComplete"
        },
        "hdtrgt": true,
        "wtfradpsdbfrrsmad": true,
        "prvnterlyadimpopp": true
    },
    "the trade desk": {
        "extwnprc": true,
        "wnprcfld": "wp"
    },
    "dbm": {
        "extwnprc": true,
        "wnprcfld": "pr"
    }
}
window.TRC = window.TRC || {};
window.TRC.dsm = window.TRC.dsm || {};
window.TRC.dsm['176'] = cmTag.dSettings;