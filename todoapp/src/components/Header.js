import React, { Component } from "react";

class Header extends Component {
  handleChange = (event) => {
    if (event.keyCode === 13) {
      this.props.todo(this.inputText.value);

      this.inputText.value = '';
    }
  };

  render() {
    return (
      <header className="header">
        <h1>Todo</h1>
        <input
          type="text"
          ref={node => this.inputText = node}
          className="new-todo"
          onKeyUp={this.handleChange}
        />
      </header>
    );
  }
}

export default Header;
