import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    let todo = this.props.todo;
    return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-md-1">
            <input onChange={() => this.props.toggle(todo.id)} checked={todo.completed} type="checkbox" />
          </div>
          <div className="col-md-10" style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
            {todo.title}
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