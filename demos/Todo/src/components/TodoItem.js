import React, { Component } from 'react';

class TodoItem extends Component{
  render(){
    return(
      <li className="list-group-item">
      <div className="row">
        <div className="col-md-1">
          <input type="checkbox" />
        </div>
        <div className="col-md-10">
          {this.props.todo.title}
        </div>
        <div className="col-md-1">
          <button className="btn btn-danger btn-xs">X</button>
        </div>
      </div>
    </li>
    );
  }
}

// const TodoItem1 = (props) => (
// );

export default TodoItem;