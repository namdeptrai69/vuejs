<template>
  <div class="container">
    <productForm @onSubmitInput="hend" @editSubmitInput="edi" :name="name" :price="price" :quantity="quantity" :checkEdit="checkEdit"/>
    <productList :products="products" @editProduct="editProduct"/>
  </div>
</template>

<script>
import productForm from "./ProductForm";
import productList from "./ProductList";

export default {
  data () {
    return {
      name: '',
      price: '',
      quantity: '',
      checkEdit: false,
      indexProduct: 0,
      products: [],
    }
  },
  components: {
    productForm,
    productList
  },
  methods: {
    hend (data){
      this.products.push(
        {
          id: data[0],
          name: data[1],
          price: data[2],
          quantity: data[3]
        }
      );
      this.checkEdit = false;
    },
    edi (data) {
      this.products[this.indexProduct].name= data[0];
      this.products[this.indexProduct].price= data[1];
      this.products[this.indexProduct].quantity= data[2];
    },
    editProduct (data) {
      this.indexProduct = data[0];
      this.name = data[1].name;
      this.price = data[1].price;
      this.quantity = data[1].quantity;
      this.checkEdit = true;
    }
  }
}

</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  height: 500px;

}
</style>
