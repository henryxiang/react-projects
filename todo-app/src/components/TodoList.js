import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Todo from './Todo'

class TodoList extends Component {
  render() {
    const { appContext } = this.props
    const { todos } = appContext
    const listItems = todos.map(todo => <Todo key={todo.id} 
        name={todo.name} completed={todo.completed} appContext={appContext} />)
    return (
      <ul className="todo-list">
      {
        listItems
      }
      </ul>
    )
  }
}

export default observer(TodoList)