import React from "react";
import Todo from "./Todo";

export default function TodoList(props) {
  return (
    <div className="task-list">
      {props.todos.map(item => (
        <Todo key={item.id} item={item} toggleComplete={props.toggleComplete} />
      ))}
    </div>
  );
}