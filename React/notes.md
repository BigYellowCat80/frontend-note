```
1. 为什么要学React

1. 采用组件化模式、声明式编码，提高开发效率及组件复用率
2. React Native中可以使用React语法进行移动端开发
3. 使用虚拟DOM + Diff算法，尽量减少与真实DOM的交互
```



```js
2. Babel有什么用

1. ES6 => ES5
2. JSX => JS
```



```html
3. 引入顺序

react.development.js（React核心库）必须要在react-dom.development.js（用于React操作DOM）前引入。一般react.development.js和react-dom.development.js的版本是一样的

<script src="../js/react.development.js"></script>
<script src="../js/react-dom.development.js"></script>
<script src="../js/babel.min.js"></script>

<script type="text/babel"></script>
```



```
4. 为什么要用JSX（全称JavaScript XML，React定义的一种类似于XML的JS拓展语法，JS + XML）

更加简单地创建虚拟DOM
```



```xml
5. 什么是XML

XML早期用于存储和传输数据
<student>
  <name>Tom</name>
  <age>19</age>
</student>

后来用JSON比较多
"{ "name": "Tom", "age": 19 }"
```



```
6. 什么是js表达式？什么是js语句（代码）？

js表达式是一种特殊的js语句，特殊在左侧可以拿一个变量接。
js表达式如：a, a+b, demo(1), x===y?1:0
js语句如：if(){}, for(){}
```



```
7. 什么是简单组件？什么是复杂组件？

如果有state的为复杂组件。函数式组件适用于简单类型组件，类式组件适用于复杂组件
```



```
8. 组件实例的三大属性

state props refs
```



```react
9. 为什么把类中的方法作为onClick作为回调时，this为undefined

class Weather extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isHot: true }
  }

  // changeWeather是Weather.prototype上的方法，供实例使用
  changeWeather() {
    console.log("this in changeWeather", this) // undefined
    // 为什么一点击时，this为undefined？
    // 1. 由于changeWeather是作为onClick的回调，相当于把函数赋值给了一个变量。调用时不是通过实例调用的，而是直接调用
    // 2. 类中的方法默认开启了严格模式，所以changeWeather中的this为undefined
  }

  render() {
    console.log("this", this)
    const { isHot } = this.state
    return (
      <h3 onClick={this.changeWeather}>
        Today is {isHot ? "HOT" : "COLD"}
      </h3>
    )
  }
}

ReactDOM.render(<Weather />, document.getElementById("test"))
```



```react
10. props的类型、必传、默认值 （props是只读的）

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  gender: PropTypes.string,
  run: PropTypes.func // 因为function是关键字
}

Person.defaultProps = {
  age: 18,
  gender: "male"
}
```



```
11. refs的三种形式：字符串、回调函数、createRef

官网不推荐使用字符串形式，因为效率不高。已经过时并且可能会在未来的版本被移除 (16.8版本用得多)
```



```
12. 回调函数需要满足三个条件

你定义的、你没调用、最终执行了
```



```react
13. 回调函数形式的ref调用次数

<input type="text" placeholder="click button" ref={(dom) => { console.log("dom", dom); this.input1 = dom }} />

// 回调函数形式的ref，上来就调用了一遍
// 页面更新过程中，调用两次。第一次传入的dom是null，第二次才是dom节点。因为每次渲染时会创建一个新的函数实例，所以React清空旧的ref并且设置新的
// 通过将ref的回调函数定义成class的绑定函数方式可以避免以上问题，但是大多情况下它是无关紧要的（上来调用一次，页面更新不再调用，因为已经放在实例上了）
// 内联的使用较多
```



```
14. JSX怎么注释

{/* <button onClick={this.showDate1}>button</button> */}
```



```
15. 官网上说请勿过渡使用ref，指的是三种ref

如果绑定事件和元素和操作的元素是同一个，可以省略ref。使用e.target
```



```
16. 事件处理

1. 通过onClick属性形式属性指定事件处理函数（注意大小写）
		a. React使用的是自定义（合成）事件，而不是原生的DOM事件。（为了更好的兼容性）
		b. React中的事件时通过事件委托方式处理的。（为了高效）
2. 通过e.target得到发生事件的DOM元素，因此不要过渡使用ref
```



