import React, { Component } from "react";
import { observer } from 'mobx-react'
import TodoHeader from './TodoHeader';
import TodoFooter from './TodoFooter';
import TodoList from './TodoList';
import TodoModel from '../models/Todo';
import TodoListModel from '../models/TodoList';

const todo1 = new TodoModel('Clean up room', true);
const todo2 = new TodoModel('Home work');
const todo3 = new TodoModel('Buy some milk');
const todos = [todo1, todo2, todo3];
const appContext = new TodoListModel(todos);

class TodoApp extends Component {
  render() {
    return (
      <section className="todoapp">
        <TodoHeader appContext={appContext} />
        <section className="main">
          <input id="toggle-all" className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <TodoList appContext={appContext} />
        </section>
        <TodoFooter appContext={appContext} />
      </section>
    );
  }
}

export default observer(TodoApp)
