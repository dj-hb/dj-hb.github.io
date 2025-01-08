// importScripts('https://www.gstatic.com/firebasejs/9.0.2/firebase-app-compat.js');
// importScripts('https://www.gstatic.com/firebasejs/9.0.2/firebase-messaging-compat.js');

// const firebaseConfig = {
//   apiKey: "AIzaSyAxwCiFs8F4cbP1mZvEs1iaeKRimSPvyZo",
//   authDomain: "fcm-test-9e465.firebaseapp.com",
//   projectId: "fcm-test-9e465",
//   storageBucket: "fcm-test-9e465.firebasestorage.app",
//   messagingSenderId: "38271062035",
//   appId: "1:38271062035:web:d682213c40e7d5688b6fe6",
//   measurementId: "G-TGN6LLRD3D"
// };

// const app = firebase.initializeApp(firebaseConfig);
// const messaging = firebase.messaging();

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('https://www.naver.com')
  );
})

// messaging.onBackgroundMessage(function(payload) {
//   // console.log('[firebase-messaging-sw.js] Received background message ', payload);
//   // Customize notification here
//   const notificationTitle = 'Background Message Title';
//   const notificationOptions = {
//     body: 'Background Message body.',
//     // icon: '/firebase-logo.png'
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });

self.addEventListener("install", function (e) {
  self.skipWaiting();
});

self.addEventListener("activate", function (e) {
  console.log("fcm sw activated..");
});

self.addEventListener("push", function (e) {
  if (!e.data.json()) return;

  const resultData = e.data.json().notification;
  const notificationTitle = resultData.title;

  const notificationOptions = {
    body: resultData.body,
  };

  console.log(resultData.title, {
    body: resultData.body,
  });

  e.waitUntil(self.registration.showNotification(notificationTitle, notificationOptions));
});