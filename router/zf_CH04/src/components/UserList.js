import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class UserList extends Component {
  constructor() {
    super();
    this.state = { users: [] };
  }

  componentWillMount() {
    let usersStr = localStorage.getItem('users');
    let users = usersStr ? JSON.parse(usersStr) : [];
    this.setState({ users }); // es6
  }

  render() {
    return (
      <ul className="list-group">
        {
          this.state.users.map((user) => (
            <li className="list-group-item" key={user.id}>
              <Link to={"/user/detail/" + user.id}>{user.name}</Link>
            </li>
          ))
        }

      </ul>
    );
  };
}