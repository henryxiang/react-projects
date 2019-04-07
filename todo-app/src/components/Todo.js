import React, { Component } from 'react'
import { observer } from 'mobx-react'
class Todo extends Component {  
  onToggle = () => {
    const { id, appContext } = this.props
    appContext.toggleTodoStatus(id)
  }

  onDelete = () => {
    const { id, appContext } = this.props
    appContext.deleteTodo(id)
  }

  render() {
    const { name, completed } = this.props
    const status = completed ? "completed" : ""
    return (
      <li className={status}>
        <div className="view">
          <input className="toggle" type="checkbox" defaultChecked={completed} onClick={this.onToggle}/>
          <label>{name}</label>
          <button className="destroy" onClick={this.onDelete}></button>
        </div>
      </li>
    )
  }
}

export default observer(Todo);