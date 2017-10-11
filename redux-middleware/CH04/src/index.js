// import React from 'react';
// import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from './redux';

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

// 中间件一：logger组件
// let logger = store => dispatch => action => {
//   console.log('before: ', store.getState());
//   console.log('action', action);
//   dispatch(action);
//   console.log('after: ', store.getState());
// };

// 中间件二：thunk组件
// let thunk = store => next => action => {
//   if (typeof action === 'function') { return action(next); }
//   return next(action);
// };

let promise = store => next => action => {
  if (isPromise(action)) {
    return action.then((data) => next(data));
  }
  next(action);
};

let isPromise = obj => obj.then;

// let store = createStore(reducer);
let store = applyMiddleware(promise)(createStore)(reducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: "ADD" });
store.dispatch({ type: "ADD" });
store.dispatch(new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ type: "ADD" });
  }, 3000);
}));
// store.dispatch((dispatch) => { setTimeout(() => dispatch({ type: "SUB" }), 3000) });