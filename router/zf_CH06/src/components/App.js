import React, { Component } from 'react';
import {
  // v4版本后，路由称为“生命式路由”
  BrowserRouter as Router, // route的容器
  Route, // 一条路由
  Link,
  Switch
} from 'react-router-dom';

import logo from '../logo.svg'; // 好吧，logo文件都import，我算服了。
import './App.css';

import Home from './Home';
import User from './User';
import Login from './Login';
import Profile from './Profile';
import ProtectedRoute from './ProtectedRoute'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Router>
          <div>
            <nav className="navbar navbar-inverse">
              <div className="container-fluid">
                <div className="narbar-header">
                  <div className="navbar-brand">React用户管理系统</div>
                </div>
                <ul className="nav navbar-nav">
                  <li><Link to="/home">首页</Link></li>
                  <li><Link to="/user">用户管理</Link></li>
                  <li><Link to="/profile">个人设置</Link></li>
                </ul>
              </div>
            </nav>
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <Switch>
                    <Route path="/" exact render={props => <div style={{ background: 'red' }}>首页</div>}></Route>
                    {/* <Route path="/:pathname" render={props => props.match.params.pathname}></Route> */}
                    <Route path="/home" component={Home}></Route>
                    <Route path="/user" component={User}></Route>
                    <Route path="/login" component={Login}></Route>
                    <ProtectedRoute path="/profile" component={Profile}></ProtectedRoute>
                  </Switch>
                </div>
              </div>
            </div>
          </div>

        </Router>
      </div>
    );
  }
}

export default App;
