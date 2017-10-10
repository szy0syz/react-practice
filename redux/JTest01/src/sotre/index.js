// 04. 导入redux.createStore()函数
import { createStore } from 'redux';
// 05. 导入该组件自己的reducer
import reducer from './reducers/counter';
// 06. 创建store
let store = createStore(reducer);

export default store;