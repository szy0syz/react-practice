import React from 'react';
import ReactDOM from 'react-dom';

const ary = ["第一个元素;", "", "第三个元素;"];

ReactDOM.render(<div>
  {
    ary.map((item, index) => {
      return item.length > 0 ? <span style={{backgroundColor: 'pink'}} key={index}>{item}</span> : null
    })
  }
</div>,
  document.getElementById('root')
);