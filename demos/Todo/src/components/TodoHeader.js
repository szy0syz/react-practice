import React, { Component } from 'react';
const ENTRY_KEY = 13;

class Header extends Component {

  handleKeyDown = (e) => {
    
    if (e.keyCode === ENTRY_KEY) {
      e.preventDefault();
      console.log('ENTRY_KEY');
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