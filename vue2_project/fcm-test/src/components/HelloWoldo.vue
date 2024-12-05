<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="sendPush">알림 보내기</button>
    <!-- <ul>
      <li v-for="item in tstArr">{{ item }}</li>
    </ul> -->
  </div>
</template>


<script>
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getMessaging, getToken } from "firebase/messaging";
import axios from "axios";

export default {
  name: 'HelloWoldo',
  props: {
    msg: String
  },
  data() {
    return {
      // tstArr: [],
      token: '',
    }
  },
  async created() {
    // const analytics = getAnalytics(app);

    // const db = getFirestore(app);

    // const querySnapshot = await getDocs(collection(db, "202411221257"));
    // querySnapshot.forEach((doc) => {
    //   // console.log(doc)
    //   // console.log(`${doc.id} => ${doc.data()}`);
    //   console.log(`${doc.id} => ${doc.data().drinkName}`);
    //   this.tstArr.push(doc.data().drinkName);
    // });

    this.requestPermission();
    // getToken(messaging, { vapidKey: 'BPOJ-uMo8YXdMRnv8u7gH9DHwfRFpOvqpN-oHySTvpWiAIl9laMhnJsqk_us4xUr4cFh1WMfhLAFJCoZGB_OHn4' })
    // const token = await getToken(messaging, { vapidKey: 'BPOJ-uMo8YXdMRnv8u7gH9DHwfRFpOvqpN-oHySTvpWiAIl9laMhnJsqk_us4xUr4cFh1WMfhLAFJCoZGB_OHn4' })
  },
  methods: {
    requestPermission() {
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

      Notification.requestPermission().then(async (permission) => {
        if (permission === 'granted') {
          console.log('Notification permission granted.');
          this.token = await getToken(messaging, { vapidKey: 'BPOJ-uMo8YXdMRnv8u7gH9DHwfRFpOvqpN-oHySTvpWiAIl9laMhnJsqk_us4xUr4cFh1WMfhLAFJCoZGB_OHn4' })
          console.log(this.token)
        }
      });
    },
    sendPush() {
      console.log('sendPush')
      console.log(this.token)
      axios.post('https://dev-tcl6vzsola-du.a.run.app/notifications/push/send/concierge', {
            token: this.token,
      },{
        headers: {Authorization: 'Basic BnuwqfXYajpms04h41Tyqe5mLnpQrPYelglzsYTbRL/mgEh35fM14XSg5NFY5ER4pSS9HLHn755JVx6af7CRPw==',},
      })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
  }
}
</script>


<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
