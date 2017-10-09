// store2 才是新构建的sotre！
// import { createStore } from './redux';  // redux也不用我们自己写的了
import { createStore } from 'redux';
import reducer from '../store/reducers/counter';
// import Provider from './components/Provider'; //不用我们自己写的了
let store = createStore(reducer);

export default store;