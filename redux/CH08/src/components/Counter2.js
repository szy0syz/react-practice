import React, { Component } from 'react';
import connect from '../store/connect';
import { INCREASE, DECREASE } from '../store/actionTypes';
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


export default connect(mapStateToProps, mapDispatchToProps)(Counter2);