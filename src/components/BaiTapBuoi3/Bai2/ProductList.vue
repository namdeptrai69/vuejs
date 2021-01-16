<template>
  <div class="table-container">
    <table>
      <tr class="ten-bang">
        <td>Mã sản phẩm</td>
        <td>Sản phẩm</td>
        <td>Giá</td>
        <td>Số lượng</td>
        <td>Trạng thái</td>
        <td>Hành động</td>
      </tr>
      <tr v-if="products == ''">
        <td colspan="6" style="border-right: 1px solid #CCC; border-bottom: 1px solid #CCC">Không có dữ liệu</td>
      </tr>
      <tr v-for="(product,index) in products" :key="index">
        <td>{{product.id}}</td>
        <td style="color: #0080dd"> {{product.name}}</td>
        <td>{{ product.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'}) }}</td>
        <td>{{ product.quantity }}</td>
        <td v-if="product.quantity > 0" style="color: green">Còn hàng</td>
        <td v-else style="color: red">Hết hàng</td>
        <td>
          <button @click="edit(index)" style="background-color: chocolate;">Sửa</button>
          <button @click="destr(index)" style="background-color: red">Xóa</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ['products'],
  data (){
    return {

    }
  },
  methods: {
    edit (index){
      this.$emit('editProduct',[index,this.products[index]])
    },
    destr (index) {
      this.products.splice(index,1);
    }
  }
}

</script>

<style lang="scss" scoped>
.table-container table {
  border: 1px solid #CCC;
  border-collapse: collapse;
  text-align: center;
  margin: 10px;

  .ten-bang td{
    background-color: #f2f6fe;
    border: 1px solid #CCC;
    padding: 15px;
    font-weight: bold;
  }
  td {
    border-left: 1px solid #CCC;
    padding: 15px;
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
      border: unset;
      cursor: pointer;
      color: white;
      border-radius: 5px;
      margin: 5px;
    }
    .edit {
      background-color: chocolate;
    }
  }
}
</style>
