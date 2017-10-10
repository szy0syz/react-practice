import React from 'react';
import { connect } from 'react-redux';
// 8. 创建函数式组件
// 因为组件状态组件统一归redux管理，所以可以写成函数式的组件了,毕竟我们只用了属性，没用状态了
// 所以组件不需要管状态了，全部使用属性就可以，但如果有自己状态也可以
let Operator = (props) => (
  <div>
    <p>{props.displayNumber}</p>
    <button onClick={props.onADD}>+</button>
    <button onClick={props.onSUB}>-</button>
  </div>
)

// 9. 状态映射属性表
let mapStateToProps = (state) => ({
  displayNumber: state.number
});

// 10. 事件映射属性表
// 注意：这里key的值必须是函数，丢事件嘛，不放函数放什么。
let mapDispatchToProps = (dispatch) => ({
  onADD: () => dispatch({ type: "ADD", amount: 5 }),
  onSUB: () => dispatch({ type: "SUB", amount: 3 })
})

// 11. 调用connect()()函数返回新的Proxy组件对象
export default connect(mapStateToProps, mapDispatchToProps)(Operator)