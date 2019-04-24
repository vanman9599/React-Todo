import React from 'react';

function ToDo(props) {
   console.log(props);
   return (
      <div className="todo">
        
        <div className="todo-info">
          <h3>{props.item.task}</h3>
          <p>
            <strong>Id:</strong> {props.item.id}
          </p>
          <p>
            <strong>Completed:</strong> {props.item.completed}
          </p>
           
        </div>
      </div>
    );
}

  export default ToDo;