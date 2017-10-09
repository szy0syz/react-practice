import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Counter2 from './components/Counter2';
import store from './store/sotre2';


ReactDOM.render(
  <Provider store={store}>
    <Counter2 />
  </Provider>, document.querySelector('#root'));