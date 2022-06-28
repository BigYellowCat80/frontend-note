#### Vue项目中使用postcss-pxtorem



> https://www.cnblogs.com/gg-qq/p/13678935.html



##### 1. 安装

```js
npm install postcss postcss-pxtorem --save-dev
npm i -S amfe-flexible
```



##### 2. main.js导入

```js
import 'amfe-flexible/index'
```



##### 3. vue.config.js配置

```js
const autoprefixer = require('autoprefixer')  // 这个依赖不用安装
const pxtorem = require('postcss-pxtorem')
 
module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 75,  // 根元素字体大小，设计图为750时，这里直接写75就行
            unitPrecision: 5, // 允许rem单位的小数位数
            propList: ['*'], // 可以从px更改为rem的属性
            selectorBlackList: ['vant-'], // 要忽略的选择器，保留为px。这里vant-就是以这样开头的选择器。如果value是字符串，它将检查选择器是否包含字符串。还可以是正则
            minPixelValue: 0, // 设置要替换的最小像素值
            exclude: /node_modules/i // 要忽略并保留为px的文件路径
          })
        ]
      }
    }
  }
}

// 举例
// 如果给的设计图是750，设计图上一个按钮宽度是540px，高度是100px。
// rootValue直接设置为75即可，然后css写法 button {width: 540px; height: 100px;}
// 在iphone6下，转换为：width: 7.2rem; height: 1.33333rem; 可以页面宽度变宽，整个元素呈比例缩放
// 右键inspect该元素为：270px * 49.98px
```



##### 步骤三的可替换方法

```js
// postcss.config.js
module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 75,
      propList: ['*'],
    },
  },
};
```

