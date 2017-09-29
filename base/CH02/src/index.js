// import React from 'react';
// import ReactDOM from 'react-dom';

// const el1 = <h1>hello</h1>;
// console.log(el1);
// // 上面为语法糖，下面才是真正转换后的代码
// const el2 = React.createElement('h1', null, ['hello']);
// console.log(el2);

// const el3 = <div id="myDiv" className="red">hello</div>;
// const _el3 = React.createElement('div', { className: "red", id: "myDiv" }, ['hello']);
// 经过简化后el3和_el3转换的React元素时以下这样的

let el3Obj = {
  type: 'div',
  props: { className: 'red', id: 'myDiv1', children: ['hello'] }
};

function render({props, type} , container) {
  let ele = document.createElement(type);
  for(let attr in props) {
    if(attr === 'children') {
      props[attr].forEach((item)=> {
        let textNode = document.createTextNode(item);
        ele.appendChild(textNode);
      });
    } else if(attr === 'className') {
      ele.setAttribute('class', props[attr]);
    } else {
      ele.setAttribute(attr, props[attr]);
    }
  }
  container.appendChild(ele);
}

render(el3Obj, document.querySelector('#root'));

// ReactDOM.render(
//   <h1>Index</h1>,
//   document.getElementById('root')
// );