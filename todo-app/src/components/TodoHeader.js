import React, { Component } from 'react'
import { observer } from 'mobx-react'

class TodoHeader extends Component {
  state = {
    input: ''
  }

  onSubmit = (event) => {
    const { appContext } = this.props
    event.preventDefault();
    appContext.createNewTodo(this.state.input)
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
            value={this.state.input}
            className="new-todo" 
            placeholder="What needs to be done?" 
            autoFocus />
        </form>
			</header>
    )
  }
}

export default observer(TodoHeader)
