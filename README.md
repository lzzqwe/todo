## 1 单向数据流

vue的数据只能父组件 进行修行修改 子组件不能修改 否则会发生报错

## 2 data为什么是一个对象

data作为独立的对象  在拆分组件的时候 每个子组件会保持自己的独立数据  子组件相互之间不会发生影响

## 3 watch

deep设置为true 会深度监听对象和数组

handle函数 会执行监听字段的变化 然后执行需要的函数操作

## 4 数组api

reduce filter splice  push

`reduce 是累计数组的意思 一定要记住 [1,2,3,4,5].reduce((acc,cur) => {return`

`acc+cur},initValue)  initValue是初始值的意思` 

```
1.当设置初始值的时候 acc就是设置的初始值 cur就数组的第一个值
```

------

```
filter返回一个符合函数的的元素 由这些元素组成新的数组
splice(index,1)删除某个索引的元素 可以改变数组的 
push 将某个元素的数据加载数组数据的后面
```



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

## 6 git操作

```
1.全局设置用户名和电子邮箱
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
2.基础操作
  git init仓库的初始化
  git add ./ 提交到暂存区
  git commit -m '提交到仓库'
  git remote add origin 设置仓库地址
  git push -u origin master 推送到仓库
  git branch <new-branch> 创建新分支
  git checkout 指定分支  切换分支
  git branch -d 指定分支  删除指定分支
  git remote 分支   合并分支到当前的分支
```

## 7  计算属性 computer

计算属性 依赖data和props的数据 具有缓存的意思 应用场景就是 可以对数据进行js的数据操作 这是由于模板中放太多的逻辑会让模板太重以至于难以维护







