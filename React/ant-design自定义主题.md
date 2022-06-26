

#### ant-deisgn自定义主题

https://3x.ant.design/docs/react/use-with-create-react-app-cn // 文档



#### 1 .安装

```bash
npm i less@3.13.0 less-loader@7.1.0

npm i react-scripts@4.0.0 // 视频中没说这个，但是需要兼容less-loader，需要使用这个4.0.0版本
```



#### 2. 根目录下配置文件config-overrides.js

```js
const { override, fixBabelImports, addLessLoader } = require("customize-cra")

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: { "@primary-color": "orange" }
    }
  })
)

```

