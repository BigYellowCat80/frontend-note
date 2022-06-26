

```jsx
import React, { Component } from "react"
import "./index.css"

const MyContext = React.createContext() // 只创建一个就行
export default class Grand extends Component {
  state = {
    username: "Grand",
    age: 60
  }

  render() {
    const { username, age } = this.state
    return (
      <div className="grand">
        <h3>I'm the Grand Father</h3>
        <MyContext.Provider value={{ username, age }}>
          <Father />
        </MyContext.Provider>
      </div>
    )
  }
}

class Father extends Component {
  render() {
    return (
      <div className="father">
        <h3>I'm the Father</h3>
        <Child />
      </div>
    )
  }
}

// MyContext.Provider只能用于类式组件。祖组件和孙组件（后代所有组件，需要使用时先声明）传值使用
// class Child extends Component {
//   static contextType = MyContext
//   render() {
//     const { username, age } = this.context

//     return (
//       <div className="child">
//         <h3>I'm the Child</h3>
//         <div>
//           State From Grand Father: {username} - {age}
//         </div>
//       </div>
//     )
//   }
// }

// MyContext.Comsumer可以用于类式组件和函数式组件。祖组件和孙组件（后代所有组件，需要使用时先声明）传值使用

function Child() {
  return (
    <div className="child">
      <h3>I'm the Child</h3>
      <MyContext.Consumer>
        {(value) => {
          const { username, age } = value
          return (
            <div>
              State From Grand Father: {username} - {age}
            </div>
          )
        }}
      </MyContext.Consumer>
    </div>
  )
}

```

