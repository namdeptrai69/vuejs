<template>
  <div class="container">
    <loginForm @onSubmitLogin="hend"/>
    <loginSubb :userName="name" :tuoi="tuoi"/>
  </div>
</template>

<script>
import loginForm from "./loginForm";
import loginSubb from "./loginSubb";

export default {
  data () {
    return {
      name: 'hihi',
      tuoi: 10
    }
  },
  components: {
      loginForm,
      loginSubb
  },
  methods: {
    hend (data){
      this.name = data;
    }
  }
}
  
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 500px;

  }
</style>
