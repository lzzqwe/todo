const TODO_KEY = 'todo_key'

export default {
  read() {
    return JSON.parse(localStorage.getItem(TODO_KEY) ||"[]")
  },
  save(todos) {
    return JSON.stringify(localStorage.setItem(TODO_KEY,JSON.stringify(todos)))
  },
}
