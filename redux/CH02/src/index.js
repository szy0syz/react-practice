import { createStore } from './redux';
import $ from 'jquery';

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

$(document.body).append(`
  <p id="counter"></p>
  <button id="increaseBtn"> + </button>
  <button id="decreaseBtn"> - </button>
`);

// state是状态树，可以是任意的结构
// action是一个纯对象，但规定死了必须有一个属性type: {type: 'INCREASE'} / {type: 'DECREASE'}
let reducer = (state = { number: 0 }, action) => {
  if (action === undefined) { return state; }
  switch (action.type) {
    case INCREASE:
      return { number: state.number + action.amount }
    case DECREASE:
      return { number: state.number - action.amount }
    default:
      return { number: state }
  }
}
// store = {getState, subscribe, dispatch}
let store = createStore(reducer);
console.log(store.getState());

let render = () => {
  document.querySelector('#counter').innerHTML = store.getState().number;
}
// 当仓库里的state发生变化时，会重新执行render，读取最新的状态并更新视图
store.subscribe(render);

$('#increaseBtn').click(()=> store.dispatch({type: INCREASE, amount: 3}));
$('#decreaseBtn').click(()=> store.dispatch({type: DECREASE, amount: 2}));

render();