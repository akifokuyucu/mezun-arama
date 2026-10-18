/* Mezun Arama service worker — sürüm 17c57ad443 */
const ONBELLEK = 'mezun-arama-17c57ad443';
const DOSYALAR = ['./', 'index.html', 'app.css?v=17c57ad443', 'app.js?v=17c57ad443', 'logo-192.png', 'favicon-32.png'];
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
  // Sayfanın kendisi her açılışta sunucuya sorulur (yeni sürüm hemen gelsin); app.js/app.css sürüm numaralı
  const istek = e.request.mode === 'navigate' ? fetch(e.request.url, { cache: 'no-cache' }) : fetch(e.request);
  e.respondWith(istek.then((r) => {
    if (r.ok) { const k = r.clone(); caches.open(ONBELLEK).then((c) => c.put(e.request, k)); }
    return r;
  }).catch(() => caches.match(e.request).then((r) => r || caches.match('./'))));
});
