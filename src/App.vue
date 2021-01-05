<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Bai1/>
    <Bai2/>
    <Bai3/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Bai1 from "./components/Bai1.vue";
import Bai2 from "./components/Bai2";
import Bai3 from "./components/Bai3";

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Bai1,
    Bai2,
    Bai3
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
