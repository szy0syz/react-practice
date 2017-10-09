import React, { Component } from 'react';
import { createStore } from '../redux';
import reducer from '../store/reducers/counter';
let store = createStore(reducer);
export default class Counter2 extends Component {
  constructor() {
    super();
    this.state = { val: store.getState().number };
  }

  componentWillMount(){
    this.unsubscribe = store.subscribe(() => {
      this.setState({ val: store.getState().number})
    });
  }

  componentWillUnmount(){

  }

  render() {
    return (
      <div>
        <p>{this.state.val}</p>
        <button>+</button>
        <button>-</button>
      </div>
    );
  }
}