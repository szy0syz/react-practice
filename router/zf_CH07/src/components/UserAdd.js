import React, { Component } from 'react';
import { Prompt } from 'react-router-dom' // Prompt弹出框
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
    // 这也玩回调，我也是醉了。
    this.setState({blocking: false}, () => {
      this.props.history.push('/user/list'); //跳转路由咯
    });
  };

  handleChange = (e) => {
    let inpValue = e.target.value;
    this.setState({
      blocking: Boolean(inpValue && inpValue.length > 0)
    });
  };

  render() {
    return ( // when属性无论如何都必须确保是Boolean类型的
      <div>
        <Prompt when={this.state.blocking}
          message={(location) => `确定跳转到${location.pathname}吗？`}
        />
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">用户名</label>
            <input onClick={this.handleChange} type="text" ref={ref => this.name = ref} className="form-control" />
          </div>
          <div className="form-group">
            <input className="btn btn-primary" type="submit" />
          </div>
        </form>
      </div>

    );
  };
}