

#### 1. 之前在redux里面写好的东西保留，需要使用

```bash
npm i redux@4.0.5
```



```bash
npm i redux-thunk@2.3.0
```



#### 2. 安装react-redux

```bash
npm i react-redux@7.2.2
```



#### 3. src下创建containers文件夹，用户存放容器组件

```jsx
import CountUI from "../../components/count/"
import { connect } from "react-redux"

import { add, minus, asyncAdd } from "../../redux/actionCount"

function mapStateToProps(state) {
  return { count: state }
}

function mapDispatchToProps(dispatch) {
  return {
    add: (data) => {
      dispatch(add(data))
    },
    minus: (data) => {
      dispatch(minus(data))
    },
    asyncAdd: (data, delay) => {
      dispatch(asyncAdd(data, delay))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
```



#### 4. App.jsx里引入的UI组件变为引入容器组件，并传入store

```jsx
// import ...
import Count from "./containers/count"

export default class App extends Component {
  render() {
    return (
      <div>
        <Count store={store} />
      </div>
    )
  }
}
```



