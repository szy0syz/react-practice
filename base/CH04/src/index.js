import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  React.createElement('div', null, [React.createElement('span', {key: '1'}, ['hello'])]),
  document.getElementById('root')
);