import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>1</strong>
          <span>item left</span>
        </span>
        <ul className="filters">
          <li>
            <a className="selected">All</a>
          </li>
          <li>
            <a className="">Active</a>
          </li>
          <li>
            <a className="">Computed</a>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
