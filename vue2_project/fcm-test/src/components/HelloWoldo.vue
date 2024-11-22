<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="item in tstArr">{{ item }}</li>
    </ul>
  </div>
</template>


<script>
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

export default {
  name: 'HelloWoldo',
  props: {
    msg: String
  },
  data() {
    return {
      tstArr: [],
    }
  },
  async created() {
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
    const analytics = getAnalytics(app);
    
    const db = getFirestore(app);
    
    const querySnapshot = await getDocs(collection(db, "202411221257"));
    querySnapshot.forEach((doc) => {
      // console.log(doc)
      // console.log(`${doc.id} => ${doc.data()}`);
      console.log(`${doc.id} => ${doc.data().drinkName}`);
      this.tstArr.push(doc.data().drinkName);
    });
    

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
