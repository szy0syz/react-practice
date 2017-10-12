import React from 'react';

const TodoItem = (props) => (
  <li className="list-group-item">
    <div className="row">
      <div className="col-md-1">
        <input type="checkbox" />
      </div>
      <div className="col-md-10">
        2017-10-12: 今天昆明下好的的雨。
      </div>
      <div className="col-md-1">
        <button className="btn btn-danger btn-xs">X</button>
      </div>
    </div>
  </li>
);

export default TodoItem;