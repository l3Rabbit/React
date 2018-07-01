import React, { Component } from "react";

class Todoitem extends Component {

delete=()=>{
  let id = this.props.id;
  console.log('TodoItem', id);
  this.props.delete(id)
}
handleToggle=()=>{
  const{id,completed} = this.props
  this.props.onCheck(id,!completed)
}

  render() {
    const className = this.props.completed ?'completed':'';
   return(
    <li className={className} key={this.props.Key}>
    <div className="view">
      <input type="checkbox" className="toggle" checked={this.props.completed} onClick={this.handleToggle} />
      <label>{this.props.text}</label>
      <button onClick={this.delete}type="button" className="destroy" />
    </div>
  </li>
   )
}
}

export default Todoitem;
