
let createStore = (reducer) => {
  // 1. 创建这个闭包内的state，其实只需要开辟一个内存空间就行，其他不用管。
  let state;
  let listeners = []; // 用于存储订阅者们的监听器
  // 2. 创建store获取state的方法，就一函数，调用就返回闭包内的state就行
  let getState = () => state;
  // 3. 创建订阅方法，返回一个函数，这个方法需要一个数据存储订阅者们，用户可以通过这个方法将订阅者推入数据，状态变化时就通知所有订阅者们，状态变了你自己看着办。
  let subscribe = (listener) => {
    // 将新的订阅者的监听器存入当前闭包的容器中
    listeners.push(listener); // 必须返从数据删除这个监听器方法函数回去
    return () => {
      // 都是整些引用啊，老火，引擎会不会乱啊
      listeners = listeners.filter((l) => l !== listener);
    }
  };

  // 5. 发射命令
  let dispatch = action => { // 高阶函数来一个
    state = reducer(state, action);
    listeners.forEach(l => l());
  }

  // 6. 初始化state
  dispatch();

  // 99. 返回一个对象
  return {
    getState,
    dispatch,
    subscribe
  }
};

export { createStore }