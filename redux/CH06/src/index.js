import React from 'react';
import ReactRom from 'react-dom';
import Counter from './components/Counter';
import Todo from './components/Todo';
ReactRom.render(
  <div>
    <Counter></Counter>
    <Todo></Todo>
  </div>, document.querySelector('#root'));