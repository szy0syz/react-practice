# React.js小书 练习

## CH1 - 02前端组件化（一）：从一个简单的例子讲起

### demo1

初级原理实现：
  1. 用dom获取button对象
  2. 用dom获取button里文字对象
  3. 在button对象上监听点击事件，toggle文字对象的值

组件化升级实现：
  1. 创建`LikeButton`的类，里面有个render方法，返回元素
  2. 在类的`constructor`里初始化状态
  3. 构建组件自身内部方法`changeLikeText`
  4. 创建公用方法`createDOMFromString`：字符串转换成
  5. render方法里将字符串传递给`createDOMFromString`方法，其返回一个被div包裹的dom元素
  6. 将这个元素绑定响应事件
  6. 用`render`方法返回这个元素