import React from "react"
import { Outlet, useNavigate } from "react-router-dom"

import "./index.css"

export default function Message() {
  const navigate = useNavigate()
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

  function setLink(el) {
    navigate("detail", {
      replace: false,
      state: {
        id: el.id,
        title: el.title
      }
    })
  }

  return (
    <div>
      <ul>
        {messages.map((el) => {
          return (
            <li key={el.id} className="list-item">
              <button
                className="button"
                onMouseEnter={() => {
                  setLink(el)
                }}
              >
                {el.title}
              </button>
            </li>
          )
        })}
      </ul>

      <hr />

      <Outlet />
    </div>
  )
}
