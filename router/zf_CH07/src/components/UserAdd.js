import React, { Component } from 'react';
export default class UserAdd extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // 默认不阻止跳转
      blocking: false
    };
  }

  handleSubmit = () => {
    let name = this.name.value;
    let usersStr = localStorage.getItem('users');
    let users = usersStr ? JSON.parse(usersStr) : [];
    users.push({ id: Date.now(), name });
    localStorage.setItem('users', JSON.stringify(users));
    this.props.history.push('/user/list'); //跳转路由咯
  };

  render() {
    return ( // when属性无论如何都必须确保是Boolean类型的
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">用户名</label>
          <input type="text" ref={ref => this.name = ref} className="form-control" />
        </div>
        <div className="form-group">
          <input className="btn btn-primary" type="submit" />
        </div>
      </form>
    );
  };
}