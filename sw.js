const CACHE_NAME = 'oracoes-v1.0.0';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/android/icon-192.png',
  '/icons/android/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
      .catch(() => {
        return new Response(
          '<!DOCTYPE html><html><head><title>Offline</title><style>body{background:#000;color:#fff;display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;text-align:center;}</style></head><body><h1>📖 Orações Diárias</h1><p>Você está offline.<br>Conecte-se para ouvir as orações.</p></body></html>',
          { headers: { 'Content-Type': 'text/html' } }
        );
      })
  );
});