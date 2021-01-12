<template>
  <div class="container">
    <div class="table-container">
      <table>
        <tr class="ten-bang">
          <td>STT</td>
          <td>Sản phẩm</td>
          <td>Giá</td>
          <td>Số lượng</td>
          <td>Trạng thái</td>
          <td>Hành động</td>
        </tr>

        <tr v-for="(product,index) in products" :key="index">
          <td>{{product.id}}</td>
          <td>
            <div>
              <img v-if="product.image" :src="product.image" alt="">
              <img v-else src="https://thailamlandscape.vn/wp-content/uploads/2017/10/no-image.png" alt="">
              <span>{{ product.name }}</span>
            </div>
          </td>
          <td>{{ product.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'}) }}</td>
          <td>{{ product.quantity }}</td>
          <td v-if="product.quantity > 0" style="color: green">Còn hàng</td>
          <td v-else style="color: red">Hết hàng</td>
          <td><button @click="addCard(product.id)">Thêm vào giỏ hàng</button></td>
        </tr>
      </table>
    </div>
    <div class="card">
      <h1>Giỏ hàng</h1>
      <div class="order">
        <p v-if="list == ''" style="text-align: center; margin: 50px 0px">Không có sản phẩm nào được thêm vào giỏ hàng</p>
        <table v-else>
          <tr v-for="(product,index) in list" :key="index">
            <td>
              <div>
                <img v-if="product.image" :src="product.image" alt="">
                <img v-else src="https://thailamlandscape.vn/wp-content/uploads/2017/10/no-image.png" alt="">
                <div>
                  <p style="font-weight: bold">{{ product.name }}</p>
                  <p>{{ product.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'}) }}</p>
                </div>
              </div>
            </td>
            <td><input type="number" @keydown.enter="addQuantity(product.id)" v-model="product.quantity"></td>
            <td><button @click="deleteCard(product.id)">Xóa</button></td>
          </tr>
        </table>
      </div>
      <p class="sum">Tổng tiền: {{ (sum).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}}</p>
    </div>
  </div>

</template>

<script>
export default {
  data(){
    return{
      sum: 0,
      list: [],
      products: [
        {
          id: 1,
          name: 'iPhone 12 Pro Max Chính Hãng',
          image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/h/photo_2020-10-13_22-12-24.jpg_1_2.png',
          price: 32990000,
          quantity: 566,
        },
        {
          id: 2,
          name: 'iPhone 12 Chính Hãng (VN/A)',
          image: '',
          price: 21790000,
          quantity: 123,
        },
        {
          id: 3,
          name: 'iPhone 11 Chính hãng',
          image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/_/0/_0004_layer_5.jpg',
          price: 16690000,
          quantity: 0,
        },
        {
          id: 4,
          name: 'Apple iPhone XR 64GB Chính hãng(VN/A)',
          image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-xr_5_.jpg',
          price: 12190000,
          quantity: 1023,
        },
        {
          id: 5,
          name: 'iPhone 11 Pro Max Chính hãng(VN/A)',
          image: '',
          price: 26500000,
          quantity: 6,
        }
      ]
    }
  },
  methods:{
    addCard (id) {
      let index;
      for (let i = 0;i< this.products.length ; i++){
        if (this.products[i].id === id){
          index = i;
        }
      }
      if (this.products[index].quantity <= 0) {
        alert('Sản phẩm hết hàng');
      }else {
        if (this.checkList(id)) {
          for (let i = 0;i< this.list.length ; i++){
            if (this.list[i].id === id){
              this.list[i].quantity += 1;
            }
          }
        }else {
          this.list.push(
              {
                id: this.products[index].id,
                name: this.products[index].name,
                image: this.products[index].image,
                price: this.products[index].price,
                quantity: 1,
              }
          );
        }
        for (let i = 0;i< this.list.length ; i++){
          if (this.list[i].id === id){
            this.sum += this.list[i].price;
          }
        }
      }
    },
    checkList (id) {
      for (let i = 0;i< this.list.length ; i++){
        if (this.list[i].id === id){
          return true;
        }
      }
      return false;
    },
    addQuantity (id) {
      for (let i = 0;i< this.list.length ; i++){
        if (this.list[i].id === id){
          // this.sum = this.list[i].price * this.quantityData;
          alert('Chưa làm xong')
        }
      }
    },
    deleteCard (id) {
      for (let i = 0;i< this.list.length ; i++){
        if (this.list[i].id === id){
          this.sum -= this.list[i].price * this.list[i].quantity;
          this.list.splice(i,1);
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  text-align: left;
  width: 100%;
  display: flex;

  .table-container table {
    border: 1px solid #CCC;
    border-collapse: collapse;
    text-align: center;

    .ten-bang td{
      background-color: #f2f6fe;
      border: 1px solid #CCC;
      padding: 10px;
      font-weight: bold;
    }
    td {
      border-left: 1px solid #CCC;
      padding: 10px;
      div {
        text-align: left;
        display: flex;
        align-items:center;
        span {
          color: #0080dd;
        }
        img {
          width: 48px;
          margin-right: 15px;
        }
      }
      button {
        padding: 10px;
        border: none;
        outline: none;
        cursor: pointer;
        color: white;
        background-color: #0080dd;
        border-radius: 10px;
        transition: .5s;
      }
      button:hover {
        background-color: #42b983;
        color: yellow;

      }
    }
  }

  .card {
    padding: 16px;
    border: 1px solid #CCC;
    width: 29%;
    margin-left: 1%;

    .order table {
      border-collapse: collapse;

      td {
        border-bottom: 1px solid #CCC;
        padding: 10px;

        div {
          text-align: left;
          display: flex;
          align-items: center;

          img {
            width: 48px;
            margin-right: 15px;
          }
          div {
            display: block;
            p{
              margin: 0;
              text-overflow: ellipsis;
              overflow: hidden;
              width: 160px;
              height: 1.2em;
              white-space: nowrap;
            }
          }
        }

        input {
          width: 50px;
        }

        button {
          padding: 10px;
          border: none;
          outline: none;
          cursor: pointer;
          color: white;
          background-color: red;
          border-radius: 10px;
          transition: .5s;
        }

        button:hover {
          background-color: yellow;
          color: red;

        }
      }
    }
    .sum {
      float: right;
      margin-top: 100px;
      font-weight: bold;
      color: red;
    }
  }
}
</style>
