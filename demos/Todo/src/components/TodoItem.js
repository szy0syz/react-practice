import React from 'react';

const TodoItem = (props) => (
  <li className="list-group-item">
    <div className="row">
      <div className="col-md-1">
        <input type="checkbox" />
      </div>
      <div className="col-md-10">
        {props.todo.title}
      </div>
      <div className="col-md-1">
        <button className="btn btn-danger btn-xs">X</button>
      </div>
    </div>
  </li>
);

export default TodoItem;