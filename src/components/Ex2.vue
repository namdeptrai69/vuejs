<template>
  <div :style="{background: mau}">
    <input v-model="message"  type="number">
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: '',
      mau: 'white'
    }
  },
  watch: {
    message (value) {
      if (value <= 10) {
        this.mau = 'gray';
      }else if(value <= 30) {
        this.mau = 'green';
      }else if(value <= 50) {
        this.mau = 'blue';
      }else if(value <= 70) {
        this.mau = 'violet';
      }else if(value <= 90) {
        this.mau = 'orange';
      }else if(value <= 100) {
        this.mau = 'red';
      }else{
        this.mau = 'white';
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  div{
    border: 10px solid gray;
    width: 500px;
    height: 500px;
  }
</style>