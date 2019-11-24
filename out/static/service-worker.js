self.__precacheManifest = [
  {
    "url": "/_next/static/chunks/commons.3a44d018821a23af55d3.js",
    "revision": "a83c0e50c9945f1e6d34"
  },
  {
    "url": "/_next/static/chunks/styles.eeac48f1a9433f585700.js",
    "revision": "57615f230aa33ce9f5ad"
  },
  {
    "url": "/_next/static/css/commons.bbea3502.chunk.css",
    "revision": "a83c0e50c9945f1e6d34"
  },
  {
    "url": "/_next/static/css/styles.3a82d454.chunk.css",
    "revision": "57615f230aa33ce9f5ad"
  },
  {
    "url": "/_next/static/o248KZqXwrTZQAVOvomzC/pages/_app.js",
    "revision": "c5630790d1f99d0d5c3f"
  },
  {
    "url": "/_next/static/o248KZqXwrTZQAVOvomzC/pages/_error.js",
    "revision": "9026de279d4c515620ab"
  },
  {
    "url": "/_next/static/o248KZqXwrTZQAVOvomzC/pages/candidates.js",
    "revision": "beb5e722442d989ddd87"
  },
  {
    "url": "/_next/static/o248KZqXwrTZQAVOvomzC/pages/index.js",
    "revision": "cce03bdc0136f2d1d8aa"
  },
  {
    "url": "/_next/static/o248KZqXwrTZQAVOvomzC/pages/results.js",
    "revision": "4579a4d7f7bd93e2e773"
  },
  {
    "url": "/_next/static/o248KZqXwrTZQAVOvomzC/pages/vote.js",
    "revision": "2deb6dd54f44ed5a5ffb"
  },
  {
    "url": "/_next/static/o248KZqXwrTZQAVOvomzC/pages/voting.js",
    "revision": "4c5ef61dc932f985a0ef"
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
