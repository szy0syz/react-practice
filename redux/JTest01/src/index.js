import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// 01. 带入Provider
import { Provider } from 'react-redux';
// 02. 导入sotre
import store from './sotre';
// 03. 导入子组件
import Index from './pages';

ReactDOM.render(
  <Provider store={store}>
    <Index></Index>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
