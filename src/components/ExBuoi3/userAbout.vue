<template>
  <div class="loginWrap">
    <div class="thongtin">
      <p>Họ tên: {{name}}</p>
      <p>Ngày sinh: {{date}}</p>
      <p>Số điện thoại: {{number}}</p>
      <p>Link facebook: <a :href="fb" target="_blank">{{fb}}</a></p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name','date','number','fb'],
  data (){
    return{

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