```
17. 事件委托的原理

事件冒泡
```



```
18. 什么是高阶函数

如果一个函数符合下面2个规范中的任何一个，那该函数就是高阶函数
1. 若A函数，接受的参数是一个函数，那么A就可以称之为高阶函数
2. 若A函数，调用的返回值是一个函数，那么A就可以称之为高阶函数

常见的高阶函数有：Promise, setTimeout, 数组常用方法如map, forEach...
```



```
19. 什么是函数的柯里化

通过函数调用继续返回函数的方式，实现多次接受参数最后统一处理的函数编码形式
```



```
20. 组件生命周期（旧） - 组件挂载流程

constructor
componentWillMount
render
componentDidMount
```



```
21. 组件生命周期（旧） - setState更新流程

setState后:
shouldComponentUpdate
componentWillUpdate
render
componentDidUpdate
```



```
22. 组件生命周期（旧） - forceUpdate更新流程

forceUpdate后:
componentWillUpdate
render
componentDidUpdate

forceUpdate用的不多，一般是在不更新state的情况下，就是要强制更新一下
```



```
23. 组件生命周期（旧） - 父组件render流程

render from parent
componentWillReceiveProps
shouldComponentUpdate
componentWillUpdate
render from child
componentDidUpdate

需要注意的是：父组件上来第一次render不会触发子组件的componentWillReceiveProps。第二次开始才会
```



```
24. 组件生命周期（旧） - 总结

1. 初始化阶段：由ReactDOM.render()触发 --- 初次渲染
		constructor
    componentWillMount
    render
    componentDidMount

2. 更新阶段：由组件内部this.setState()或父组件再次render()时触发
    shouldComponentUpdate
    componentWillUpdate
    render
    componentDidUpdate
    
3. 卸载组件：由ReactDOM.unmountComponentAtNode()触发
		componentWillUnmount
		
开发中比较重要其中3个钩子：
componentDidMount 做一些初始化工作。如：开启定时器、发送网络请求、订阅消息
render
componentWillUnmount 做一些收尾的事。如：关闭定时器、取消订阅消息
```



```
25. 在React的17.0.1版本中，所有带Will的前面都要加上UNSAGE_，除了componentWillUnmount

因为官网上说，这三个钩子经常被误解和滥用，在React的未来版本中更有可能出现bug，尤其是在启用异步渲染之后
```



```
26. React新的生命周期和旧的生命周期有什么区别

React新的生命周期废弃了旧的3个钩子，componentWillMount、componentWillUpdate、componentWillReceiveProps，然后新增了两个新的钩子，getDerivedStateFromProps和getSnapshotBeforeUpdate。剩下的都是一样的

但是其实开发中getDerivedStateFromProps和getSnapshotBeforeUpdate用得不多
```



```
27. getDerivedStateFromProps用得不多，知道即可

官网说了，适用于罕见的用例，即state的值在任何时候都取决于props，可以使用（请注意，是可以使用，不是必须使用。如果state的值在任何时候都取决于props，也可以在constructor里面接收到props去处理）
```



```
28. 组件生命周期（新） - 组件挂载流程

constructor
static getDerivedStateFromProps
render
componentDidMount
```



```
29. 组件生命周期（新） - 总结

1. 初始化阶段：由ReactDOM.render()触发 --- 初次渲染
		constructor
    getDerivedStateFromProps
    render
    componentDidMount

2. 更新阶段：由组件内部this.setState()或父组件再次render()时触发
		getDerivedStateFromProps
    shouldComponentUpdate
    render
    getSnapshotBeforeUpdate
    componentDidUpdate
    
3. 卸载组件：由ReactDOM.unmountComponentAtNode()触发
		componentWillUnmount
		
开发中比较重要其中3个钩子：
componentDidMount 做一些初始化工作。如：开启定时器、发送网络请求、订阅消息
render
componentWillUnmount 做一些收尾的事。如：关闭定时器、取消订阅消息
```



