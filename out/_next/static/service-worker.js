self.__precacheManifest = [
  {
    "url": "/_next/static/Um9ukah8XbZYajDAoga-Y/pages/_app.js",
    "revision": "6d99191baa63878da53c"
  },
  {
    "url": "/_next/static/Um9ukah8XbZYajDAoga-Y/pages/_error.js",
    "revision": "5b473b19db6e61575f99"
  },
  {
    "url": "/_next/static/Um9ukah8XbZYajDAoga-Y/pages/candidates.js",
    "revision": "28ca4ca8f6beabd1ae52"
  },
  {
    "url": "/_next/static/Um9ukah8XbZYajDAoga-Y/pages/index.js",
    "revision": "8e4ad93983a0e2615921"
  },
  {
    "url": "/_next/static/Um9ukah8XbZYajDAoga-Y/pages/results.js",
    "revision": "0c0cb357e6b1a41c4f2e"
  },
  {
    "url": "/_next/static/Um9ukah8XbZYajDAoga-Y/pages/vote.js",
    "revision": "df90fef926a3b7ce82b4"
  },
  {
    "url": "/_next/static/Um9ukah8XbZYajDAoga-Y/pages/voting.js",
    "revision": "4664efccb1de82465fe4"
  },
  {
    "url": "/_next/static/chunks/commons.83f1b8b4d41cf5f538e8.js",
    "revision": "c3594f4e0db3fbea3da3"
  },
  {
    "url": "/_next/static/chunks/styles.eeac48f1a9433f585700.js",
    "revision": "57615f230aa33ce9f5ad"
  },
  {
    "url": "/_next/static/css/commons.bbea3502.chunk.css",
    "revision": "c3594f4e0db3fbea3da3"
  },
  {
    "url": "/_next/static/css/styles.3a82d454.chunk.css",
    "revision": "57615f230aa33ce9f5ad"
  },
  {
    "url": "/_next/static/runtime/main-c334bbef6789e4353936.js",
    "revision": "1655867b437b53ee88bf"
  },
  {
    "url": "/_next/static/runtime/webpack-4b444dab214c6491079c.js",
    "revision": "71726f334912f74c262a"
  }
];

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  
);

workbox.core.setCacheNameDetails({prefix: "open-banking"});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache","networkTimeoutSeconds":10, plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false }), new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ], headers: { 'x-test': 'true' } })] }), 'GET');
workbox.routing.registerRoute(/.jpg$/, new workbox.strategies.CacheFirst({ "cacheName":"static-resources", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
workbox.routing.registerRoute(/.png$/, new workbox.strategies.CacheFirst({ "cacheName":"static-resources", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
workbox.routing.registerRoute(/.svg$/, new workbox.strategies.CacheFirst({ "cacheName":"static-resources", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
workbox.routing.registerRoute(/.min.js$/, new workbox.strategies.CacheFirst({ "cacheName":"static-resources", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
