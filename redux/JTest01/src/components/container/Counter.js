import React from 'react';
import { connect } from 'react-redux';

let Operator = (props) => (
  <div>
    <p>{props.displayNumber}</p>
    <button onClick={props.onADD}>+</button>
    <button onClick={props.onSUB}>-</button>
  </div>
)

let mapStateToProps = (state) => ({
  displayNumber: state.number
});

let mapDispatchToProps = (dispatch) => ({
  onADD: dispatch({ type: "ADD", amount: 5 }),
  onSUB: dispatch({ type: "ADD", amount: 3 })
})

export default connect(mapStateToProps, mapDispatchToProps)(Operator)