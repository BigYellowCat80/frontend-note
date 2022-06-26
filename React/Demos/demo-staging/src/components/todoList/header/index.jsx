import React from "react"
import { nanoid } from "nanoid"

import "./index.css"

export default function index(props) {
  const { add } = props

  function $add(event) {
    let { value } = event.target
    value = value.trim()
    const { keyCode } = event

    if (keyCode === 13 && value) {
      const item = {
        id: nanoid(),
        value,
        done: false
      }
      console.log(item)
      add(item)
      event.target.value = ""
    }
  }
  return (
    <div className="header">
      <input type="text" placeholder="Type here..." onKeyDown={$add} />
    </div>
  )
}
