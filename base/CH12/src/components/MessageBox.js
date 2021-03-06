import React, { Component } from 'react';
import MessageList from './MessageList'
import MessageForm from './MessageForm'
class MessageBox extends Component {
  state = {
    messages: [
      { username: '阿大', content: '今年大夏天', creactAt: new Date() },
      { username: '阿二', content: '明年要期末考了，怎么办', creactAt: new Date() },
      { username: '阿三', content: '我要去印度当个阿三', creactAt: new Date() },
      { username: '阿四', content: '走走走，看电影', creactAt: new Date() },
    ]
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
              <MessageList messages={this.state.messages}></MessageList>
              </div>
              <div className="panel-footer"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MessageBox;