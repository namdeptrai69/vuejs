<template>
  <div id="app">
    <div>
      <router-link to="/"> Bài 1 </router-link> | 
      <router-link to="/bai-2"> Bài 2 </router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  //
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  border: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.el-dropdown{
  margin-right: 40px;
}
.el-dropdown-link {
  cursor: pointer;
  color: gray;
}
.el-dropdown-link:hover{
  color: black;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-link {
  margin-right: 40px;
  cursor: pointer;
}
.content {
  padding: 20px;
  border-top: 1px solid darkgray;
}
.content p {
}
.content img {
  width: 100%;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.el-carousel__item img {
  width: 100%;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
