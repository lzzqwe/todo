import Vue from 'vue'
import storage from '../common/js/storage.js'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:storage.read()
  },
  mutations: {
   addTodo(state,value) {
     console.log(value)
     state.list.unshift(value)
   },
   deleteItem(state,{index}) {
    state.list.splice(index,1)
   },
    selectAll(state,isSelectAll) {
      state.list.forEach((item) => {
        item.complete = isSelectAll
      })
    },
    deleteAll(state) {
      state.list = state.list.filter((item) => {
        return !item.complete
      })
    }
  },
  getters:{
    //完成的数量
   completeSize(state) {
     return state.list.reduce((acc,cur) => {
       return acc + (cur.complete?1:0)
     },0)
   },// 判断是否全选
    isAllSelect(state,getters) {
     return getters.completeSize === getters.totalSize && getters.completeSize > 0
    },
    totalSize(state) {
     return state.list.length
    }
  },
  actions: {

  }
})