```
30. Diff算法最小比较粒度

最小的粒度是标签。就是比较的最小单位是一个DOM元素
```



```
31. Diff算法比较原则

当状态中的数据发生变化时，React会根据新数据生成新的虚拟DOM
随后进行新的虚拟DOM和旧的虚拟DOM的Diff比较。比较规则如下：

1. 旧的虚拟DOM中找到与新的虚拟DOM相同的key
		若DOM中内容没变，直接使用之前的真实DOM
		若虚拟DOM中内容变了，则生成新的虚拟DOM，随后替换掉页面中之前的真实DOM
		
2. 旧的虚拟DOM中未找到与新的虚拟DOM相同的key
		根据数据创建新的真实DOM，随后渲染到页面上
```



```
32. 使用index作为key的问题

如果在list头部新增一个数据
1. 效率问题，没有复用，
2. 渲染问题、旧的真实DOM还会保留之前的残留数据
```



```
33. 什么是工程化

在脚手架里面代码写完了，脚手架自动编译、压缩等等自动化的操作，让浏览器认识，这个就是工程化
```



```bash
34. 脚手架安装及创建项目

全局安装React脚手架
npm i create-react-app -g

创建项目
create-react-app hello-react

运行项目（最好使用yarn，因为React和yarn都是Facebook的）
yarn start
```



```
35. 脚手架文件介绍

public文件夹下
  robots.txt  爬虫规则文件
  index.html  查看frontend-note\React\02_react_staging\01_create_react_app_demo\public\.index.html

src文件夹下
		index.js  入口文件
				React.StrictMode标签，检查每个组件写得是否符合规范，比如用了字符串形式的ref
		reportWebVitals.js  记录页面的性能的
		setupTests.js  组件或单元测试的
```



```
36. 样式的模块化（用得不算多，因为一般用sass或者less，外边有个父标签）

index.module.css文件里只有这个样式
.title {
  background-color: #f55;
}

1. css文件中间加个module，如index.module.css
2. 引入css文件时，用一个变量接收 import helloreact from "./index.module.css"
3. 使用样式时 <h3 className={helloreact.title}>Hello React</h3>
```



````
37. vscode插件快速创建组件

ES7+ React/Redux/React-Native snippets

创建类组件rcc + tab
创建函数组件rfc + tab
````



```
38. 可以生成唯一id的两个库

uuid
nanoid
```



```
39. 定义组件的原则

状态在哪里，就在哪里更改状态
```



```bash
40. 脚手架中使用PropTypes需要先安装

yarn add prop-types
```



```
41. axios优点

1. 轻量级
2. 封装XMLHttpRequest对象的ajax
3. Promise风格
4. 可以用在浏览器端和node服务端
```



```
42. nodejs开启服务器

node students
students.js为js文件
```



```
43. React中配置跨域代理
https://www.bilibili.com/video/BV1wy4y1D7JT?p=65

1. package.json中加属性
"proxy":"http://localhost:5000" // 即服务端主域名

2. axios.get("http://localhost:3000/students")

需要注意的是，不是所有请求都会发给服务端，在3000端口找不到才去请求服务端
比如http://localhost:3000/index.html就是直接请求3000端口下的index.html，即public文件夹下的index.html
```



```js
44. React中配置多个跨域代理
https://www.bilibili.com/video/BV1wy4y1D7JT?p=66

1. src文件夹下新建setupProxy.js（名字必须是这个）
2. setupProxy.js里面的代码如下（固定格式，commonjs规范）
3. 页面请求路径添加前缀   
	axios.get("http://localhost:3000/api1/students")
	axios.get("http://localhost:3000/api2/cars")
```



```js
// setupProxy.js

const { createProxyMiddleware } = require("http-proxy-middleware") // React脚手架自带，不用安装

module.exports =  (app)=> {
  app.use(
    createProxyMiddleware("/api1", {
      target: "http://localhost:5000", // 请求转发给谁
      changeOrigin: true, // 重写路径，默认false。如果false时，服务端打印request.get('Host')就是localhost:3000。如果是true，服务端打印request.get('Host')就是localhost:5000。可以让服务器认为是自家的请求
      pathRewrite: { "^/api1": "" }
    }),
    createProxyMiddleware("/api2", {
      target: "http://localhost:5001",
      changeOrigin: true,
      pathRewrite: { "^/api2": "" }
    })
  )
}
```



