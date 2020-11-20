<template>
    <div class="todo-footer">
      <input v-model="checkAll" class="checkbox" type="checkbox">
      <span>已完成{{ completeSize}}/全部{{ this.list.length  }}</span>
      <button class="clear" v-show="completeSize" @click="delAll">清除已完成任务</button>
    </div>
</template>

<script>
  export default {
    name: 'TodoFooter',
    props:{
      list:{
        type:Array,
        default:() => []
      },
      selectAll:{
        type:Function
      },
      deleteAll:{
        type:Function
      }
    },
    methods:{
      delAll() {
        this.deleteAll()
      }
    },
    computed:{
      completeSize() {
        return this.list.reduce((acc,cur) =>acc+(cur.complete?1:0) ,0 )
      },
      checkAll: {
        get() {
          return this.list.length === this.completeSize && this.completeSize >0
        },
        set(value) {
          this.selectAll(value)
        }
      }
    }
  }
</script>

<style lang="less" scoped>
.todo-footer {
  margin-top: 20px;
  text-align: left;
  line-height: 40px;
  .checkbox {
    margin-right: 10px;
  }
  .clear {
    float: right;
    padding: 5px 10px;
    border-radius: 5px;
    border: none;
    margin-top: 8px;
    background-color: crimson;
  }
}
</style>
