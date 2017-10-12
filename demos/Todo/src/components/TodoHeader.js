import React from 'react';
const ENTRY_KEY = 13;
const handleKeyDown = (e) => {
  if(e.keyCode === ENTRY_KEY) {
    
  }
}

const Header = (props) => (
  <form>
    <div className="form-group">
      <input autoFocus={true} onKeyDown={props} type="text" className="form-control" />
    </div>
  </form>
)

export default Header;