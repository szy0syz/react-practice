import React, { Component } from 'react';
import { createStore } from '../redux';

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// state是状态树，可以是任意的结构
// action是一个纯对象，但规定死了必须有一个属性type: {type: 'INCREASE'} / {type: 'DECREASE'}
let reducer = (state = { number: 0 }, action) => {
  if (action === undefined) { return state; }
  switch (action.type) {
    case INCREASE:
      return { number: state.number + action.amount }
    case DECREASE:
      return { number: state.number - action.amount }
    default:
      return { number: state }
  }
}
// store = {getState, subscribe, dispatch}
let store = createStore(reducer);

export default class Counter extends Component {
  constructor() {
    super();
    this.state = { number: store.getState().number };

  }
  componentWillMount(){
    this.unsubscribe = store.subscribe(() => {
      this.setState({number: store.getState().number});
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
        <button onClick={() => store.dispatch({ type: DECREASE, amount: 2 })}>+</button>
      </div>
    );
  }
}