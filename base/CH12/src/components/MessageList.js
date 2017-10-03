import React, { Component } from 'react';

class MessageList extends Component {
  // state = {  }
  render() {
    return (
      <ul className="list-group">
        {
          this.props.messages.map((msg, index) => {
            return (
              <li key={index} className="list-group-item">
                {msg.username}: {msg.content} <span className="pull-right">{msg.creactAt.toLocaleString()}</span>
              </li>
            );
          })
        }
      </ul>
    );
  }
}

export default MessageList;