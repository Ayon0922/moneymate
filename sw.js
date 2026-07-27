// MoneyMate service worker — network-first for the app so updates always load online,
// with a cache fallback so it still works offline.
const CACHE = 'moneymate-v1';
const ASSETS = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS).catch(() => {})));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const isDoc = req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html');
  if (isDoc) {
    // Network-first: fetch the freshest app, update cache, fall back to cache offline.
    e.respondWith(
      fetch(req)
        .then(res => { const cp = res.clone(); caches.open(CACHE).then(c => c.put('./index.html', cp)); return res; })
        .catch(() => caches.match('./index.html').then(r => r || caches.match('./')))
    );
  } else {
    // Static assets: serve from cache, refresh in the background.
    e.respondWith(
      caches.match(req).then(cached => {
        const net = fetch(req).then(res => { caches.open(CACHE).then(c => c.put(req, res.clone())); return res; }).catch(() => cached);
        return cached || net;
      })
    );
  }
});
