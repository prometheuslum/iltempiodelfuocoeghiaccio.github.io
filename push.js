if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(function(registration) {
      console.log('Service Worker registrato con successo:', registration);
      Notification.requestPermission().then(function(permission) {
        if (permission === "granted") {
          console.log("Notifiche autorizzate!");
        }
      });
    })
    .catch(function(error) {
      console.log('Errore nella registrazione del Service Worker:', error);
    });
}