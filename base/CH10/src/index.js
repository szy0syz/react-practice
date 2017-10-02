import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

class SubCounter extends Component {

  componentWillReceiveProps(nextProps, nextContent) {
    console.log('*SubCounter componentWillReceiveProps 组件将要接收到Props');
  }

  shouldComponentUpdate(newProps, newState) {
    //console.log('*SubCounter shouldComponentUpdate');
    return newProps.num % 3 === 0;
  }

  render() {
    return (
      <p style={{ border: "1px solid blue" }}>{this.props.num}</p>
    );
  }
}

class Counter extends Component {
  constructor() {
    super();
    this.state = { num: 0 };
  }

  handleClick = () => {
    this.setState({ num: ++this.state.num });
    console.log('this.state.num: ' + this.state.num);
  }

  componentWillMount() {
    console.log('1. componentWillMount -> 组件将要被挂载');
  }

  componentDidMount() {
    console.log('3. componentDidMount  -> 组件挂载完毕');
  }

  shouldComponentUpdate(newProps, newState) {
    console.log('4. shouldComponentUpdate  -> 组件是否要进行更新');
    if (newState.num % 5 === 0) {
      return true;
    } else {
      return false;
    }
  }

  componentWillUpdate() {
    console.log('5. componentWillUpdate 组将将要跟新');
    // 如果shouldComponentUpdate返回false时不调用该函数
  }

  render() {
    console.log('2. render 组件挂载着');
    return (
      <div style={{ border: "1px solid red" }}>
        <p>{this.state.num}</p>
        <button onClick={this.handleClick}>+</button>
        <SubCounter num={this.state.num}></SubCounter>
      </div>
    );
  }
}

ReactDOM.render(<Counter></Counter>, document.getElementById('root')); 