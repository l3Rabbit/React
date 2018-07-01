import React, { Component } from "react";
import Todoitem from "./todoitem";

class Main extends Component {

  render() {
    const liNodes = this.props.todos.map(todo => {
      return (
        <Todoitem key={todo.id} id={todo.id} text={todo.text} delete={this.props.onReset} completed={todo.completed} onCheck={this.props.onCheck}></Todoitem>
      );
    });
    return (
      <section className="main">
        <button  onClick={this.props.onReset}>Clear todos</button>
        <input type="checkbox" className="toggle-all" />
        <ul className="todo-list">{liNodes}</ul>
      </section>
    );
  }
}

export default Main;
