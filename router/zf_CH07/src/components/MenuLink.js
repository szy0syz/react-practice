import React from 'react';
import { Route, Link } from 'react-router-dom';
// 这个组件，我们不管它是否匹配，都显示一些东西
// 新的渲染方法：children
// component 对应一个组件 当URL路径跟当前Route path匹配时渲染
// render 对应一个匿名的组件函数 当URL路径跟当前Route path匹配时渲染
// children 

// export default function (props) {
// li的className就可以放判断的表达式
export default function ({ to, label }) {
  // <Route path={to} children={(props) => {
  // 这里结构props里的match了，匹配到路由match有值，没有匹配就没值 
  return (
    <Route path={to} children={({ match }) => {
      return <li className={match ? 'active' : ''}><Link to={to}>{label}</Link></li>
    }} />
  );
}