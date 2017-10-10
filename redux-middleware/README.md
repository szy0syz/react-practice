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