import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Person extends Component {
  // this.props的默认属性对象，自动自动帮你赋值
  static defaultProps = {
    name: '无名氏'
  };
  
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <span>{this.props.name}</span>
      </div>
    );
  };
}

ReactDOM.render(<Person></Person>, document.getElementById('root'));