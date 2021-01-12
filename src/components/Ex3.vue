<template>
  <div class="container">
    <input @focus="click" @keydown.enter="search()" v-model="tk" :style="{borderColor: a}" type="text" name="" id="">

    <p >{{dulieu}}</p>

    <table v-if="list.length <= 0">
      <tr>
        <td>STT</td>
        <td>Sản phẩm</td>
        <td>Giá</td>
        <td>Số lượng</td>
        <td>Trạng thái</td>
      </tr>
      <tr v-for="(product,index) in products" :key="index">
        <td>{{index+1}}</td>
        <td>{{ product.name }}</td>
        <td><img :src="product.image" alt=""></td>
        <td>{{ product.price }}</td>
        <td>{{ product.quantity }}</td>
        <td>{{ product.isAvailable }}</td>
      </tr>

    </table>

    <table v-else>
      <tr>
        <td>STT</td>
        <td>Sản phẩm</td>
        <td>Giá</td>
        <td>Số lượng</td>
        <td>Trạng thái</td>
      </tr>

      <tr v-for="(product,index) in list" :key="index">

        <td>{{ product.name }}</td>
        <td><img :src="product.image" alt=""></td>
        <td>{{ product.price }}</td>
        <td>{{ product.quantity }}</td>
        <td>{{ product.isAvailable }}</td>
      </tr>

    </table>
  </div>

</template>

<script>
export default {
  data(){
    return{
      a: 'red',
      tk: '',
      dulieu: '',
      list: [],
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
    click(){
      this.a = 'blue';
    },
    search(){
      this.list = [];
      if (this.tk === ''){
        this.dulieu = 'San pham khong ton tai'
      }else{
        this.dulieu = '';
        this.products.forEach(product => {
          if (product.name.toLowerCase().includes(this.tk)){
            this.list.push(product)
          }else{

            // this.dulieu = 'San pham khong ton tai'
          }
        })
      }

    }
  }
}
  
</script>

<style lang="scss" scoped>
.container {

}
</style>
