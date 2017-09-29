// 当通过函数来定义组件时，参数必须传个属性props对象。
// 而这个props是哪来的呢？是谁调用这个组件就是它的父组件，这个props就由父组件传递。
// 函数和类声明组件的区别？类声明的组件比函数声明的组件多一个状态，因为类会实例化嘛。
// 哪什么时候用函数声明组件呢？当声明的组件不需要状态(例如路由组件)时就可以用函数式声明，反之需要状态的组件要用类声明。
// export default function(props) {
// props = {path: "/profile", component: Profile}
// rest是[剩余参数运算符]: rest = path: "/profile"
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
// 注意1：这里是结构的格式 前面那个component是结构出来的外来形参，Component是函数作用域内的实参
// 注意2：从路由中导出的Redirect的to属性会封装接收的对象转移到子组件的props.lcocation上
export default function ({ component: Component, ...rest }) {
  return <Route {...rest} render={(props)=>
    localStorage.getItem('login') === 'true' ? <Component /> : <Redirect to={{ pathname: '/login', state: { from: props.location.pathname } }} />
  } />
}