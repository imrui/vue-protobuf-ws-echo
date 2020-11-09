<template>
  <div id="app">
    <ws-echo/>
  </div>
</template>

<script>
import WsEcho from './views/WsEcho.vue'

export default {
  name: 'App',
  components: {
    WsEcho
  }
}
</script>

<style>
  html, body {
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 10px;
  }
</style>
