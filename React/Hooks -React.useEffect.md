

```jsx
import React from "react"
import ReactDOM from "react-dom"

export default function Count() {
  const [count, setCount] = React.useState(0)
  const [name, setName] = React.useState("Anne")

  React.useEffect(() => {
    console.log("React.useEffect")
    const timer = setInterval(() => {
      setCount((count) => count + 1)
    }, 1000)

    return () => {
      console.log("componentWillUnmount")
      clearInterval(timer)
    } // 这个返回的函数就相当于componentWillUnmount
  }, [name])
  // useEffect第二个参数是一个数组，不传的话，第一个参数就是检测全部state的componentDidMount
  // 传哪个state进去，就相当于对哪个state的componentDidUpdate

  function $setCount() {
    setCount((count) => count + 1)
  }

  function $setName() {
    setName("Peter")
  }

  function $unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById("root"))
  }

  return (
    <div>
      <div>
        <h3>count: {count}</h3>
        <button onClick={$setCount}>add</button>
      </div>

      <hr />

      <div>
        <h3>name: {name}</h3>
        <button onClick={$setName}>changeName</button>
        <button onClick={$unmount}>unmount</button>
      </div>
    </div>
  )
}

```

