<template>
  <div class="container">
    <div class="loginWrap">
      <div class="inputWrap">
        <div class="inputLabel">Tên đăng nhập</div>
        <input type="text" @input="onChangeName($event.target.value)">
        <span class="textRed">{{nameErrorMsg}}</span>
      </div>
      <div class="inputWrap">
        <div class="inputLabel">Mật khẩu</div>
        <input type="password" @input="onChangePassword($event.target.value)">
        <span class="textRed">{{passwordErrorMsg}}</span>
      </div>
      <button class="loginButton" @click="onLogin()">Đăng nhập</button>
    </div>
    <div class="infoWrap">
      <div class="infoLabel">
        Xin chào:
        <p v-if="name1==='admin'">{{name1}}<img class="anh" src="https://zshop.vn/images/link/63/1045.jpg?t=1474958283" alt=""></p>
        <p v-else>{{name1}}</p>
      </div>
    </div>
  </div>


</template>

<script>
export default {
  name: 'ZentCodingSchool',
  data () {
    return {
      name: '',
      password: '',
      nameErrorMsg: '',
      passwordErrorMsg: '',
      name1:'',
      products:[
        {name: 'iphoen1', price: '233245',quaity: 5},
        {name: 'iphoen2', price: '234343245',quaity: 3},
        {name: 'iphoen3', price: '2342313245',quaity: 6},
      ]
    }
  },
  methods: {
    onLogin () {
      if (this.name.length === 0) {
        this.nameErrorMsg = 'Tên đăng nhập không được để trống'
      }else if (this.password.length < 6) {
        this.passwordErrorMsg = 'Mật khẩu phải có độ dài ít nhất 6 ký tự'
      }else if (this.password.length === 0) {
        this.passwordErrorMsg = 'Mật khẩu không được để trống'
      }else {
        if(this.name ==='admin'){
          this.name1 = 'admin'
        }else{
          this.name1 = this.name
        }
      }

    },
    onChangeName (value) {
      this.name = value
      this.nameErrorMsg = ''
    },
    onChangePassword (value) {
      this.password = value
      this.passwordErrorMsg = ''
    },

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
    height: 300px;
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
    align-items: center;
    justify-content: center;
    margin-left: 24px;

    .infoLabel {
      font-weight: bold;
      color: #00AAAA;
      .anh{
        border-radius: 50%;
        width: 60px;
        height: 60px;
      }
    }
  }
}
</style>
