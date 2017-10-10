// 7. 创建reducer
let reducer = (state = { number: 0 }, action) => {
  if (action) {
    switch (action.type) {
      case "ADD":
        return { number: state.number + (action.amount || 1) }
      case "SUB":
        return { number: state.number - (action.amount || 1) }
      default:
        return state;
    }
  } else {
    return state;
  }
}

export default reducer;