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

let logger = store => dispatch => action => {
  console.log('before: ', store.getState());
  console.log('action', action);
  dispatch(action);
  console.log('after: ', store.getState());
}
// let logger2 = function(store) {
//   return function(next) {
//     return function(action) {

//     }
//   }
// }

// let store = createStore(reducer);
let store = applyMiddleware(logger)(createStore)(reducer);

store.dispatch({ type: "ADD" });
store.dispatch({ type: "ADD" });
store.dispatch({ type: "SUB" });