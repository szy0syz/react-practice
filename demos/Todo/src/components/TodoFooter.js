import React, { Component } from 'react';
import * as FilterTypes from '../filterTypes';

export default class TodoFooter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-3">
          <a style={{ textDecoration: 'none' }}>待办事项 <span className="badge">{this.props.activeTodoCount}</span></a>
        </div>
        <div className="col-md-6 text-center">
          <button
            onClick={() => this.props.changeFilterType(FilterTypes.ALL)}
            className={`btn btn-sm ${this.props.filterType === FilterTypes.ALL ? 'btn-success' : 'btn-default'}`}>
            全  部
          </button>
          <button
            onClick={() => this.props.changeFilterType(FilterTypes.ACTIVE)}
            style={{ marginLeft: '10px' }}
            className={`btn btn-sm ${this.props.filterType === FilterTypes.ACTIVE ? 'btn-success' : 'btn-default'}`}>
            未完成
          </button>
          <button onClick={() => this.props.changeFilterType(FilterTypes.COMPLETED)}
            style={{ marginLeft: '10px' }}
            className={`btn btn-sm ${this.props.filterType === FilterTypes.COMPLETED ? 'btn-success' : 'btn-default'}`}>
            已完成
          </button>
        </div>
        <div className="col-md-3">

        </div>
      </div>
    );
  }
}