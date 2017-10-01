import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Sum extends Component {
  constructor(){
    super();
    this.state = {
      a: 0,
      b: 0,
      c: 0
    };
  };

  handleChange = (e) => {
    let tar = e.target;
    let cur = parseInt(tar.value, 0);
    if(tar.id === "a") {
      this.setState({
        a: cur,
        c: cur + this.state.b
      });
    } else {
      this.setState({
        b: cur,
        c: cur + this.state.a
      });
    }
    
  };

  render(){
    return(
      <div>
        <input id="a" onChange={this.handleChange} value={this.state.a} type="text"/>
        +
        <input id="b" onChange={this.handleChange} value={this.state.b} type="text"/>
        =
        <input value={this.state.c} type="text"/>
      </div>
    );
  }
}

ReactDOM.render(<Sum></Sum>, document.getElementById('root'));

// class JerryInput extends Component {
//   constructor() {
//     super();
//     this.state = {
//       val: 'jerry'
//     };
//   }

//   handleChange = (e) => {
//     this.setState({val: e.target.value});
//   }

//   render() {
//     return (
//       <div>
//         <p>{this.state.val}</p>
//         <input onChange={this.handleChange} type="text" value={this.state.val} />
//       </div>
//     );
//   }
// }