```js
45. pubsub-js 适用于任何关系的组件使用

npm i pubsub-js

import Pubsub from 'pubsub-js'

const token = Pubsub.subscribe('MY TOPIC', (msg, data)=>{
    console.log(msg, data)
})

Pubsub.unsubscribe('MY TOPIC') // 取消订阅

Pubsub.publish('MY TOPIC', 'hello world')
```



```
46. 问题 - 使用pubsub-js，如果复用了组件，两个组件都给触发了

详情看 frontend-note\React\03_react_ajax\04_github_search_name_using_pubsub-js
```



```js
47. fetch的使用

fetch(url)
.then(res=>{
  return res.json() // 这里只能表示连接服务器成功了
})
.then(res=>{
  console.log('res', res) // 这里才是真正获取到数据
})
.catch(error=>{
   console.log('error', error)
})
```



```
48. 路由分类。分为后端路由和前端路由

后端路由 key是path，value是callback。用于处理客户端提交的请求
app.get(/students, function(req, res)=>{})

前端路由 key是path，value是组件
```



```
49. 插件 - history.js

可以监测url变化
history.listen(url => {
	console.log('location has changed', url)
})
```



```bash
50. react-router-dom

// 安装
npm i react-router-dom@5.2.0
```



```
51. HashRouter

url里#后面的内容都不会发送给服务器
```



```
52. 路由组件和一般组件的区别是

路由组件的props会接收到3个固定的属性history, location, match

history:{
	go: f go(n),
	goBack: f goBack(),
	goForwad: f goForwad(),
	push: f push(path, state),
	replace: f replace(path, state)
},

location:{
	pathname: "/about",
	search: "",
	state: undefined
},

match:{
	params: {},
	path: "/about",
	url: '/about'
}
```



```
53. 标签体内容怎么通过props传递

this.props.children
```



```
54. 解决多级路径刷新页面样式丢失的问题

1. public/index.html中引入样式时不写./写/（常用）
2. public/index.html中引入样式时不写.写%PUBLIC_URL%（常用，只适用于React脚手架里）
3. 使用HashRouter
```



```jsx
55. 路由精准匹配

exact默认为false，设为为true直接写exact即可
<Route exact path="/about" component={About}></Route>

一般不用随便开启，渲染有问题才开启。有时开启会导致无法匹配二级路由
/home就无匹配到它的子路由/home/news和/home/message
```



```
56. 向路由组件传参的三种方式

params		/home/message/detail/001/morning（刷新可用）
search		/home/message/detail?id=001&title=morning（刷新可用）
state			/home/message/detail/（虽然在地址栏没有显示，但是刷新仍可用）（比如是用户的手机不想在地址栏显示可以用这个）
```



```
57. 路由params传参

1. 第一步：传递
<MyNavLink to={`/home/message/detail/${el.id}/${el.title}`}>
	{el.title}
</MyNavLink>

2. 第二步：声明（这个例子里传了两个参数。分别是id和title）
 <Route
 	path="/home/message/detail/:id/:title"
 	component={Detail}
 ></Route>
 
 3. 第三步：接收使用
 const { id, title } = this.props.match.params
```



```
58. 路由search传参

1. 第一步：传递
 <MyNavLink to={`/home/message/detail/?id=${el.id}&title=${el.title}`}>{el.title}</MyNavLink>
 
2. 第二步：声明（search无需声明）
<Route path="/home/message/detail" component={Detail}></Route>

3. 第三步：接收使用
import { parse } from "qs" // 视频中说React自动下载了querystring，但是亲测不行 import { parse } from "querystring"

let { search } = this.props.location
search = search.slice(1)
console.log("search", search)
const { id, title } = parse(search)
```



