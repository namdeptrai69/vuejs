<template>
  <div class="container">
    <user @onSubmitInput="hend" @clearData="cle"/>
    <userAbout :name="name" :date="date" :number="number" :fb="fb"/>
  </div>
</template>

<script>
import user from "./user";
import userAbout from "./userAbout";

export default {
  data () {
    return {
      name: '',
      date: '',
      number: '',
      fb: '',
    }
  },
  components: {
    user,
    userAbout
  },
  methods: {
    hend (data){
      this.name = data[0];
      this.date = data[1];
      this.number = data[2];
      this.fb = data[3];
    },
    cle (){
      this.name = '';
      this.date = '';
      this.number = '';
      this.fb = '';
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
