import React, { Component } from "react";
export default class Todo extends Component {
  render() {
    const { todo, toggleCompleted, deleteTodo } = this.props;
    return (
      <li key={todo.id} className={todo.completed ? "completed" : ""}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            defaultChecked={todo.completed}
            onClick={() => {toggleCompleted(todo.id)}}
          />
          <label>{todo.task}</label>
          <button className="destroy" onClick={() => deleteTodo(todo.id)} />
        </div>
        <input className="edit" value="Create a TodoMVC template" />
      </li>
    );
  }
}
