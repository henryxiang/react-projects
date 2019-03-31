import React, { Component } from 'react'

export default class TodoHeader extends Component {
  state = {
    input: ''
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.input)
    this.setState({ input: '' });
  }

  onInputChange = (event) => {
    event.preventDefault();
    this.setState({ input: event.target.value }); 
  }

  render = () => {
    return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={this.onSubmit}>
          <input 
            onChange={this.onInputChange}
            className="new-todo" 
            placeholder="What needs to be done?" 
            autofocus />
        </form>
			</header>
    )
  }
}
