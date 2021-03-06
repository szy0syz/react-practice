import React, { Component } from 'react';
import { createStore } from '../redux';

// 0. 初始化action的常量名
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

// 1. 创建reducer管理员
let reducer = (state = { list: [] }, action) => {
  if (action === undefined) { return state; }
  switch (action.type) {
    case ADD_TODO:
      return { list: [...state.list, action.text] }
    case DELETE_TODO:
      let list = state.list;
      list.splice(action.index, 1);
      // reducer的状态具有不变性，每次都要返回一个新的对象
      return { list: [...list] };
    default:
      return state;
  }
}

// 2. 创建store
// createStore中会默认调用一次dispatch()
let store = createStore(reducer);

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { list: store.getState().list };
  };

  componentWillMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({ list: store.getState().list });
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