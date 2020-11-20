<template>
    <div class="todo-list">
      <ul v-if="this.list.length>0" class="border">
        <todo-item
          :obj="item"
          :num="index"
          :key="index"
          v-for="(item,index) in list"
          @deleteItem="deleteItem"
        ></todo-item>
      </ul>
    </div>
</template>

<script>
  import TodoItem from './TodoItem'
  export default {
    name: 'TodoList',
    components:{
      TodoItem
    },
    data() {
      return {
        bgColor:'white',
        isShow:false
      }
    },
    methods:{
      deleteItem(index) {
        this.$emit('delete',index)
      }
    },
    props:{
      list:{
        type:Array,
        default:() =>([])
      }
    },
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
