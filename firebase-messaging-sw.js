// Firebase Messaging Service Worker for Web Push Notifications
// Version: 3.0 - Completely rewritten for personalized notifications
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

// Handle background messages (when app is not in focus)
messaging.onBackgroundMessage((payload) => {
  console.log('[SW v3.0] Received background message');
  console.log('[SW v3.0] Full payload:', JSON.stringify(payload, null, 2));

  // Extract notification data from payload
  let title = 'Matemática Visual';
  let body = 'Nova notificação';
  let icon = '/icons/Icon-192.png';

  // Try multiple payload paths (Firebase sends in different formats)
  if (payload.notification) {
    title = payload.notification.title || title;
    body = payload.notification.body || body;
    icon = payload.notification.icon || icon;
  }

  // Also check data payload
  if (payload.data) {
    title = payload.data.title || title;
    body = payload.data.body || body;
  }

  console.log('[SW v3.0] Extracted notification:');
  console.log(`  Title: ${title}`);
  console.log(`  Body: ${body}`);

  // Show notification with rich content
  const notificationOptions = {
    body: body,
    icon: icon,
    badge: '/icons/Icon-192.png',
    vibrate: [200, 100, 200],
    tag: 'matematica-visual-study',
    requireInteraction: false,
    renotify: true,
    data: {
      url: '/',
      timestamp: Date.now(),
      ...payload.data
    },
    actions: [
      {
        action: 'open',
        title: 'Abrir',
      }
    ]
  };

  console.log('[SW v3.0] Showing notification with options:', notificationOptions);

  return self.registration.showNotification(title, notificationOptions);
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  console.log('[SW v3.0] Notification clicked');

  event.notification.close();

  const urlToOpen = event.notification.data?.url || '/';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then((clientList) => {
        // Focus existing window if available
        for (const client of clientList) {
          if (client.url.includes(urlToOpen) && 'focus' in client) {
            console.log('[SW v3.0] Focusing existing window');
            return client.focus();
          }
        }
        // Open new window
        if (clients.openWindow) {
          console.log('[SW v3.0] Opening new window');
          return clients.openWindow(urlToOpen);
        }
      })
  );
});

// Handle notification close
self.addEventListener('notificationclose', (event) => {
  console.log('[SW v3.0] Notification closed');
});

console.log('[SW v3.0] Service Worker loaded and ready');
