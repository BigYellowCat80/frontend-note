

```jsx
import React from "react"

export default function Count() {
  const input = React.useRef()

  function getValue() {
    alert(input.current.value)
  }

  return (
    <div>
      <input type="text" ref={input} />
      <button onClick={getValue}>get value</button>
    </div>
  )
}

```

