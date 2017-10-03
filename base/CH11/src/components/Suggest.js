import React, { Component } from 'react';
import jsonp from 'jsonp';
export default class Suggest extends Component {

  constructor(){
    super();
    this.state = {
      words: [],
      index: -1 //words数组的索引
    }
  }

  handleChange = (e) => {
    // 要不要考虑下IE
    let wd = e.target.value;
    jsonp(`https://www.baidu.com/su?wd=${wd}`, {
      param: 'cb'
    }, (err, data) => {
      this.setState({words: data.s});
    });
  }

  handleKeyDown = (e) => {
    let code = e.keyCode;
    if (code === 13) {
      console.log('13');
      window.location.href = `https://www.baidu.com/s?wd=${this.state.words[this.state.index]}`;
      return;
    }
    // 当按下的是向上或向下键时
    if (code === 38 || code === 40) {
      let boundary = this.state.words.length -1;
      let index = this.state.index;
      if(code === 38) {
        index--;
        index = index < 0 ? boundary : index;
      }
      if(code === 40) {
        index++;
        index = index > boundary ? 0 : index;
      }
      this.setState({index});
      this.refs.input.value = this.state.words[index];
      
    }
  }
  // value={this.state.words[this.state.index]}
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
            <div className="panel panel-default">
              <div className="panel-heading">
                <input ref="input" onKeyDown={this.handleKeyDown} type="text" onChange={this.handleChange} className="form-control"/>
              </div>
              <div className="panel-body">
                <ul className="list-group">
                  {
                    this.state.words.map((word, index) => {
                      return <li key={index} className={"list-group-item " + (index === this.state.index ? 'active' : '')}>{word}</li>
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}