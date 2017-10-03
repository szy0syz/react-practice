import { createStore } from './redux';
import $ from 'jquery';

$('document.body').append(`
  <p id="counter"></p>
  <button id="increaseBtn"> + </button>
  <button id="decreaseBtn"> - </button>
`);

// state是状态树，可以是任意的结构
// action是一个纯对象，但规定死了必须有一个属性type: {type: 'INCREASE'} / {type: 'DECREASE'}
let reducer = (state = { number: 0 }, action) => {
  if (action === undefined) { return state; }
  switch (action.type) {
    case 'INCREASE':
      return { number: this.state.number + 1 }
    case 'DECREASE':
      return { number: this.state.number - 1 }
    default:
      return { number: this.state }
  }
}

let store = createStore(reducer);
console.log(store.getState());