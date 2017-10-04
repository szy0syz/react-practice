# Redux学习笔记及代码

## CH01: redux应用场景和工作原理

- 我的绘画作品

![redux1](http://ofx24fene.bkt.clouddn.com//img/react/react-redux-scene1.png)

- Redux设计思想
  - Redux是将整个应用状态存储到到一个地方，称为`store`,，里面保存一棵状态树(`state tree`)。 组件可以派发(`dispatch`)行为(`action`)给`store`,而不是直接通知其它组件。 组件内部通过订阅`store`中的状态(`state`)来刷新自己的视图。

![redux-flow](http://ofx24fene.bkt.clouddn.com//img/react/redux-flow.png)

-------

## CH02: redux & jquery应用

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

### 动态演示

![redux](http://ofx24fene.bkt.clouddn.com//img/react/redux.gif)

> 哇哈哈，我竟然模拟了redux的实现！

### 手绘复习redux调用流程

![redux-flow-hand](http://ofx24fene.bkt.clouddn.com//img/react/redux-flow-hand.jpeg)

-------

## CH03: redux & react应用

- 第一版: 使用老法子调用redux

```js
import React, { Component } from 'react';
import ReactRom from 'react-dom';
import { createStore } from './redux';

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// state是状态树，可以是任意的结构
// action是一个纯对象，但规定死了必须有一个属性type: {type: 'INCREASE'} / {type: 'DECREASE'}
let reducer = (state = { number: 0 }, action) => {
  if (action === undefined) { return state; }
  switch (action.type) {
    case INCREASE:
      return { number: state.number + action.amount }
    case DECREASE:
      return { number: state.number - action.amount }
    default:
      return { number: state }
  }
}
// store = {getState, subscribe, dispatch}
let store = createStore(reducer);
class Counter extends Component {
  render() {
    return (
      <div>
        <p>{store.getState().number}</p>
        <button onClick={()=>store.dispatch({type: INCREASE, amount: 3})}>+</button>
        <button onClick={()=>store.dispatch({type: DECREASE, amount: 2})}>+</button>
      </div>
    );
  }
}

let render = () => {
  ReactRom.render(<Counter/>, document.querySelector('#root'));
}
render();
store.subscribe(render);
```

- 第二版：使用新方法调用Redux

```js
import React, { Component } from 'react';
import ReactRom from 'react-dom';
import { createStore } from './redux';

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

//  {type: 'INCREASE'} / {type: 'DECREASE'}
let reducer = (state = { number: 0 }, action) => {
  if (action === undefined) { return state; }
  switch (action.type) {
    case INCREASE:
      return { number: state.number + action.amount }
    case DECREASE:
      return { number: state.number - action.amount }
    default:
      return { number: state }
  }
}
// store = {getState, subscribe, dispatch}
let store = createStore(reducer);
class Counter extends Component {
  constructor() {
    super();
    this.state = { number: store.getState().number };

  }
  componentWillMount(){
    this.unsubscribe = store.subscribe(() => {
      this.setState({number: store.getState().number});
    });
  }
  componentWillUnmount(){
    this.unsubscribe();
  }
  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={() => store.dispatch({ type: INCREASE, amount: 3 })}>+</button>
        <button onClick={() => store.dispatch({ type: DECREASE, amount: 2 })}>+</button>
      </div>
    );
  }
}

ReactRom.render(<Counter />, document.querySelector('#root'));
```

-------

## CH04: redux概念回顾

### Redux的大三原则

- 原则一：整个应用的 `state` 被存储在一棵 `object tree` 中，便给这个 `object tree` 只存储在唯一一个 `state`中；
- 原则二：`state` 是只读的，唯一改变 `state` 的方法就是触发 `action`， `action` 是一个用于描述已发生事件的普通对象。`action`经过reducer后会覆盖返回新的`state`覆盖老的`state`；
- 原则三：使用存函数来执行修改，为了描述 `action` 如何改变 `state tree` ，你需要编写 `reducers`。

> 单一数据源的设计让 React 的组件之间的通信更加方便，同时也便于状态的统一管理。

-------

## CH05: redux版todos

13:27 初始化todo.js组件