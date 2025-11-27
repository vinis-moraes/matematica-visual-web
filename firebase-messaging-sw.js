// Firebase Messaging Service Worker for Web Push Notifications
// Version: 2.0 - Rich notifications with module names
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyAlBM54ouCqzM4GBRxERlM6ATBVZwFR1C8",
  authDomain: "matematica-visual.firebaseapp.com",
  projectId: "matematica-visual",
  storageBucket: "matematica-visual.firebasestorage.app",
  messagingSenderId: "857325958816",
  appId: "1:857325958816:web:ae2453c1a71fe3a2f8bbc5"
});

const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message:', payload);

  // Extract notification data
  const notificationTitle = payload.notification?.title || 'Matemática Visual';
  const notificationBody = payload.notification?.body || 'Nova notificação disponível';

  // Rich notification options
  const notificationOptions = {
    body: notificationBody,
    icon: '/icons/Icon-192.png',
    badge: '/icons/Icon-192.png',
    vibrate: [200, 100, 200],
    tag: 'matematica-visual-notification',
    requireInteraction: false,
    renotify: false,
    data: {
      url: payload.data?.url || '/',
      dateOfArrival: Date.now(),
      ...payload.data
    },
    actions: [
      {
        action: 'open',
        title: 'Abrir',
        icon: '/icons/Icon-192.png'
      }
    ]
  };

  console.log('[firebase-messaging-sw.js] Showing notification:', notificationTitle);

  return self.registration.showNotification(notificationTitle, notificationOptions);
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  console.log('[firebase-messaging-sw.js] Notification click received:', event);

  event.notification.close();

  // Get the URL to open (default to root)
  const urlToOpen = event.notification.data?.url || '/';

  // Handle action clicks
  if (event.action === 'open' || !event.action) {
    event.waitUntil(
      clients.matchAll({ type: 'window', includeUncontrolled: true })
        .then((clientList) => {
          // Check if there's already a window/tab open
          for (const client of clientList) {
            if (client.url.includes(urlToOpen) && 'focus' in client) {
              return client.focus();
            }
          }
          // If no window is open, open a new one
          if (clients.openWindow) {
            return clients.openWindow(urlToOpen);
          }
        })
    );
  }
});

// Handle notification close
self.addEventListener('notificationclose', (event) => {
  console.log('[firebase-messaging-sw.js] Notification closed:', event);
});

