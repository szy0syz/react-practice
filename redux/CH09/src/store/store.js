import { createStore } from '../redux';
import combineReducers from './combineReducers';
/**
 * 旧状态 {number:0}, {list:[]}
 * 新状态 { counter: {number:0}, todo: {list:[]} }
 */

import counter from './reducers/counter';
import todo from './reducers/todo';

// 这里用了es6写法
let reducer = combineReducers({ counter, todo });

let store = createStore(reducer);
// console.log(store.getState());
export { store }