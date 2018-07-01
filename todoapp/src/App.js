import React, { Component } from "react";
import "./App.css";
import "todomvc-app-css/index.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
class App extends Component {

  state = {
    todos: [
      { id: 1, text: "buy shirt",completed:false },
      { id: 2, text: "Walk the dog" ,completed:true},
      { id: 3, text: "buy game",completed:false },
    ]
  };

  
  handleClick = (id) => {
    console.log('handleClick', id);
    const currentTodo = this.state.todos;
    this.setState({
      todos:currentTodo.filter(todo =>todo.id !== id),
    })
    

    
}
toggleComplete =(id,completed)=>{
  const currentTodo =this.state.todos;
  this.setState({
    todos: currentTodo.map(todo=>{
      if(todo.id === id){
        return{...todo,completed}
      }
      return todo
    })
  });
}
 addTodo =(todoText) => {
  const newId = this.state.todos.length +1;
  const currentTodos = this.state.todos;

  currentTodos.push({id:newId,text:todoText});

  this.setState({
    todos : currentTodos,
  });
 }

  render() {
    return (
      <div className="todoapp">
        <Header todo={this.addTodo}></Header>
        <Main todos ={this.state.todos} onReset={this.handleClick} onCheck={this.toggleComplete}></Main>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
