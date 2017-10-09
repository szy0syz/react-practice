import React, { Component } from 'react';
import { createStore } from '../redux';
import reducer from '../store/reducers/counter';
import { INCREASE, DECREASE } from '../store/actionTypes';
let store = createStore(reducer);



class Counter2 extends Component {
  render() {
    return (
      <div>
        <p>{this.props.val}</p>
        <button onClick={this.props.onIncrease}>+</button>
        <button onClick={this.props.onDecrease}>-</button>
      </div>
    );
  }
}





let mapStateToProps = (state) => ({
  val: state.number
});

// 把dispatch方法映射成UI组件的属性
let mapDispatchToProps = (dispatch) => (
  {
    onIncrease: () => dispatch({ type: INCREASE, amount: 3 }),
    onDecrease: () => dispatch({ type: DECREASE, amount: 2 })
  }
);

// mapStateToProps 把store里的状态对象映射成组件属性
let connect = (mapStateToProps, mapDispatchToProps) => (PrivateComponent) => {
  class Proxy extends Component {
    constructor() {
      super();
      this.state = mapStateToProps(store.getState());
      // this.state = {val: store.getState().number};
    }

    componentWillMount() {
      this.unsubscribe = store.subscribe(() => {
        this.setState(mapStateToProps(store.getState()));
      })
    }
  
    componentWillUnmount() {
      this.unsubscribe();
    }

    render() {
      return <PrivateComponent {...this.state} {...mapDispatchToProps(store.dispatch) } />
    }
  }
  return Proxy;
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter2);