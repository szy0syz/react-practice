# React-Router-v4学习笔记

## zf_CH01 跑通路由

![router1](http://ofx24fene.bkt.clouddn.com//img/react/Router1.png)

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

## zf_CH04 实现用户管理

- ref: `reference` 引用
  - 先在某个虚拟元素上 特性上加入ref，ref内部是一个回调函数，函数第一个参数就是当这个虚拟元素mount挂载到页面并生成的那个dom元素，对，就是dom元素！
  - 只是栗子中的`this.name`取得好土。

```js
class UserAdd extends Component {
  handler = () => {
    let name = this.name.value;
  }
  render(){
    return(
      <input type="text" ref={ref => this.name = ref} />
    );
  };
}
```

## zf_CH05 Switch组件

- `react-router-dom`中的`Switch`，表示只对其内部Route实体进行一次匹配，不像正则那么贪婪。
- `exact`也是对Route实体进行精确匹配

```js
<Switch>
  <Route path="/" exact render={props => <div style={{ background: 'red' }}>首页</div>}></Route>
  <Route path="/:pathname" render={props => props.match.params.pathname}></Route>
  <Route path="/home" component={Home}></Route>
  <Route path="/user" component={User}></Route>
  <Route path="/profile" component={Profile}></Route>
</Switch>
```
