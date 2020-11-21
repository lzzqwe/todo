const TODO_KEY = 'todo_key'

export default {
  read() {
    return JSON.parse(localStorage.getItem(TODO_KEY) ||'[]')
  },
  save(todos) {
    localStorage.setItem(TODO_KEY, JSON.stringify(todos))
  },
}





