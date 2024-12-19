importScripts('https://www.gstatic.com/firebasejs/9.0.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAxwCiFs8F4cbP1mZvEs1iaeKRimSPvyZo",
  authDomain: "fcm-test-9e465.firebaseapp.com",
  projectId: "fcm-test-9e465",
  storageBucket: "fcm-test-9e465.firebasestorage.app",
  messagingSenderId: "38271062035",
  appId: "1:38271062035:web:d682213c40e7d5688b6fe6",
  measurementId: "G-TGN6LLRD3D"
})

const messaging = firebase.messaging();

self.addEventListener("install", function (e) {
  self.skipWaiting();
});

self.addEventListener("activate", function (e) {
  console.log("fcm sw activated..");
});

// self.addEventListener("push", function (e) {
//   if (!e.data.json()) return;

//   const resultData = e.data.json().notification;
//   const notificationTitle = resultData.title;

//   const notificationOptions = {
//     body: resultData.body,
//   };

//   console.log(resultData.title, {
//     body: resultData.body,
//   });

//   e.waitUntil(self.registration.showNotification(notificationTitle, notificationOptions));
// });