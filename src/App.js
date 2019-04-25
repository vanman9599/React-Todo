import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

import "./components/TodoComponents/Todo.css";

const todos = [
  {
    name: "Take out the garbage",
    id: 123,
    purchased: false
  },
  {
    name: "Make Breakfast",
    id: 124,
    purchased: false
  },
  {
    name: "Watch Lecture",
    id: 1235,
    purchased: false
  },
  {
    name: "Work on project",
    id: 1246,
    purchased: false
  },
  {
    name: "Go to Standup Meeting",
    id: 1237,
    purchased: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos
    };
  }

  addItem = item => {
    
    this.setState({
      todos: [
        ...this.state.todos,
        { name: item, purchased: false, id: Date.now() }
      ]
    });
  };

  toggleComplete = id => {
   
    this.setState({
      todos: this.state.todos.map(item =>
        item.id === id ? { ...item, purchased: !item.purchased } : item
      )
    });
  };

  removePurchased = () => {
 
    this.setState({
      todos: this.state.todos.filter(item => !item.purchased)
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>To Do List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          todos={this.state.todos}
          toggleComplete={this.toggleComplete}
        />
        <button onClick={this.removePurchased}>Clear Completed Tasks</button>
      </div>
    );
  }
}

export default App;