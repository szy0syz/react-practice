# React基础学习笔记

[TOC]

## CH01：认识React

```js
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Index</h1>,
  document.getElementById('root')
);

// React内核会把上面语句转换成以下格式：
//{
//    tagName: 'h1',
//    attr: null,
//    children: ['Index']
//}
// 两者相等
//ReactDOM.render(
//    React.createElement('h1', null, ['Index'])
//);
```

> 最终React引擎会把JSX书写的React元素转换成DOM元素插入到页面当中

- `ReactDOM.render()`函数的含义就是把一个React元素渲染到要挂载的DOM容器内
- `JSX`的简单理解：JavaSctipt+HTML(xmlの一种)的混合写法
- React元素时通过JavaScript对象来描述DOM结构的一种数据结构

## CH02 JSX

> 《React.js 小书
》  http://huziketang.com/books/react/

```js
const el1 = <h1>hello</h1>;
console.log(el1);
// 上面为语法糖，下面才是真正转换后的代码
const el2 = React.createElement('h1',null,['hello']);
console.log(el2);
```

- `React.createElement(type, attrs, array)`函数详解
  - type参数为标签类型
  - atts参数为属性对象
  - array参数为子元素数组
  - 注: atts中的所有属性名需遵守驼峰命名法 `backgroundColor`
  - 注: 有些atts里是属性为JS关键字，要转换写法 `class` 转 `className`，`for`转`htmlFor`

```js
const el3 = <div id="myDiv" className="red">hello</div>;
const _el3 = React.createElement('div', { className: "red", id: "myDiv" }, ['hello']);
// 经过简化后el3和_el3转换的React元素时以下这样的
let el3Obj = {
  type: 'div',
  props: { className: 'red', id: 'myDiv', childrem: ['hello'] }
};
```

- 关于手写实现React.Render()原理V1版：
  - children属性只能接受字符串，哈哈，好土

```js
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
```

- 实现React.Render()原理V2版：
  - 就是在children里多了个递归调用函数自身

```js

function render({ props, type }, container) {
  let ele = document.createElement(type);
  for (let attr in props) {
    if (attr === 'children') {
      props[attr].forEach((item) => {
        if (typeof item === 'string') {
          let textNode = document.createTextNode(item);
          ele.appendChild(textNode);
        } else {
          render(item, ele);
        }
      });
    } else if (attr === 'className') {
      ele.setAttribute('class', props[attr]);
    } else {
      ele.setAttribute(attr, props[attr]);
    }
  }
  container.appendChild(ele);
}
```