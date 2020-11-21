<template>
  <div class="todo-header">
    <input placeholder="请输入你的任务名称，按回车键确认"
           @keyup.enter="add"
           v-model="value"
           class="todo-header-input"
           type="text">
  </div>
</template>

<script>

export default {
  name: 'TodoHeader',
  data() {
    return {
      value:''
    }
  },
  methods:{
    add() {
      const value = this.value.trim()
      if(value==='') {
        alert('必须要输入才可以的')
        return
      }
      let todo = {
        title:value,
        complete:false
      }
      console.log(todo)
      this.$store.commit('addTodo',todo)
      this.value=''
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.todo-header {
  .todo-header-input {
    width: 100%;
    box-sizing: border-box;
    font-size: 16px;
    line-height: 30px;
    padding: 0 10px;
  }
}
</style>
