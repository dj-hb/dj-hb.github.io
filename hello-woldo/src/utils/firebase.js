/* eslint-disable */
console.log('src/utils/firebase.js')

import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from "firebase/messaging";
// import axios from 'axios';

// firebase/messaging 의 getToken 만으로도 알림 권한 요청 팝업이 노출된다.

// 개인계정 - vue2project
const firebaseConfig = {
  apiKey: "AIzaSyAxwCiFs8F4cbP1mZvEs1iaeKRimSPvyZo",
  authDomain: "fcm-test-9e465.firebaseapp.com",
  projectId: "fcm-test-9e465",
  storageBucket: "fcm-test-9e465.firebasestorage.app",
  messagingSenderId: "38271062035",
  appId: "1:38271062035:web:d682213c40e7d5688b6fe6",
  measurementId: "G-TGN6LLRD3D"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export async function test02() {
  const token = await getToken(messaging, {vapidKey: "BPOJ-uMo8YXdMRnv8u7gH9DHwfRFpOvqpN-oHySTvpWiAIl9laMhnJsqk_us4xUr4cFh1WMfhLAFJCoZGB_OHn4"})
}

export async function saveFcmTokenToServer() {

}

export function test01() {

}
