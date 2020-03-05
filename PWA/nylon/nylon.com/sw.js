/* jshint ignore:start */
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js');

workbox.googleAnalytics.initialize();

workbox.routing.registerRoute(
    /(https:\/\/static.rbl.ms\/static\/).*/,
    workbox.strategies.networkFirst({
        cacheName: 'assets',
        cacheExpiration: {
            maxEntries: 200,
            maxAgeSeconds: 10 * 24 * 60 * 60
        },
        cacheableResponse: {
            statuses: [0, 200]
        }
    })
);


workbox.routing.registerRoute(
    /.*\.(?:png|jpg|jpeg|svg|gif)/,
    workbox.strategies.cacheFirst({
        cacheName: 'assetsPictures',
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 20,
            maxAgeSeconds: 7 * 24 * 60 * 60,
          })
        ]
    })
);

workbox.routing.registerRoute(
    /^https:\/\/(www\.)?nylon.com\/*/,
    workbox.strategies.networkFirst({
        cacheName: 'mainPage',
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 50,
            maxAgeSeconds: 5 * 60, // 5 minutes
          }),
        ],
    })
);

self.addEventListener('install', function(e) { self.skipWaiting() });
self.addEventListener('activate', function() { self.clients.claim() });
/* jshint ignore:end */