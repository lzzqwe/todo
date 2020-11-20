<template>
  <li :style="{background:bgColor}"
      @mouseenter="handleEnter(true)"
      @mouseleave="handleEnter(false)"
      class="todo-item">
    <input v-model="obj.complete" type="checkbox">
    <span class="text">{{obj.title}}</span>
    <button @click="deleteItem(num)" v-show="isShow" class="btn">删除</button>
  </li>
</template>

<script>
  export default {
    name: 'TodoList',
    props:{
      obj:{
        type:Object
      },
      num:{
        type:Number
      }
    },
    data() {
      return {
        bgColor:'white',
        isShow:false
      }
    },
    methods:{
      handleEnter(isEnter) {
        if(isEnter) {
          this.bgColor='#cccccc'
          this.isShow = true
        } else {
          this.bgColor = '#ffffff'
          this.isShow = false
        }
      },
      deleteItem(index) {
        this.$emit('deleteItem',index)
      }
    },
  }
</script>

<style lang="less" scoped>
  .todo-item {
    text-align: left;
    border-bottom: 1px solid #dddddd;
    line-height: 36px;
    padding-left: 10px;
    &:nth-last-child(1) {
      border: none;
    }
    .text {
      padding-left: 10px;
    }
    .btn {
      padding: 5px 10px;
      border: none;
      background-color: crimson;
      float: right;
      margin-top: 5px;
      border-radius: 5px;
      cursor: pointer;
    }
  }
</style>
