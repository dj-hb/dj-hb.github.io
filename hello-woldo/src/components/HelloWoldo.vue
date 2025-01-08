<template>
  <div id="hello-woldo">
    <div>{{ msg }}</div>
    <div>
      <button @click="testMethod01()">test01</button>
    </div>
    <div>
      <button @click="testMethod02()">test02</button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import { saveFcmTokenToServer, test01, test02 } from '@/utils/firebase';

export default {
  name: 'HelloWoldo',
  props: {
    msg: String
  },
  data() {
    return {
      
    }
  },
  created() {
    // getFcmToken();
  },
  methods: {
    testMethod01() {
      saveFcmTokenToServer();
      // test01();
    },
    testMethod02() {
      test02();
    }
  },
}
</script>

<style scoped>
#hello-woldo {
  padding: 10px;
  text-align: center;
}
</style>