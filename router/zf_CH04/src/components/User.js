import React, { Component } from 'react';
import {
  Link,
  // BrowserRouter as Router,
  Route
} from 'react-router-dom';

import UserList from './UserList';
import UserAdd from './UserAdd';

export default class User extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-2">
          <ul className="nav nav-stacked">
            <li><Link to="/user/list">用户列表</Link></li>
            <li><Link to="/user/add">新增用户</Link></li>
          </ul>
        </div>
        <div className="col-sm-10">
          {/* 嵌套路由开始了，这个是嵌套的内容切换显示的地~~~ */}
          <Route path="/user/list" component={UserList}/>
          <Route path="/user/add" component={UserAdd} />
        </div>
      </div>
    )
  }
}