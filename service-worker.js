self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('tempio-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifesto.html',
        '/segni.html',
        '/voce.html',
        '/styles.css'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});