# React-Router-v4练习说明

## zf_CH01 跑通路由

## zf_CH02 完成组件简单模块化和引入bootstrap

## zf_CH03 嵌套路由

### HashRouter 与 BrowserRouter关系

- HashRouter的路由样式：`http://localhost:3000/#/home`
  - 这个HashRouter肯定和HTML5有关，后面再详细研究
  - 我猜这个路由应该适配WebAPP的，这个因为HashRouter需要用到Stack(栈：先进后出)
- BrowserRouter的路由样式: `http://localhost:3000/home`
  - 这个就是简单的浏览器样式

- 当在PC端使用HashRouter路由时，重复点某个导航(Link)时会报这样一个错：
  - `Warning: Hash history cannot PUSH the same path; a new entry will not be added to the history stack`
  - 提示我们push到stack里相同的路径
  - 原理解释如下图：

![err1](http://ofx24fene.bkt.clouddn.com//img/react/react_router_stack.png)

### 效果图
![CH03](http://ofx24fene.bkt.clouddn.com//img/react/zf_router03.gif)