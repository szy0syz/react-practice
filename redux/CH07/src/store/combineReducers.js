// 此时虽然我们有两个state的管理员reducer，但是createStore没法同时传入两个reducer，所以我们得给他们俩个找个“爹”。
// 高阶函数
let combineReducers = (reducers) =>
  // 在tm记一遍：每个reducer都需要返回默认值，因为有内部初始化渲染dispatch的需要！
  // counter: { number: 0 }, todo: { list: [] }
  (state = {}, action) => { // 必须返回一个reducer(es6写法，买买，这种写法好语法糖啊！！！)
    // if (!action) return state; // 这里不需要，因为在子reducer里会有默认值处理
    let newState = {};
    for (var key in reducers) { // todo, counter 两个key
      // newState[key] = reducers[key]; // 不能这样写，因为reducers[key]取来的是reducer，不是state啊。
      // reducers[key](state[key], action); 我们不能传整个state进去，我们只能传key对应的老的state传进去
      newState[key] = reducers[key](state[key], action);
    }
    return newState;
  }

export default combineReducers;