// Firebase Messaging Service Worker for Web Push Notifications
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// TODO: Replace with your Firebase config values
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
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/favicon.png'
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});
