# React v16特性测试

[TOC]

## 01. 用 `Error Boundary` 处理错误

### 使用方法

1. 新建ErrorBoundary类组件
2. 在其构造函数中初始化`this.state = { hasError: false };`
3. `componentDidCatch(err, info) {this.setState({ hasError: true });}`
4. 在render中检测`this.state.hasError`是否为true，是就错误处理，不是就返回`return this.props.children;`
5. 然后用这个组件包裹可能会出错的组件

## 02. 在 `render` 中返回没有容器元素的多个元素


## 03. 用 `Text Only Component` 减少 `DOM` 层级


## 04. 用 `createPortal` 把组件渲染到当前组件树之外


## 05. 更加自由的 `DOM` 属性


## 06. 在 `setState` 时用 `null` 避免不必要的渲染