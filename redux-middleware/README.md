## Redux-middleware

[TOC]

### CH01：复习redux原理实现



------

### CH02：实现日志中间件

> 说实话，一开始用函数式编程真有点吃力。看了一咪咪函数式编程的资料后我才发现原来大神写的`react-graphQL-HN`那些操作全是函数式的，一开始看还真有点看不懂。

![p1](https://raw.githubusercontent.com/zhufengnodejs/201701redux-middleware/master/imags/1.redux.png)

![2](https://raw.githubusercontent.com/zhufengnodejs/201701redux-middleware/master/imags/2.middleware.png)

------

### CH03：实现redux-thunk

```js
let thunk = store => next => action => {
  if (typeof action === 'function') { return action(next); }
  return next(action);
};

store.dispatch((dispatch) => { setTimeout(() => dispatch({ type: "SUB" }), 3000) });
```

------

### CH04：实现redux-promise

实现原理：
  - 构建promise中间件，格式还是：`store => next => action`
  - 在嵌套函数最里层判断`isPromise`
  - 如果是就调用`action.then()`，在then中那promise的resolve返回值data，此时返回值就是真正的action，这时在调用`next(data)`
  - 如果不是promise就老老实实按套路调用`next(action)`

```js
let promise = store => next => action => {
  if (isPromise(action)) {
    return action.then((data) => next(data));
  }
  next(action);
};
let isPromise = obj => obj.then;
////////////////
store.dispatch(new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ type: "ADD" });
  }, 3000);
}));
```