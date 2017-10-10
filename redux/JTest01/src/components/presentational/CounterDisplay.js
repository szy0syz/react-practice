import React from 'react';
import { connect } from 'react-redux';

const CounterDisplay = props => (
  
)

let mapStateToProps = (state) => ({
  displayNum: state.number
});

export default connect(mapStateToProps)(CounterDisplay);