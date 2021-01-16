<template>
  <div class="loginWrap">
    <div class="inputWrap">
      <div class="inputLabel">Họ tên</div>
      <input type="text" v-model="name">
    </div>
    <div class="inputWrap">
      <div class="inputLabel">Ngày sinh</div>
      <input type="date" v-model="date">
    </div>
    <div class="inputWrap">
      <div class="inputLabel">Số điện thoại</div>
      <input type="number" v-model="number">
    </div>
    <div class="inputWrap">
      <div class="inputLabel">Link facebook</div>
      <input type="text" v-model="fb">
    </div>
    <button @click="dataInput()">Save</button>
    <button @click="clearInput()" style="background-color: red">Clear</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      date: '',
      number: '',
      fb: '',
    }
  },
  methods: {
    dataInput () {
      this.$emit('onSubmitInput',[this.name,this.date,this.number,this.fb])
    },
    clearInput () {
      this.$emit('clearData')
    }
  }
}

</script>

<style lang="scss" scoped>
.loginWrap {
  background: #f5f5f5;
  border: 1px solid #6E6E6E;
  padding: 24px;
  height: 400px;
  width: 300px;
  .inputWrap {
    margin-bottom: 12px;
    .inputLabel {
      font-weight: bold;
      margin-bottom: 8px;
      text-align: left;
    }
    input {
      width: 292px;
      height: 30px;
    }
  }
  button {
    width: 40%;
    height: 40px;
    border-radius: 5px;
    margin: 10px;
    background: #0080dd;
    color: #fff;
    border: unset;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
  }
  .thongtin{
    color: #00AAAA;
    text-align: left;
    font-weight: bold;
  }
}
</style>
