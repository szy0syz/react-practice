import React, { Component } from 'react';

const Profile = ({ user }) => (<div>username: {user.name}</div>);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: { name: 'Jerry Shi' },
    };
  }
  handleClick() {
    this.setState({ user: null });
  }
  render(){
    return(
      <div>
        <Profile></Profile>
        <button onClick={this.handleClick}></button>
      </div>
    )
  }
}