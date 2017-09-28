import React, { Component } from 'react';
export default class UserAdd extends Component {

  handleSubmit = () => {
    let name = this.name.value;
    let usersStr = localStorage.getItem('users');
    let users = usersStr ? JSON.parse(usersStr) : [];
    users.push({ id: Date.now(), name });
    localStorage.setItem('users', JSON.stringify(users));

    //跳转路由咯~~
    this.props.history.push('/user/list');
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">用户名</label>
          <input name="name" type="text" ref={ref => this.name = ref} className="form-control" />
        </div>
        <div className="form-group">
          <input className="btn btn-primary" type="submit" />
        </div>
      </form>
    );
  };
}