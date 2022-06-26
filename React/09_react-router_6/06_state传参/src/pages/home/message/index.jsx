import React from "react"
import { Link, Outlet } from "react-router-dom"

export default function Message() {
  const [messages] = React.useState([
    {
      id: "001",
      title: "morning"
    },
    {
      id: "002",
      title: "noon"
    },
    {
      id: "003",
      title: "night"
    }
  ])
  return (
    <div>
      <ul>
        {messages.map((el) => {
          return (
            <li key={el.id}>
              <Link to="detail" state={{ id: el.id, title: el.title }}>
                {el.title}
              </Link>
            </li>
          )
        })}
      </ul>

      <hr />

      <Outlet />
    </div>
  )
}
