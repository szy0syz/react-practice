# Redux基础学习笔记

## CH01: redux应用场景和工作原理

![redux1](http://ofx24fene.bkt.clouddn.com//img/react/react-redux-scene.png)


## CH02: 2. redux & jquery应用

- 第一步：创建一个基本导出的模块结构
  - 那么问题来了`reducer`是写死的还是传进来的呢？答案为传进来了，因为每个业务操作都不一样。

```js
const createStore = () => {
  let state;
}
export { createStore }
```

- `reduce` 永远只有一个`store`。如果老实复杂了，可以使用`state tree`。
- 为了初始化仓库里的`state`，一般我们会在`createStore`内部先调用一次`dispatch()`，这样避免第一次没发送`action`时`state`为`undefined`。
- 新建`reducer`时，如果action没初始化就啥也不管直接返回`state`。
- 在reducer的switch中用action.type最好用常量。

- 第二步：写完redux简单模拟实现

```js
// 创建仓库
const createStore = (reducer) => {
  // 状态
  let state;
  // 监听函数数组
  let listeners = [];
  // 获取最新的实时状态
  let getState = () => state;
  // 向仓库发送action
  let dispatch = (action) => {
    // 两个参数分别是：原state状态和传进来的指令。相当于用传来的执行action修改原state后返回新state
    // reducer最后返回新的state
    state = reducer(state, action);
    // 依次循环所有监听者们执行一次
    listeners.forEach(listener => listener())
  };
  // 订阅仓库内的状态事件，当状态发生变化后会调用对应的监听函数
  // 订阅方法执行后会返回一个取消订阅的函数，调用它可以取消订阅
  let subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      // 在现有监听者们中过滤掉传进来的这个监听者
      listeners = listeners.filter(l=>listener !== l);
    }
  };
  // 为了没action时初始化state
  dispatch();
  return { 
    getState,
    subscribe,
    dispatch
  }
}
export { createStore }
```


