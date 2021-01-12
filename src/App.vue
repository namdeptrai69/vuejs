<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--    <Bai1/>-->
<!--    <Bai2/>-->
<!--    <Bai3/>-->
<!--    <Ex/>-->
<!--    <Ex1/>-->
<!--    <Ex2/>-->
<!--    <Ex3/>-->
    <Bai1buoi2/>
    <Bai2buoi2/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Bai1 from "./components/Bai1.vue";
// import Bai2 from "./components/Bai2";
// import Bai3 from "./components/Bai3";
// import Ex from "./components/Ex";
// import Ex1 from "./components/Ex1";
// import Ex2 from "./components/Ex2";
// import Ex3 from "./components/Ex3";
import Bai1buoi2 from "./components/Bai1buoi2";
import Bai2buoi2 from "./components/Bai2buoi2";

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Bai1,
    // Bai2,
    // Bai3,
    // Ex,
    // Ex1
    // Ex2,
    // Ex3
    Bai1buoi2,
    Bai2buoi2
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
