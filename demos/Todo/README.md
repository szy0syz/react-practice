## React-Todo

![overview](http://ofx24fene.bkt.clouddn.com//img/react/overview.png)

### 大纲

1. 需求分析
2. 初始化项目并提交github
3. 引入bootstrap并编写TodoHeader组件
4. 编写待办事项列表组件
5. 添加待办事项
6. 实现切换完成状态的功能

### 实现步骤

1. `create-react-app`初始化项目，清空无用代码
2. 安装并引入bootstrap `import 'bootstrap/dist/css/bootstrap.css';`
3. 分解App，构建App子组件
4. 创建一个panel，然后创建三个子元素heading、body和footer：`.panel>.panel-heading+.panel.body+.panel.footer`
5. 使用bootstrap用grid居中实现为：1创建一个.container，再创建.row，最后创建.col-md-6，此时.col在用了50%的row且占6个(总的12格)，所以再给.col加一个offset-3的类即可让内容向右移动3格，这样内容就在中间了。实现：`.container>.row>.col-md-6.col-md-offset-3`
6. 把刚刚的panel移到容器内部