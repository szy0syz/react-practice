import React, { Component } from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import './MessageBox.css';
class MessageBox extends Component {
  state = {
    messages: [
      { username: '阿大', content: '今天太阳好大哦', createAt: new Date() },
      { username: '阿二', content: '明年要期末考了，怎么办？', createAt: new Date() },
      { username: '阿三', content: '我要去印度当个阿三', createAt: new Date() },
      { username: '阿四', content: '走走走，煎饼果子来一套，😋', createAt: new Date() },
    ]
  };

  addMessage = (message) => {
    // 每次都要新生产一个数组
    let messages = [...this.state.messages, message];
    this.setState({ messages });
  };

  removeMessage = (index) => {
    console.log(index);
    this.state.messages.splice(index, 1);
    this.setState({ messages: [...this.state.messages] })
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h2 className="text-center">欢迎来到宇宙级留言板</h2>
              </div>
              <div className="panel-body">
                <MessageList removeMessage={this.removeMessage} messages={this.state.messages}></MessageList>
              </div>
              <div className="panel-footer">
                <MessageForm addMessage={this.addMessage}></MessageForm>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MessageBox;