import React, { Component } from 'react';
import { store } from '../store/store';
import { ADD_TODO, DELETE_TODO } from '../store/actionTypes';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { list: store.getState().todo.list };
  };

  componentWillMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({ list: store.getState().todo.list });
    });
  };

  componentWillUnmount() {
    this.unsubscribe();
  };

  handleKeyDown = (e) => {
    if (e.keyCode === 13 && e.target.value.length > 0) {
      // let list = this.state.list;
      // list.push(e.target.value);
      // this.setState({ list });
      // e.target.value = '';
      store.dispatch({
        type: ADD_TODO,
        text: e.target.value
      });
      e.target.value = '';
    }
  };

  handleDetele = (e) => {
    let index = e.target.parentNode.dataset['id'];
    store.dispatch({
      type: DELETE_TODO,
      index
    });
  };

  render() {
    return (
      <div>
        <input onKeyDown={this.handleKeyDown} type="text" />
        <ul>
          {
            this.state.list.map((todo, index) => (
              <li key={index} data-id={index}>{todo} <button onClick={this.handleDetele}>-</button></li>)
            )
          }
        </ul>
      </div>
    );
  };
}