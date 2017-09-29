import React, { Component } from 'react';

export default class UserDetail extends Component {
  render() {
    // this.props 有三个属性
    // 1. history 跳转路由的路径
    // 2. match 匹配结果 只有匹配上才是对象，否则是null
    // 3. localtion 当前路径对象，含pathname
    let id = this.props.match.params.id;
    let usersStr = localStorage.getItem('users');
    let users = usersStr ? JSON.parse(usersStr) : [];
    let user = users.find(u => u.id === Number(id));
    return (
      <table className="table table-responsive">
        <thead>
          <tr>
            <td>ID</td>
            <td>姓名</td>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>{user.id}</td>
          <td>{user.name}</td>
        </tr>
        </tbody>
      </table>
    );
  };
}