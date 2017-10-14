import React, { Component } from 'react';
export default class TodoFooter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <a style={{ textDecoration: 'none' }}>待办事项 <span className="badge">{this.props.activeTodoCount}</span></a>
        </div>
        <div className="col-md-4">

        </div>
        <div className="col-md-4">

        </div>
      </div>
    );
  }
}