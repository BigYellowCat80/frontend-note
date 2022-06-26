import React from "react"

export default function Count() {
  const [count, setCount] = React.useState(0)
  const [name, setName] = React.useState("Anne")

  function $setCount() {
    // 1. setCount直接调用
    // setCount(count + 1)

    // 2. setCount传入函数
    setCount((count) => count + 1)
  }

  function $setName() {
    setName("Peter")
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
      </div>
    </div>
  )
}
