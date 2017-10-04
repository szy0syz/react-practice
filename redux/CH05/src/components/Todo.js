import React, { Component } from 'react';
export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['吃饭', '睡觉', '起床']
    };
  }

  handleKeyDown = (e) => {
    if (e.keyCode === 13 && e.target.value.length > 0) {
      let list = this.state.list;
      list.push(e.target.value);
      this.setState({ list });
      e.target.value = '';
    }
  };

  render() {
    return (
      <div>
        <input onKeyDown={this.handleKeyDown} type="text" />
        <ul>
          {
            this.state.list.map((todo, index) => (<li>{todo}</li>))
          }
        </ul>
      </div>
    );
  };
}