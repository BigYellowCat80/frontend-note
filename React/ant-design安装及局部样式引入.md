

#### 1. 安装

```bash
npm i antd@4.8.2
```



#### 2. 局部引入样式（antd的样式都是用less写的）

https://3x.ant.design/docs/react/use-with-create-react-app-cn // 文档

2.1 安装依赖

```bash
npm i react-app-rewired@2.1.6 customize-cra@1.0.0
```

```
npm i babel-plugin-import@1.13.1
```



2.2 根目录新建js文件config-overrides.js

```js
const { override, fixBabelImports } = require("customize-cra")

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css"
  })
)
```



#### 3. package.json

```json
 "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
  },
```

