(function() {
    var CACHE_VERSION = '::v2.7.2',
        ASSET_CACHE_NAME = 'assets' + CACHE_VERSION,
        DATA_CACHE_NAME = 'data' + CACHE_VERSION,
        scoreDetailRe = /\/(scores|slices)\/[-_\w]{1,35}\/(in-course-\d+\/)?$/g,
        CACHE_ASSETS = 1,
        
        assetsRe = /\bd2c3nvafyekx5z\.cloudfront\.net\/(?:css|fonts|images(?=\/sheetmusic)|json|scripts|soundfonts)\/.*?-[a-f0-9]{32}\.(?:css|eot|js|json|mp3|oga|png|jpg|svg|ttf|woff2?)$/,
        avatarsRe = /\bd24al86650eku7\.cloudfront\.net\/.*small.*png$/,
        jsonDataRe = /\bd1vuq0zzaa789\.cloudfront\.net\/.*\.json/;
        

    function isValidResponse(response) {
        return response.status >= 200 && response.status < 400;
    }

    function removeQueryString(url) {
        var match = /(.*?)\?/.exec(url);
        return match ? match[1] : url;
    }

    function putInCache(cacheName, request, response) {
        return new Promise(function(resolve, reject) {
            caches.open(cacheName).then(function(cache) {
                cache.put(request, response).then(function() {
                    resolve();
                });
            });
        });
    }

    self.addEventListener('activate', function(event) {
        event.waitUntil(
            caches.keys().then(function(keys) {
                return Promise.all(
                    keys.filter(function(cacheName) {
                        return cacheName.indexOf(CACHE_VERSION) === -1;
                    }).map(function(cacheName) {
                        return caches.delete(cacheName);
                    })
                )
            })
        );
    });

    self.addEventListener('fetch', function(event) {
        var request = event.request,
            url = request.url,
            cacheRequest;

        if (request.method === 'GET') {
            // ASSETS (CSS, JS, FONTS, IMAGES) + USER AVATARS
            // Check cache first. Else hit network and fill cache.
            if (CACHE_ASSETS && (assetsRe.test(url) || avatarsRe.test(url))) {
                event.respondWith(
                    caches.match(request).then(function(cachedResponse) {
                        return cachedResponse || fetch(request).then(function(networkResponse) {
                            if (isValidResponse(networkResponse)) {
                                putInCache(ASSET_CACHE_NAME, request, networkResponse.clone());
                            }
                            return networkResponse;
                        }).catch(function() { }); // TODO: Return empty response.
                    })
                );
            }

            // SCORE APP SHELL
            // Check cache first. Else hit network. Refresh cache either way.
            else if (CACHE_ASSETS && scoreDetailRe.test(url)) {
                cacheRequest = new Request('/score_appshell/');
                event.respondWith(
                    caches.match(cacheRequest).then(function(cachedResponse) {
                        var fetchPromise = fetch(cacheRequest, {credentials: 'include'}).then(function(networkResponse) {
                            if (isValidResponse(networkResponse)) {
                                putInCache(ASSET_CACHE_NAME, cacheRequest, networkResponse.clone());
                            }
                            return networkResponse;
                        }).catch(function() {
                            return fetch(cacheRequest, {credentials: 'include'});
                        });
                        return cachedResponse || fetchPromise;
                    })
                );
            }

            // SCORE JSON, SYNCPOINT JSON
            // Check cache first. Else hit network and fill cache.
            else if (CACHE_ASSETS && jsonDataRe.test(url)) {
                cacheRequest = new Request(removeQueryString(url));
                event.respondWith(
                    caches.match(cacheRequest).then(function(cachedResponse) {
                        return cachedResponse || fetch(request, {credentials: 'same-origin'}).then(function(networkResponse) {
                            if (isValidResponse(networkResponse)) {
                                putInCache(DATA_CACHE_NAME, cacheRequest, networkResponse.clone());
                            }
                            return networkResponse;
                        }).catch(function() {
                            return fetch(request, {credentials: 'same-origin'});
                        });
                    })
                );
            }
        }
    });
}());
