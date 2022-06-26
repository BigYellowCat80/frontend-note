import React from "react"
import { nanoid } from "nanoid"

export default function Message() {
  const [messages] = React.useState([
    {
      id: nanoid(),
      message: "morning"
    },
    {
      id: nanoid(),
      message: "noon"
    },
    {
      id: nanoid(),
      message: "night"
    }
  ])
  return (
    <div>
      <ul>
        {messages.map((el) => {
          return <li key={el.id}>{el.message}</li>
        })}
      </ul>
    </div>
  )
}
