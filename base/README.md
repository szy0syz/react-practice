# React基础学习笔记

[TOC]

## CH01：认识React

- http://www.zhufengpeixun.cn/docs/html/react%E8%AF%BE%E7%A8%8B/2.React%E5%9F%BA%E7%A1%80.html

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
## CH03 JSX

- 在JSX的`{}`里放的是JS表达式，表达式是由变量的运行符组合而成
- 条件渲染时，可以返回`null`，表示什么都不进行渲染

![jsx-flow](http://ofx24fene.bkt.clouddn.com//2017/react/react-jsx-flow.png)

## CH04 React组件

1. React是一个用户界面的库
2. React元素 JSX元素 其实就是一个用JS来描述界面的对象

```js
let el = React.createElement('div', null, [React.createElement('span', {key: '1'}, ['hello'])];
// el经过React构造后会呈现如下结构:
{
  type: "div",
  props: {
    children: [
      {
        type: 'span',
        props: { children: [ 'hello' ] }
      }
    ]
  }
}
```

- React是由 React元素 和 React组件 构成
  1. 首字母要小写，凡是首字母小写的购汇被认为是React元素
  2. 在React里用DOM原生标签声明元素时，只能写DOM里原生的属性，如果出现不识别的，React渲染时会把不识别的属性从元素上移除

- React组件
  - 组件的出现可以很直观的将一个复杂的页面分割成若干独立组件，每个组件包含自己的逻辑和样式，再讲这些独立组件组合成一个复杂的页面。这样既减少了逻辑复杂度，又实现了代码的重用
  - 可组合：一个组件可以和其它的组件一起使用或者直接嵌套在另一个组件内部
  - 可重用：每个组件都是具有独立功能的，它可以被使用在多个场景中
  - 可维护：每个小组件仅仅包含自身的逻辑，更容易被理解和维护

### 组件的两种定义方式及区别

- 函数式定义组件
  - 当Message组件被调用时，调用者(父组件会)封装赋值props参数对象给子组件传递进去
  - 当render时，Message组件里的props会收到这样一个对象: `{ msg: 'jerry', id: '44' }`
  - 组件名首字母必须是大写的
  - 如果组件名首字母是小写的，就会被React引擎识别为 React元素，根本没法渲染
  - React核心知识点：组件、元素、属性、状态
  - 组件定义完后可以像React元素一样使用

```js
import React from 'react'
import ReactDOM,{render} from 'react-dom';
let Message = ({props}) => <h1 sytle={props.stlye}>{props.msg}</h1>;
render(<Message msg="jerry" id="44" sytle={{color: 'red'}} hobby={['eat', 'sleep']} />, document.querySelector('#root'));
```

- 组件的渲染过程
  1. 将组件上的属性 封装成`props`对象(键/值对)
  2. 调用组件函数，得到返回的 React元素
  3. ReactDOM把React元素转成真实的DOM元素并且插入到目标容器内部

## CH05 React组件的状态

 ### 组件的两种定义方式及区别

- 类方式声明组件
  - 通过类来声明的组件比函数声明的组件多了一个 `状态`
  - 状态可以用来存放组件内部一些变化的值。状态只能有内部初始化、由内部改变 
  - 类里的render方法指的是该组件将要如何渲染，一定要返回一个React元素，必须仅返回一个React元素

```js
// Demo: 通过类声明组件的小时钟
class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString()
    };
  }
  componentDidMount() {
    window.setInterval(() => {
      this.setState({
        time: new Date().toLocaleString()
      });
    }, 1000);
  }
  render() {
    return (
      <div>
        <span>Datetime:  </span>
        <span>{this.state.time}</span>
      </div>
    );
  };
}
```