import React, { Component } from 'react';

class MessageList extends Component {
  handleClick = (e) => {
    this.props.removeMessage(e.target.parentNode.dataset['id']);
  };

  render() {
    return (
      <ul className="list-group">
        {
          this.props.messages.map((msg, index) => {
            return (
              <li data-id={index} key={index} className="list-group-item">
                {msg.username}: {msg.content} &nbsp;&nbsp; <button onClick={this.handleClick} className="btn btn-danger btn-sm">删除</button> &nbsp;&nbsp; <span className="pull-right">{msg.createAt.toLocaleString()}</span>
              </li>
            );
          })
        }
      </ul>
    );
  }
}

export default MessageList;