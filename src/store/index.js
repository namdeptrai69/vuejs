import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
      //Bài 1
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
      ],
      cartProducts: [],
      //Bài 2
      products2: [],
        product: {}
  },
  getters: {
      //Bài 1
    total: state => {
        let result = 0
        state.cartProducts.map((product) => {
          result += product.quantity * product.price
        })
        return result.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") + ' đ'
      },
      //Bài 2
  },
  mutations: {
      //Bài 1
    cartProductsHi (state,name) {
        state.cartProducts.push(name)
    },
    cartProductsInCart (state,index) {
        state.cartProducts[index].quantity = parseInt(state.cartProducts[index].quantity) + 1
    },
    cartProductsDe (state,index) {
        state.cartProducts.splice(index,1)
    },
    //Bài 2
    cartProductsBai2 (state,name) {
        state.products2.push(name)
    },
    onUpdateProductBai2 (state,editableProduct) {
        let index = state.products2.findIndex((product) => {return product.id === editableProduct.id})
        if (index !== -1) {
          let newProducts = JSON.parse(JSON.stringify(state.products2))
          newProducts[index] = {
            ...newProducts[index],
            name: editableProduct.name,
            price: editableProduct.price,
            quantity: editableProduct.quantity,
          }
          state.products2 = newProducts
        }
    },
    editProductBai2 (state,product) {
        state.product = product
    },
    deleteProductBai2 (state,index) {
        state.products2.splice(index, 1)
    },
    clearDataBai2 (state) {
        state.product = {}
    }
  }
})

export default store