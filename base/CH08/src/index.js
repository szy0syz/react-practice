import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Sum extends Component {

  handleChange = (e) => {
    let a = parseInt(this.a.value ||  0, 0);
    let b = parseInt(this.refs.b.value || 0, 0);
    this.refs.c.value = a + b
  };

  render() {
    return (
      <div onChange={this.handleChange}>
        <input ref={ref => this.a = ref} type="text" />
        +
        <input ref="b" type="text" />
        =
        <input ref="c" type="text" />
      </div>
    );
  }
}

ReactDOM.render(<Sum></Sum>, document.getElementById('root'));