```
59. 路由stateh传参

1. 第一步：传递
<MyNavLink to={{pathname: "/home/message/detail/", state: { id: el.id, title: el.title }}}>
	{el.title}
</MyNavLink>

2. 第二步：声明（state无需声明）

3. 第三步：接收使用
 console.log(this.props)
 let { id, title } = this.props.location.state || {} // 这么写是因为清空了浏览器缓存后，this.props.location.state默认为undefined

const { details } = this.state
const item = details.find((el) => el.id === id) || { content: "" }
const content = item.content || ""
```



```
60. 路由的push和replace模式

默认是push模式

如果需要开启replace模式
<MyNavLink replace to={{pathname: "/home/message/detail/", state: { id: el.id, title: el.title } }}>
	{el.title}
</MyNavLink>
```



```
61. 手动调用push和replace

button的onClick的回调里面写
this.props.history.push(path)
this.props.history.replace(path)
```



```
62. 例子 - 三种传参调用

push: f push(path, state),
replace: f replace(path, state)

button的onClick的回调里面写

// params
this.props.history.push(`/home/message/detail/${el.id}/${el.title}`)

// search
this.props.history.push(`/home/message/detail?id=${el.id}&title=${el.title}`)

// state
this.props.history.push(`/home/message/detail`, {id: el.id, title: el.title})

```



```
63. 一般组件也想使用路由组件身上的3个API(history, location, match)怎么处理

import {withRouter} from "react-router-dom"

class Header extends React.Component{
	// ... 
}

export default withRouter(Header) // withRouter(Header)返回的是带有3个API的新组件
```



```
64. BrowserRouter与HashRouter的区别

1. 底层原理不一样
			BrowserRouter使用的是H5的history API，不兼容IE9及以下版本
			HashRouter使用的是URL的哈希值，#后面的数据都不会发送给服务器
			
2. url的path的表现形式不一样
			BrowserRouter的路径中没有#
			HashRouter的路径中包含#

3. 刷新后对路由state参数的影响
			BrowserRouter没有任何影响，因为state保存在history对象中
			HashRouter刷新后会导致路由state参数的丢失

4. 备注：HashRouter可以用于解决一些路径错误相关的问题（比如样式丢失）
```



```
65. redux

1. redux是一个专门用于状态管理的JS库（不是React插件库）
2. 可以在React, Angular, Vue等项目中使用，但基本与React配合使用（比如Vue有Vuex）
3. 集中式管理React应用中多个组件共享的状态
```



```
66. redux三大核心

Store
Action Creators
Reducers
```



```
67. Action Creators

类型可以是Object（同步）和Function（异步）
异步action就是指action的值为函数（这样设计是因为只有函数才能开启异步任务）
异步action中一般都会调用同步action
需要注意的是，异步action不是必须要用的，可以直接在组件里面异步再调用同步action
```



```js
68. 当action返回的是一个函数时，怎么处理？

1. 安装
npm i redux-thunk@2.3.0

2. store.js文件中
import { createStore, applyMiddleware } from "redux"
import reducerCount from "./reducerCount"
import reduxThunk from "redux-thunk"

export default createStore(reducerCount, applyMiddleware(reduxThunk))
```



```
69. 什么时候需要异步action

异步的任务不想交给组件处理，想交给action去处理
```



```
70. react-redux

mapStateToProps用户传递状态。mapStateToProps函数返回的是一个对象，对象里key就是UI组件里props的key

mapDispatchToProps用户传递操作状态的方法。mapDispatchToProps函数返回的是一个对象，对象里key就是UI组件里props的key。mapDispatchToProps还可以是一个对象
```



```
71. 用上react-redux的优化

入口文件index.js的这个subscribe就不用写了。因为容器组件自动就检测redux了

store.subscribe(() => {
  render()
})
```



```
72. react-redux中Provider组件的使用

为每个容器组件提供store。那么在那么容器组件标签中就不用每次都传入store={store}

1. index.js
import store from "./redux/store"
import { Provider } from "react-redux"

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  )
  
2. App.jsx中的容器标签的store={store}就可以去掉了，不用每个都写了
```



