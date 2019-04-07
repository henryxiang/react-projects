import "todomvc-app-css/index.css";
import React, { Component } from "react";
import Todo from "../models/todo";
import Header from "../components/Header";
import TodoList from "../components/TodoList";
import Footer from "../components/Footer";

class TodoApp extends Component {
  state = {
    todos: [
      new Todo("Taste JavaScript", true),
      new Todo("Buy a unicorn")
    ]
  };
  render() {
    const { todos } = this.state;
    return (
      <section className="todoapp">
        <Header />
        <TodoList todos={todos} />
        <Footer />
      </section>
    );
  }
}

export default TodoApp;
