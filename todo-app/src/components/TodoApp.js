import React, { Component } from "react";
import TodoHeader from './TodoHeader';
import TodoFooter from './TodoFooter';
import TodoList from './TodoList';
import TodoModel from '../models/Todo';

const todo1 = new TodoModel('Clean up room', true);
const todo2 = new TodoModel('Home work');
const todo3 = new TodoModel('Buy some milk');
const todos = [todo1, todo2, todo3];

export default class TodoApp extends Component {
  state = {
    todos: todos
  }

  deleteTodo = (name) => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.name === name);
    console.log('delete todo app', name)
    todos.splice(index, 1);
    this.setState({ todos });
  }

  render() {
    return (
      <section class="todoapp">
        <TodoHeader />
        <section class="main">
          <input id="toggle-all" className="toggle-all" type="checkbox" />
          <label for="toggle-all">Mark all as complete</label>
          <TodoList todos={todos} deleteTodo={this.deleteTodo} />
        </section>
        <TodoFooter />
      </section>
    );
  }
}
