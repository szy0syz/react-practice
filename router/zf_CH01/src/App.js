import React, { Component } from 'react';

import {
  // v4版本后，路由称为“生命式路由”
  HashRouter as Router, // route的容器
  Route // 一条路由
} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  Root = () => {
    return <h1 style={{ color: "red" }}>Root</h1>;
  }

  Home = () => {
    return <h2>Home</h2>;
  };

  User = () => {
    return <h2>User</h2>;
  };

  Profile = () => {
    return <h2>Profile</h2>;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <Router>
            <div>
              <Route path="/" component={this.Root}></Route>
              <Route path="/home" component={this.Home}></Route>
              <Route path="/User" component={this.User}></Route>
              <Route path="/profile" component={this.Profile}></Route>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
