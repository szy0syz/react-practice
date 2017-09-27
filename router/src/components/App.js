import React, { Component } from 'react';
import {
  // v4版本后，路由称为“生命式路由”
  HashRouter as Router, // route的容器
  Route // 一条路由
} from 'react-router-dom';
import logo from '../logo.svg';
import './App.css';

import Home from './Home';
import User from './User';
import Profile from './Profile';

class App extends Component {
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
              <Route path="/home" component={Home}></Route>
              <Route path="/User" component={User}></Route>
              <Route path="/profile" component={Profile}></Route>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
