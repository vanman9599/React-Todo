import React from 'react';
import ToDo from  './Todo'
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
const TodoList = props => {
    return(
        <div>
            <h1>ToDo List</h1>
            {props.todoList.map((item) => {
                return (
                    <ToDo 
                    item={item}
                    key={item.id}/>
                )
            })}
        </div>
    )
}

export default TodoList;