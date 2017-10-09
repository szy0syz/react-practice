import React from 'react';
import ReactDOM from 'react-dom';
import Counter2 from './components/Counter2';
import { createStore } from './redux';
import reducer from './store/reducers/counter';
import Provider from './components/Provider';

let store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Counter2 />
  </Provider>, document.querySelector('#root'));