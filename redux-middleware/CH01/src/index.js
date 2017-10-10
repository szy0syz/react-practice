import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from './redux';

let reducer = (state = 0, action) => {
  if (action) {
    switch (action.type) {
      case "ADD":
        return state + 1;
      case "SUB":
        return state - 1;
      default:
        return state;
    }
  } else {
    return state;
  }
};

let store = createStore(reducer);

console.log('初始化完：', store.getState());
store.dispatch({ type: "ADD" });
console.log('dispatch +1：', store.getState());
