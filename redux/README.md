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