```
73. 为什么在redux的reducer里面arr.unshift(data)，页面不生效？

// 页面不生效
switch(type){
	case 'addPerson':
	preState.unshift(data)
		return preState
}

// 页面生效
switch(type){
	case 'addPerson':
		return [data, ...preState]
}

因为第一个例子中，preState.unshift(data)中的preState和return出去的preState指向同一个内存地址。React底层做了一个判断，如果返回出去的东西和之前的preState的内容地址是一样的，页面就不进行更新
```



```
74. 什么是纯函数

一类特别的函数，只要传入的参数是一样的，返回的结果就是一样的。比如：
function log(n){
	return n
}

当然有可能有一种函数不是纯函数。比如：
function add(n){
	return Math.random() + n
}
```



```
75. 纯函数必须遵守一下3个约束

1. 不得修改参数数据
2. 不会产生任何副作用。例如不能发送网络请求，调用输入和输出设备等
3. 不能调用Date.now()或Math.random()等不纯的方法
```



```
76. redux中的reducer必须是纯函数
```



```
77. redux开发者工具

1. 谷歌商店添加插件Redux DevTools
2. npm i redux-devtools-extension@2.13.8
```



---



#### 拓展



```
1. setState

setState是同步的，但是，setState引起状态更新的动作，是异步的

setState({} [, callback])
callback在状态更新，并且页面更新后（即render调用后），callback才调用


验证：
add = () => {
  // 1. setState传入对象 setState({} [, callback])
  // const { count } = this.state
  // this.setState({ count: count + 1 }, () => {
  //   console.log("callback count: ", this.state.count) // 101
  // })
  // console.log("count: ", this.state.count) // 100
  
  // ===============================================================
  
  // 2. setState传入函数 setState((state, props) => ({}) [, callback])
  this.setState((state) => ({ count: state.count + 1 }))
}

对象式的setState是函数式的setState的简写方式
```



```
2. Hooks

1. 是React16.8版本增加的新特性
2. 可以让你在函数组件中使用state以及其他的React特性（比如生命周期）

三个常用的Hook
1. State Hook: React.useState() // 使用State
2. Effect Hook: React.useEffect() // 使用生命周期钩子
1. Ref Hook: React.useRef()
```



[Hooks - React.useState.md](./Hooks - React.useState.md)

[Hooks -React.useEffect.md](./Hooks -React.useEffect.md)

[Hooks - React.useRef.md](./Hooks - React.useRef.md)



```
3. Fragment文档碎片

import { Fragment } from 'react'

原本是：
<div>
	<input />
	<input />
</div>

用了Fragment后；
<Fragment>
	<input />
	<input />
</Fragment>

优势在于渲染的时候，这个Fragment根标签没有了，少了一个层级

除了用Fragment，还可以直接用空标签作根标签<></>。但是，区别是，Fragment可以在遍历的时候，带上key属性，空标签不行
```



[content的使用.md](./content的使用.md)



```
4. PureComponent（属于优化）

import React, { Component } from "react"
Component的两个问题：
只要执行setState，即使不改变状态（比如传入{}），组件及其子组件都会调用render，不管子组件有没有用到父组件的任何数据（效率低）

效率高的做法：
只有当组件的state或props数据发横变化时，才调用render

原因：Component中的shouldComponentUpdate总是返回true

解决办法：
1. 在shouldComponentUpdate中对比当前的props和nextProps，当前的state和nextState。有变化就返回true，没有变化就返回false（操作起来太麻烦）

2. 使用PureComponent
需要注意的是，使用了PureComponent后，React底层会对数据作浅比较，如果引用的数据内存地址一样的，就不调用render。举例：
const {list } = this.state
list.push(item)
this.setState({list}) // 页面不发生更新

需要更新则浅拷贝
.setState({list: [item, ...list]})

```



```
5. Error Boundary错误边界

特点：只能捕获后代组件生命周期产生的错误，能捕获自己组件产生的错误。
```



```
6. 组件通信方式

1. props（父子组件通信）
2. 消息订阅发布。pub-sub, event等等（不限组件关系）
3. 集中式管理。redux, dva等等（父子组件通信）
4. context生产者消费者模式（爷孙）
```



---



#### React Router 6（2021.11成为默认版本）



