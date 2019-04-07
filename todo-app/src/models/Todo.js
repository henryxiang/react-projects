import { observable } from 'mobx'
class Todo {
  id = null
  name = observable.box('')
  completed = observable.box(false)

  constructor(name, completed = false) {
    this.id = Math.floor(Math.random()*10000)
    this.name = name
    this.completed = completed
  }
}

export default Todo
