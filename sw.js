/* Mezun Arama service worker — sürüm bc5f7f089f */
const ONBELLEK = 'mezun-arama-bc5f7f089f';
const DOSYALAR = ['./', 'index.html', 'app.css?v=bc5f7f089f', 'app.js?v=bc5f7f089f', 'logo-192.png', 'favicon-32.png'];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(ONBELLEK).then((c) => c.addAll(DOSYALAR)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((k) => Promise.all(k.filter((x) => x !== ONBELLEK).map((x) => caches.delete(x))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin) return;
  e.respondWith(fetch(e.request).then((r) => {
    if (r.ok) { const k = r.clone(); caches.open(ONBELLEK).then((c) => c.put(e.request, k)); }
    return r;
  }).catch(() => caches.match(e.request).then((r) => r || caches.match('./'))));
});
