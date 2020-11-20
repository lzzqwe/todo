## 1 单向数据流

vue的数据只能父组件 进行修行修改 子组件不能修改 否则会发生报错

## 2 data为什么是一个对象

data作为独立的对象  在拆分组件的时候 每个子组件会保持自己的独立数据  子组件相互之间不会发生影响

## 3 watch

deep设置为true 会深度监听对象和数组

handle函数 会执行监听字段的变化 然后执行需要的函数操作

## 4 数组api

reduce filter splice  push

## 5 浏览器存储 localstorage

```
const TODO_KEY = 'todo_key'

export default {
  read() {
    return JSON.parse(localStorage.getItem(TODO_KEY) ||"[]")
  },
  save(todos) {
    return JSON.stringify(localStorage.setItem(TODO_KEY,JSON.stringify(todos)))
  },
}

```







