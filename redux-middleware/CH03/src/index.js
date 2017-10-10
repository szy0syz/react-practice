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

// let logger = store => dispatch => action => {
//   console.log('before: ', store.getState());
//   console.log('action', action);
//   dispatch(action);
//   console.log('after: ', store.getState());
// };

let thunk = store => next => action => {
  if (typeof action === 'function') { return action(next); }
  return next(action);
};

// let store = createStore(reducer);
let store = applyMiddleware(thunk)(createStore)(reducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: "ADD" });
store.dispatch({ type: "ADD" });
store.dispatch((dispatch) => { setTimeout(() => dispatch({ type: "SUB" }), 3000) });