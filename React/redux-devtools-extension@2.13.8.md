

#### 1. 安装

```bash
redux-devtools-extension@2.13.8
```



#### 2. store.js里引入并调用

```js
// import ...
import { composeWithDevTools } from "redux-devtools-extension"

export default createStore(
  combineReducers({
    count,
    list
  }),
  composeWithDevTools(applyMiddleware(reduxThunk))
  // composeWithDevTools() // 如果没用这个异步的applyMiddleware，第二个参数就是直接调用即可
)
```