```
1. 与React Router 5.x相比，改变了什么？

1. 内置组件的变化：移除<Switch/>，新增<Routes/>
2. 注册路由组件时：component = {About}变为 element = {<About/>}
3. 新增多个hook：useParams, useNavigate, useMatch等
4. 官方明确推荐函数式组件了
```



```
2. 路由params传参

1. 第一步：传递
<NavLink to={`/home/message/detail/${el.id}/${el.title}`}>
	{el.title}
</NavLink>
<Outlet />


2. 第二步：路由表里声明（这个例子里传了两个参数。分别是id和title）
{
  path: "message",
  element: <Messages />,
  children: [{ path: "detail/:id/:title", element: <Detail /> }]
},
 
3. 第三步：Detail组件接收使用
import React from "react"
import { useParams } from "react-router-dom"
// import { useMatch } from "react-router-dom"

export default function Detail() {
  // version 1 常用
  const params = useParams()
  console.log("params", params) // {id: '003', title: 'night'}
  const { id, title } = params

  // version 2 不常用，知道即可
  // const match = useMatch("/home/message/detail/:id/:title")
  // console.log("params", match.params)
  return (
    <div>
      <div>id: {id}</div>
      <div>title: {title}</div>
    </div>
  )
}
```



```
3. 路由search传参

1. 第一步：传递
<Link to={`detail?id=${el.id}&title=${el.title}`}>
	{el.title}
</Link>

2. 第二步：路由表里不用声明
{
  path: "message",
  element: <Messages />,
  children: [{ path: "detail", element: <Detail /> }]
},

3. 第三步：Detail组件接收使用
import React from "react"
import { useSearchParams } from "react-router-dom"
// import { useLocation } from "react-router-dom"

export default function Detail() {
  // version 1 常用
  const [search, setSearch] = useSearchParams() // setSearch用户更改search
  console.log("search", search.get("id")) // 002
  const id = search.get("id")
  const title = search.get("title")

  // version 2 不常用，知道即可
  // const location = useLocation()
  // console.log("location", location.search) // ?id=001&title=morning
  return (
    <div>
      <div>id: {id}</div>
      <div>title: {title}</div>
      <button
        onClick={() => {
          setSearch("?id=004&title=tomorrow")
        }}
      >
        setSearch
      </button>
    </div>
  )
}
```



```
4. 路由state传参

1. 第一步：传递
 <Link to="detail" state={{ id: el.id, title: el.title }}>
 	{el.title}
 </Link>
 
 2. 第二步：路由表里不用声明
{
  path: "message",
  element: <Messages />,
  children: [{ path: "detail", element: <Detail /> }]
},

3. 第三步：Detail组件接收使用
import React from "react"
import { useLocation } from "react-router-dom"

export default function Detail() {
  const location = useLocation()
  console.log("location.state", location.state) // state: {id: '002', title: 'noon'}
  const { id, title } = location.state

  return (
    <div>
      <div>id: {id}</div>
      <div>title: {title}</div>
    </div>
  )
}
```



```
5. useInRouterContext 返回布尔值

判断当前环境是否在路由上下文中
如果App整个组件都被BrowserRouter包裹，那么在App及其任何子组件打印出来都是true
import { useInRouterContext } from "react-router-dom"
useInRouterContext() // true

这种情况为false。在Demo组件里面打印即为false
ReactDOM.render(
  <div>
    <Demo />
    <BrowserRouter>
      <App />
    </BrowserRouter>
    ,
  </div>,
  document.getElementById("root")
)
```



```
6. useNavigationType 判断当前路由时怎么进来的

PUSH（默认）
REPLACE
POP(当前路由页刷新就是POP)

import {useNavigationType } from "react-router-dom"

export default function About() {
  console.log("useNavigationType", useNavigationType()) // PUSH

  return (
    <div className="about"> About </div>
  )
}
```



```
7. useOutlet 用的不是很多

用来呈现当前组件中渲染的嵌套路由
const result = useOutlet()
console.log('result', result) // null

如果嵌套路由没有挂载（即没有默认的渲染），result为null
如果嵌套路由已经挂载，展示嵌套的路由对象
```

