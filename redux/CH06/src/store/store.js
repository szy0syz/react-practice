import { createStore } from '../redux';

/**
 * 旧状态 {number:0}, {list:[]}
 * 新状态 { counter: {number:0}, todo: {list:[]} }
 */

import counter from './reducers/counter';
import todo from './reducers/todo';

// 此时虽然我们有两个state的管理员reducer，但是createStore没法同时传入两个reducer，所以我们得给他们俩个找个“爹”。
// 高阶函数
let combineReducers = (reducers) =>
  // 在tm记一遍：每个reducer都需要返回默认值，因为有内部初始化渲染dispatch的需要！
  (state = { counter: { number: 0 }, todo: { list: [] } }, action) => { // 必须返回一个reducer(es6写法，买买，这种写法好语法糖啊！！！)
    if(!action) return state;
    let newState = {};
    for (var key in reducers) { // todo, counter 两个key
      // newState[key] = reducers[key]; // 不能这样写，因为reducers[key]取来的是reducer，不是state啊。
      newState[key] = reducers[key](state[key], action);
    }
    return newState;
  }


// 这里用了es6写法
let reducer = combineReducers({ counter, todo });

let store = createStore(reducer);
// console.log(store.getState());
export { store }