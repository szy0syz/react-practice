import { INCREASE, DECREASE } from '../actionTypes';
// state是状态树，可以是任意的结构
// action是一个纯对象，但规定死了必须有一个属性type: {type: 'INCREASE'} / {type: 'DECREASE'}
let reducer = (state = { number: 0 }, action) => {
  if (action === undefined) { return state; }
  console.log(action.type);
  console.log(action.amount);
  switch (action.type) {
    case INCREASE:
      return { number: state.number + (action.amount || 1) }
    case DECREASE:
      return { number: state.number - (action.amount || 1) }
    default:
      return state;
  }
}

export default reducer;