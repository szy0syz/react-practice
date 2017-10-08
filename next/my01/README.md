## 记录

### 安装

```bash
npm i --save next@beta react react-dom
```

- 一定不能少`@beta`

### 启用

- 编辑package.json

```json
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"dev": "next"
}
```

- 启用命令：`npm run dev`

### 路由

```js
import Link from 'next/link';
export default () => (
  <p>Hello Next <Link href="/about"><a>Learn more</a></Link></p>
)
```