<template>
  <div class="body">
    <div class=container>
      <div class="todo">
        <h1>Todo App</h1>
        <input @keydown.enter="enter" v-model="todoData" type="text" placeholder="Nhập công việc và bấm enter để thêm">
      </div>
      <p v-if="lists.length<=0">Chưa có task nào được thêm</p>
      <div v-else class="todoMain">
        <TodoItem v-for="(list,index) in lists" :key="index" :todoData="lists[index]" @deleteItem="clearItem(index)"/>
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  components: {
    TodoItem
  },
  data () {
    return {
      todoData: '',
      lists: []
    }
  },
  methods: {
    enter () {
      if (this.todoData === '') {
        alert('Nhập gì đó đi đã :3');
        return;
      }
      this.lists.push(this.todoData);
      this.todoData = '';
    },
    clearItem (index) {
      this.lists.splice(index,1);
    }
  }
}
</script>

<style lang="scss" scoped>
.body {
  background-color: #0080dd;
  position: relative;
  padding: 50px;
  text-align: center;
  .container {
    display: inline-block;
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    width: 50%;
    height: 500px;
    .todo {
      h1{
        color: #39cd74;
      }
      input {
        width: 99%;
        height: 40px;
        outline: none;
        border: 1px solid #dae2eb;
        border-radius: 10px;
      }
    }
    p {
      color: #f54b5e;
      margin-top: 180px;
    }
    .todoMain{
      margin: 47px 0px;
      height: 300px;
      overflow-y: scroll;
      overflow-x: hidden;
    }
  }
}
</style>
