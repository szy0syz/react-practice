import React, { Component } from 'react';
import { store } from '../store/store';
import {INCREASE, DECREASE} from '../store/actionTypes';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { number: store.getState().counter.number };

  }
  componentWillMount(){
    this.unsubscribe = store.subscribe(() => {
      this.setState({number: store.getState().counter.number});
    });
  }
  componentWillUnmount(){
    this.unsubscribe();
  }
  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={() => store.dispatch({ type: INCREASE, amount: 3 })}>+</button>
        <button onClick={() => store.dispatch({ type: DECREASE, amount: 2 })}>-</button>
      </div>
    );
  }
}