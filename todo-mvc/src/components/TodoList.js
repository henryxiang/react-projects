import React, { Component } from "react";
import Todo from "./Todo";
export default class TodoList extends Component {
  render() {
    const { todos } = this.props;
    return (
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label for="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {todos.map(todo => (
            <Todo todo={todo} />
          ))}
        </ul>
      </section>
    );
  }
}
