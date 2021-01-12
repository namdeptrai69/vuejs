<template>
  <div class="container">
    <table >
      <tr  v-for="(product,index) in products" :key="index">
        <td>{{product.name}}</td>
        <td>{{product.price}}</td>
        <td>{{product.quaity}}</td>
      </tr>
    </table>
  </div>


</template>

<script>
export default {
  data () {
    return {

      products:[
        {name: 'iphoen1', price: '233245',quaity: 5},
        {name: 'iphoen2', price: '234343245',quaity: 3},
        {name: 'iphoen3', price: '2342313245',quaity: 6},
      ]
    }
  },
  methods: {


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
