## gulp的基本使用


### 1. 下载安装nodejs
```
查看版本node -v
官网 https://www.gulpjs.com.cn/
```

### 2. 全局安装gulp
```javascript
npm install gulp -g (查看版本gulp -v)
```


### 3. cd进入当前目录 初始化项目
```javascript
npm init

package name 项目名称
version 版本号
description 项目描述
entry point 入口文件不用设置
test command 测试命令不用写 可以在网上被这些关键字查找到
git repository 是否要链接到github上 如果没设置之后可以修改
keywords 关键字
author 作者
license 不用修改 回车默认是yes 

完成后根目录生成package.json文件 
里面存放的是当前项目的配置信息  之后要修改直接在package.json修改即可
```


### 4. 当前项目里安装gulp
```javascript
npm install gulp --save-dev
npm install gulp@3.9.1 --save-dev (指定版本号安装 相当于npm i gulp@3.9.1 -D)

完成后根目录多了node_modules文件夹和package-lock.json文件

--save-dev 开发环境时安装
--save 生产环境时安装（安装到当前文件夹）

```


### 5. 创建gulpfile.js文件
```javascript
该文件用于编写任务 该文件编写有一套规范 叫commonJS规范
```


### 6. 项目写好了给别人时node_modules文件夹删除掉
```javascript
拿到项目CMD窗口进入根据路 npm i自动下载需要的依赖
```