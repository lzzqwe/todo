<template>
  <div id="app">
    <todo-header @addTodo="addTodo"></todo-header>
    <todo-list @delete="deleteItem" :list="list"></todo-list>
    <todo-footer :deleteAll="deleteAll" :selectAll="selectAll" :list="list"></todo-footer>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'
import storage from './common/js/storage.js'
export default {
  name: 'App',
  data() {
    return {
      list:storage.read()
    }
  },
  methods:{
    addTodo(value) {
     this.list.push(value)
    },
    deleteItem(index) {
      confirm('确认要删除这个元素吗？')
      this.list.splice(index,1)
    },
    selectAll(isSelectAll) {
      this.list.forEach((todo) => {
        todo.complete = isSelectAll
      })
    },
    deleteAll() {
      this.list = this.list.filter((todo) => {
        return !todo.complete
      })
    }
  },
  computed:{
    todoLength() {
      return this.list.length
    }
  },
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  },
  watch:{
    list:{
      deep:true,
      handler:function (newVal,oldVal) {
        storage.save(newVal)
      }
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 600px;
  margin: 100px auto;
  padding: 10px;
  border: 1px solid #dddddd;
}
</style>
