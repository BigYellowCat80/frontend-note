

#### 1. 安装

```bash
npm i redux@4.0.5
```



#### 2. redux只负责管理状态

至于状态的改变驱动着页面的展示，需要自己处理

```jsx
// 至于状态的改变驱动着页面的展示，需要自己处理
// 可以在入口文件index.js进行处理

// index.js
// import... 
import store from "./redux/store"

// 这样写的好处是，只要store的一个数据发生变化，整个app就render一遍。不需要担心效率问题，因为有Diff算法
render()
store.subscribe(() => {
  render()
})

// 这么封装是因为上来需要调用一遍的
function render() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  )
}
```



#### 3. 如果异步任务不想放在组件里，想放在redux里面，如下处理（请注意这个是可选的）

3.1 安装

```bash
npm i redux-thunk@2.3.0
```



3.2 store.js配置

```js
import { createStore, applyMiddleware } from "redux"
import { reducerCount } from "./reducerCount"
import reduxThunk from "redux-thunk"

export default createStore(reducerCount, applyMiddleware(reduxThunk))
```



