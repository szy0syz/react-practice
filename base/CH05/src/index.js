import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString()
    };
  }
  componentDidMount() {
    window.setInterval(() => {
      this.setState({
        time: new Date().toLocaleString()
      });
    }, 1000);
  }
  render() {
    return (
      <div>
        <span>Datetime:  </span>
        <span>{this.state.time}</span>
      </div>
    );
  };
}

ReactDOM.render(
  <Clock></Clock>,
  document.getElementById('root')
);