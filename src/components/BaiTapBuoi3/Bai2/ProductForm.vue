<template>
  <div class="product">
    <h3>Sản phẩm</h3>
    <div class="inputProduct">
      <div class="inputLabel">Tên sản phẩm <span>(*)</span></div>
      <input :style="[name ?'' : {borderColor: nameErr}]" type="text" v-model="name" placeholder="Nhập tên sản phẩm">
      <p v-show="nameErr&&name===''">Tên sản phẩm không được để trông</p>
    </div>
    <div class="inputProduct">
      <div class="inputLabel">Đơn giá <span>(*)</span></div>
      <input :style="[price ?'' : {borderColor: priceErr}]" type="number" v-model="price" placeholder="Nhập đơn giá sản phẩm">
      <p v-show="priceErr&&price===''">Giá sản phẩm không được để trông</p>
    </div>
    <div class="inputProduct">
      <div class="inputLabel">Số lượng <span>(*)</span></div>
      <input :style="[quantity ?'' : {borderColor: quantityErr}]" type="number" v-model="quantity" placeholder="Nhập số lượng sản phẩm">
      <p v-show="quantityErr&&quantity===''">Số lượng phẩm không được để trông</p>
    </div>
    <button v-if="checkEdit" class="addButton" @click="editInput()">Sửa</button>
    <button v-else class="addButton" @click="dataInput()">Tạo mới</button>
    <button class="clearButton" @click="clearInput()">Hủy</button>
  </div>
</template>

<script>
export default {
  props: ['name','price','quantity','checkEdit'],
  data () {
    return {
      nameErr: '',
      priceErr: '',
      quantityErr: ''
    }
  },
  methods: {
    dataInput () {
      if (this.name === '' || this.price === '' || this.quantity === '') {
        if (this.name === '') {
          this.nameErr = 'red';
        }
        if (this.price === '') {
          this.priceErr = 'red';
        }
        if (this.quantity === '') {
          this.quantityErr = 'red';
        }
      }else {
        this.$emit('onSubmitInput',['SP'+new Date().getTime(),this.name,parseInt(this.price),parseInt(this.quantity)])
        this.name = '';
        this.price = '';
        this.quantity = '';
      }
    },
    editInput () {
      if (this.name === '' || this.price === '' || this.quantity === '') {
        if (this.name === '') {
          this.nameErr = 'red';
        }
        if (this.price === '') {
          this.priceErr = 'red';
        }
        if (this.quantity === '') {
          this.quantityErr = 'red';
        }
      }else {
        this.$emit('editSubmitInput',[this.name,parseInt(this.price),parseInt(this.quantity)])
        this.name = '';
        this.price = '';
        this.quantity = '';
        this.checkEdit = false;
      }
    },
    clearInput () {
      this.name = '';
      this.price = '';
      this.quantity = '';
    }
  }
}

</script>

<style lang="scss" scoped>
.product {
  border: 1px solid #dae2eb;
  padding: 25px;
  width: 300px;
  margin: 10px;
  text-align: right;
  h3 {
    text-align: left;
    color: #0080dd;
  }
  .inputProduct {
    margin-bottom: 15px;
    .inputLabel {
      font-weight: bold;
      margin-bottom: 8px;
      text-align: left;
      span {
        color: red;
      }
    }
    input {
      width: 100%;
      height: 30px;
      outline: none;
      border-radius: 5px;
      border: 1px solid #dae2eb;
    }
    p {
      text-align: left;
      font-size: 12px;
      margin: 5px 0px;
      color: red;
    }
  }
  button {
    display: inline-block;
    justify-content: space-between;
    padding: 10px;
    border-radius: 5px;
    margin: 10px;
    border: unset;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
  }
  .addButton {
    background-color: #0080dd;
    color: white;
  }
  .clearButton {
    background-color: #d8e0ea;
  }
}
</style>
