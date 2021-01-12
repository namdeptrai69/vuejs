<template>
  <div class="container">
    <div class="search" :style="{border: colorBorder}">
      <img src="https://www.flaticon.com/svg/static/icons/svg/622/622669.svg" alt="">
      <input @keydown.enter="search()" @focus="hoveColor" @focusout="hoveColor2" v-model="searchData" type="text" placeholder="Tìm kiếm theo tên sản phẩm"/>
      <img @click="remove" v-show="searchData !== ''" style="cursor: pointer" src="https://www.flaticon.com/svg/static/icons/svg/1828/1828778.svg" alt="">
    </div>

    <div class="table-container">
      <table>
        <tr class="ten-bang">
          <td>STT</td>
          <td>Sản phẩm</td>
          <td>Giá</td>
          <td>Số lượng</td>
          <td>Trạng thái</td>
        </tr>

        <tr v-if="list == '' && saveSearchData">
          <td colspan="5" style="border-right: 1px solid #CCC; border-bottom: 1px solid #CCC">Sản phẩm không tồn tại</td>
        </tr>

        <tr v-else-if="list == ''" v-for="(product,index) in products" :key="index">
          <td>{{index+1}}</td>
          <td>
            <div>
              <img v-if="product.image" :src="product.image" alt="">
              <img v-else src="https://thailamlandscape.vn/wp-content/uploads/2017/10/no-image.png" alt="">
              <span>{{ product.name }}</span>
            </div>
          </td>
          <td>{{ product.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'}) }}</td>
          <td>{{ product.quantity }}</td>
          <td v-if="product.isAvailable" style="color: green">Còn hàng</td>
          <td v-else style="color: red">Hết hàng</td>
        </tr>

        <tr v-else v-for="(product,index) in list" :key="index">
          <td>{{index+1}}</td>
          <td>
            <div>
              <img v-if="product.image" :src="product.image" alt="">
              <img v-else src="https://thailamlandscape.vn/wp-content/uploads/2017/10/no-image.png" alt="">
              <span>{{ product.name }}</span>
            </div>
          </td>
          <td>{{ product.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'}) }}</td>
          <td>{{ product.quantity }}</td>
          <td v-if="product.isAvailable" style="color: green">Còn hàng</td>
          <td v-else style="color: red">Hết hàng</td>
        </tr>

      </table>
    </div>

  </div>

</template>

<script>
export default {
  data(){
    return{
      colorBorder: '1px solid gray',
      searchData: '',
      list: [],
      saveSearchData: '',
      products: [
        {
          name: 'iPhone 12 Pro Max Chính Hãng',
          image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/h/photo_2020-10-13_22-12-24.jpg_1_2.png',
          price: 32990000,
          quantity: 566,
          isAvailable: true
        },
        {
          name: 'iPhone 12 Chính Hãng (VN/A)',
          image: '',
          price: 21790000,
          quantity: 123,
          isAvailable: true
        },
        {
          name: 'iPhone 11 Chính hãng',
          image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/_/0/_0004_layer_5.jpg',
          price: 16690000,
          quantity: 0,
          isAvailable: false
        },
        {
          name: 'Apple iPhone XR 64GB Chính hãng(VN/A)',
          image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-xr_5_.jpg',
          price: 12190000,
          quantity: 1023,
          isAvailable: true
        },
        {
          name: 'iPhone 11 Pro Max Chính hãng(VN/A)',
          image: '',
          price: 26500000,
          quantity: 45,
          isAvailable: true
        }
      ]

    }
  },
  methods:{
    hoveColor () {
      this.colorBorder = '1px solid #0080dd';
    },
    hoveColor2 () {
      this.colorBorder = '1px solid gray';
    },
    remove () {
      this.searchData = '';
    },
    search(){
      this.saveSearchData = this.searchData
      this.list = this.products.filter(product => {
        return product.name.toLowerCase().match(this.searchData.toLowerCase());
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    text-align: left;
    width: 90%;
    display: inline-block;

    .search {
      width: 250px;
      position: relative;
      padding: 10px;
      border-radius: 20px;

      img {
        width: 18px;
        position: absolute;
      }

      input {
        margin-left: 30px;
        margin-right: 25px;
        border: none;
        outline: none;
      }
    }

    .table-container table {
      margin-top: 50px;
      margin-bottom: 50px;
      border: 1px solid #CCC;
      border-collapse: collapse;
      border-radius: 10px;
      text-align: center;

      .ten-bang td{
        background-color: #f2f6fe;
        border: 1px solid #CCC;
        padding: 16px;
        font-weight: bold;
      }
      td {
        border-left: 1px solid #CCC;
        padding: 16px;
        div {
          text-align: left;
          display: flex;
          align-items:center;
          span {
            color: #0080dd;
            margin-right: 50px;
          }
          img {
            width: 56px;
            margin-right: 30px;
          }
        }
      }
    }
  }
</style>
