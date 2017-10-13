import React, { Component } from 'react';
const ENTRY_KEY = 13;

class Header extends Component {
  handleKeyDown = (e) => {
    if (e.keyCode === ENTRY_KEY) {
      e.preventDefault();
      let title = e.target.value;
      this.props.addTodo({ title });
      e.target.value = '';
    }
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <input autoFocus={true} onKeyDown={this.handleKeyDown} type="text" className="form-control" />
        </div>
      </form>
    )
  }
}

// const Header1 = (props) => (
// )

export default Header;