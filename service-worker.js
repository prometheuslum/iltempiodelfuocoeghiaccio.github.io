
self.addEventListener('install', function(e) {
  console.log('Service Worker installato');
  self.skipWaiting();
});

self.addEventListener('push', function(e) {
  const data = e.data.json();
  self.registration.showNotification(data.title, {
    body: data.body,
    icon: data.icon
  });
});
