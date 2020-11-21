<template>
    <div class="todo-list">
      <ul v-if="list.length>0" class="border">
        <todo-item
          :obj="item"
          :num="index"
          :key="index"
          v-for="(item,index) in list"
        ></todo-item>
      </ul>
    </div>
</template>

<script>
  import storage from '../common/js/storage'
  import TodoItem from './TodoItem'
  import {mapState} from 'vuex'
  export default {
    name: 'TodoList',
    components:{
      TodoItem
    },
    computed:{
      ...mapState(['list'])
    },
    watch:{
      list:{
        deep:true,
        handler:function (newVal) {
          console.log(newVal)
          storage.save(newVal)
        }
      }
    }
  }
</script>

<style lang="less" scoped>
.todo-list {
  margin-top: 30px;
  ul{
    &.border {
      border: 1px solid #dddddd;
    }
  }
}
</style>
