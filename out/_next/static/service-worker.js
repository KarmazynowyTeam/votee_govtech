self.__precacheManifest = [
  {
    "url": "/_next/static/chunks/commons.1d9b6ccaade97dda2f1c.js",
    "revision": "64c54cca6a0a675722af"
  },
  {
    "url": "/_next/static/chunks/styles.eeac48f1a9433f585700.js",
    "revision": "57615f230aa33ce9f5ad"
  },
  {
    "url": "/_next/static/css/commons.bbea3502.chunk.css",
    "revision": "64c54cca6a0a675722af"
  },
  {
    "url": "/_next/static/css/styles.3a82d454.chunk.css",
    "revision": "57615f230aa33ce9f5ad"
  },
  {
    "url": "/_next/static/fbWR2s-3el29lANN8H8j5/pages/_app.js",
    "revision": "537829e0e1d709dc708d"
  },
  {
    "url": "/_next/static/fbWR2s-3el29lANN8H8j5/pages/_error.js",
    "revision": "94505c4375059071bd14"
  },
  {
    "url": "/_next/static/fbWR2s-3el29lANN8H8j5/pages/candidates.js",
    "revision": "ad160e9aeda4edbc126a"
  },
  {
    "url": "/_next/static/fbWR2s-3el29lANN8H8j5/pages/index.js",
    "revision": "2f2ed00a2d30e1989a82"
  },
  {
    "url": "/_next/static/fbWR2s-3el29lANN8H8j5/pages/results.js",
    "revision": "834680a85d9a22d6ee86"
  },
  {
    "url": "/_next/static/fbWR2s-3el29lANN8H8j5/pages/vote.js",
    "revision": "f822ee0aab02ee87c256"
  },
  {
    "url": "/_next/static/fbWR2s-3el29lANN8H8j5/pages/voting.js",
    "revision": "1241e7572a5e2f169e2b"
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
