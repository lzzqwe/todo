<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-list></todo-list>
    <todo-footer></todo-footer>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'
export default {
  name: 'App',
  methods:{
    _selectAll(isSelectAll) {
      this.$store.commit('selectAll',isSelectAll)
    },
    _deleteAll() {
      this.$store.commit('deleteAll')
    }
  },
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  },
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
