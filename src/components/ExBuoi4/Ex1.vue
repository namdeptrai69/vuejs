<template>
  <div ref="mau">
    <input v-model="message"  type="number">
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: '',
    }
  },
  watch: {
    message (value) {
      if (value <= 10) {
        this.$refs.mau.style.backgroundColor = 'gray';
      }else if(value <= 30) {
        this.$refs.mau.style.backgroundColor = 'green';
      }else if(value <= 50) {
        this.$refs.mau.style.backgroundColor = 'blue';
      }else if(value <= 70) {
        this.$refs.mau.style.backgroundColor = 'violet';
      }else if(value <= 90) {
        this.$refs.mau.style.backgroundColor = 'orange';
      }else if(value <= 100) {
        this.$refs.mau.style.backgroundColor = 'red';
      }else{
        this.$refs.mau.style.backgroundColor = 'white';
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