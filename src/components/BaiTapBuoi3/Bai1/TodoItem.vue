<template>
  <div class="TodoItem">
    <input @click="check" v-model="checkData" type="checkbox">
    <span :style="{textDecoration: styleText}">{{ todoData }}</span>
    <button v-show="checkData" @click="deleteItem">Xóa</button>
  </div>
</template>

<script>
export default {
  props: ['todoData'],
  data () {
    return {
      checkData: '',
      styleText: ''
    }
  },
  methods: {
    check () {
      if (this.checkData) {
        this.styleText = '';
      }else {
        this.styleText = 'line-through';
      }
    },
    deleteItem () {
      this.$emit('deleteItem')
      this.styleText = '';
      this.checkData = '';
    }
  }
}
</script>

<style lang="scss" scoped>
.TodoItem {
  padding: 20px 0px;
  border-bottom: 1px solid #dae2eb;
  text-align: left;
  input {
    margin: 11px 10px 11px 0px;
  }
  button {
    float: right;
    color: white;
    font-weight: bold;
    background-color: #f54b5e;
    border: none;
    outline: none;
    padding: 10px;
    border-radius: 5px;
    margin-right: 25px;
  }
}
</style>
