// dist/sw.js
self.addEventListener('push', function(event) {
  const title = 'New Message';
  const options = {
    body: event.data.text(),
    icon: 'icon.png',
    badge: 'badge.png',
    vibrate: [200, 100, 200, 100, 200, 100, 200],
    sound: '/path-to-your-notification-sound.mp3',
  };

  event.waitUntil(self.registration.showNotification(title, options));
});
