<template>
    <div class="todo-footer">
      <input v-model="checkAll" class="checkbox" type="checkbox">
      <span>已完成{{ $store.getters.completeSize}}/全部{{ $store.state.list.length  }}</span>
      <button class="clear" v-show="$store.getters.completeSize" @click="delAll">清除已完成任务</button>
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
        this.$store.commit('deleteAll')
      }
    },
    computed:{
      checkAll: {
        get() {
         return this.$store.getters.isAllSelect
        },
        set(isSelectAll) {
          this.$store.commit('selectAll',isSelectAll)
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
