import { observable, action } from 'mobx'
import Todo from './Todo'

class TodoList {
  todos = null

  constructor(todos = []) {
    this.todos = observable(todos);
  }

  createNewTodo = action(name => {
    const todo = new Todo(name);
    this.todos.push(todo);
  })

  deleteTodo = action(id => {
    const index = this.todos.findIndex(todo => todo.id === id);
    if (index >= 0 && index < this.todos.length) {
      this.todos.splice(index, 1);
    }
  })

  toggleTodoStatus = action(id => {
    const index = this.todos.findIndex(todo => todo.id === id);
    if (index >= 0 && index < this.todos.length) {
      this.todos[index].completed = !this.todos[index].completed
    }
    console.log(index, this.todos[index].completed) 
  })
}

export default TodoList
