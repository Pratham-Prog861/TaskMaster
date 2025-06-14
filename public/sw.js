// public/sw.js

self.addEventListener('install', (event) => {
  console.log('Service Worker installing.');
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activating.');
});

self.addEventListener('push', (event) => {
  const data = event.data.json();
  console.log('Push received:', data);

  const title = data.title || 'Default Title';
  const options = {
    body: data.body || 'Default Body',
    icon: data.icon || '/favicon.ico',
    badge: data.badge || '/favicon.ico'
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});