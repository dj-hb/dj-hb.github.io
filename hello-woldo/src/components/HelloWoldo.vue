<template>
  <div id="hello-woldo">
    <div>{{ msg }}</div>
  </div>
</template>

<script>
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

  },
  methods: {

  },
}
</script>

<style scoped>
#hello-woldo {
  padding: 10px;
  text-align: center;
}
</style>