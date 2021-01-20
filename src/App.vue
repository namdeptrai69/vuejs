<template>
  <div id="app">
    <ProductPage/>
    <NewsDetailPage/>
  </div>
</template>

<script>
import ProductPage from "./components/BaiTapBuoi4/Bai1/ProductPage"
import NewsDetailPage from "./components/BaiTapBuoi4/Bai2/NewsDetailPage"

export default {
  name: 'App',
  components: {
    ProductPage,
    NewsDetailPage
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  border: none;
}
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>
