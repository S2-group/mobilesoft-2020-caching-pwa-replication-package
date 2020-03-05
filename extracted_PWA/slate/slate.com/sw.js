"use strict";

importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js",
);

workbox.precaching.precacheAndRoute([
  {
    "url": "fonts/sites/slate-com/Register-Heavy-subset.woff2",
    "revision": "aa3777e698e82bbfffe4ac6c8748b913"
  },
  {
    "url": "fonts/sites/slate-com/Register-HeavyItalic-subset.woff2",
    "revision": "ebf2021d9b928a72b15881ecbb42bfb2"
  },
  {
    "url": "fonts/sites/slate-com/Retina-Bold-subset.woff2",
    "revision": "4028e2cdfeddda133c688e04f6562713"
  },
  {
    "url": "fonts/sites/slate-com/Retina-BoldItalic-subset.woff2",
    "revision": "1d82beec64fa75e84f459cca5c7be754"
  },
  {
    "url": "fonts/sites/slate-com/Retina-Book-subset.woff2",
    "revision": "09f32238805de5eb791b507f4f333b6e"
  },
  {
    "url": "fonts/sites/slate-com/Retina-BookItalic-subset.woff2",
    "revision": "55d2c91a899f7a0edc0bb24befa75b6b"
  },
  {
    "url": "media/components/masthead/sprite.svg",
    "revision": "03449eee9b7f6d1f1bda2585379eee8c"
  },
  {
    "url": "media/components/global-footer/slate-group.svg",
    "revision": "7d5de8cf0a437bec81a88dc192ac7520"
  },
  {
    "url": "media/components/slate-live-events/slate-live-logo.svg",
    "revision": "61d889d966b4cefe5b88cf6568b1fc6f"
  },
  {
    "url": "media/components/related-story/related-arrow.svg",
    "revision": "365ccb3673fdeb38a6c0923941f5ffa1"
  },
  {
    "url": "media/sites/slate-com/global-sprite.svg",
    "revision": "676006f59c7a64df426468cf997c28a8"
  },
  {
    "url": "media/sites/slate-com/signifiers.svg",
    "revision": "4c93e10ec22e533c1ff63f16cd12278f"
  },
  {
    "url": "/offline.html",
    "revision": "d8cc5bf1c9e595ba653bd81d2d483dff"
  }
]);
workbox.precaching.suppressWarnings();

var networkFirstHandler = workbox.strategies.networkFirst({
  cacheName: "default",
  plugins: [
    new workbox.expiration.Plugin({
      maxEntries: 10,
    }),
    new workbox.cacheableResponse.Plugin({
      statuses: [200],
    }),
  ],
});

// Handle all navigation requests - can nav to offline
const navMatcher = ({ event }) => event.request.mode === "navigate";
const navHandler = args =>
  networkFirstHandler
    .handle(args)
    .then(response => (!response ? caches.match("/offline.html") : response));

workbox.routing.registerRoute(navMatcher, navHandler);

// Handle non-navigation requests
const matcher = ({ event }) => event.request.mode !== "navigate";

workbox.routing.registerRoute(matcher, networkFirstHandler);
