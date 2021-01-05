<template>
  <div class="container">
    <div class="loginWrap">
      <div class="inputWrap">
        <div class="inputLabel">Nhập tiêu đề</div>
        <input type="text" v-model="message">
      </div>
      <div class="inputWrap">
        <div class="inputLabel">Nhập nội dung</div>
        <textarea v-model="content"></textarea>
      </div>
    </div>
    <div class="infoWrap">
      <div class="infoLabel">
        <h3>{{ message}}</h3>
        <div v-html="content">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Namdeptrai',
  data (){
    return{
      message: 'Nam đẹp trai',
      content: '<input type="email" placeholder="hihi">'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  .loginWrap {
    background: #f5f5f5;
    border: 1px solid #6E6E6E;
    padding: 24px;
    height: 250px;
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
      textarea{
        width: 100%;
        height: 150px;
      }
    }
    button {
      width: 100%;
      height: 40px;
      border-radius: 5px;
      margin-top: 20px;
      background: #0080dd;
      color: #fff;
      border: unset;
      font-weight: bold;
      font-size: 16px;
      cursor: pointer;
    }
  }
  .infoWrap {
    background: #fff;
    border: 1px solid #6E6E6E;
    padding: 24px;
    height: 250px;
    width: 250px;
    display: flex;
    margin-left: 24px;
    .infoLabel {
      font-weight: bold;
      color: #00AAAA;
    }
  }
}
</style>
