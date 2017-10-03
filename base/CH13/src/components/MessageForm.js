import React, { Component } from 'react';

class MessageForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let username = this.username.value;
    let content = this.content.value;
    this.props.addMessage({username, content, createAt: new Date()});
    this.username.value = '';
    this.content.value = '';
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-froup">
            <label htmlFor="username" className="control-label">用户名</label>
            <input ref={ref => this.username = ref} id="username" type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="content" className="control-label">留言内容</label>
            <input ref={ref => this.content = ref} type="text" className="form-control" />
          </div>
          <div className="form-group">
            <button className="btn btn-primary">留言</button>
          </div>
        </form>
      </div>
    );
  }
}

export default MessageForm;