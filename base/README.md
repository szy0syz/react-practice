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

## CH02