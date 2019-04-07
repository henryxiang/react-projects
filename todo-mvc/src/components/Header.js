import React, { Component } from "react";
import TodoInput from './TodoInput';
export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <TodoInput />
      </header>
    );
  }
}
