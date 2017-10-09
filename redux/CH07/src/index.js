import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { PropTypes } from 'prop-types';

class Contatiner extends Component {
  getChildContext() {
    // 返回一个对象，这个对象就是子组件的context对象
    return { color: 'red' }
  }

  render() {
    return (
      <MessageList messages={this.props.messages}></MessageList>
    )
  }
}

Contatiner.childContextTypes = {
  color: PropTypes.string
}

class MessageList extends Component {
  render() {
    return (
      <ul>
        {
          this.props.messages.map((m, i) => (
            <Message key={i} message={m}></Message>
          ))
        }
      </ul>
    )
  }
}

class Message extends Component {
  render() {
    return (
      <li style={{ color: this.context.color }}>{this.props.message}</li>
    );
  }
}

Message.contextTypes = {
  color: PropTypes.string
};

let messages = [1, 2, 3, 4];
// let color = 'blue';
ReactDOM.render(<Contatiner messages={messages} />, document.querySelector('#root'));