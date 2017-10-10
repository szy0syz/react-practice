import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// 01. 带入Provider
import { Provider } from 'react-redux';
// 02. 导入sotre
import store from './sotre';
// 03. 导入子组件
import Index from './pages';
console.log('1: ',store.getState());
store.dispatch({ type: "ADD" });
store.dispatch({ type: "ADD" });
console.log('2: ',store.getState());
store.dispatch({ type: "SUB" });
console.log('3: ',store.getState());

ReactDOM.render(
  <Provider store={store}>
    <Index></Index>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
