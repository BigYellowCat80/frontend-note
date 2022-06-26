import React, { Fragment } from "react"

import "./index.css"
import Tab from "./tab"
import News from "./news"
import Sports from "./sports"
import Sociiety from "./sociiety"

export default function Card() {
  const [list] = React.useState([
    {
      id: "001",
      title: "News"
    },
    {
      id: "002",
      title: "Sports"
    },
    {
      id: "003",
      title: "Society"
    }
  ])

  const [activeId, setActiveId] = React.useState("001")

  function renderedComponent() {
    const mapping = {
      "001": <News />,
      "002": <Sports />,
      "003": <Sociiety />
    }

    return mapping[activeId]
  }

  return (
    <Fragment>
      <Tab {...{ list, activeId, setActiveId }} />
      <div className="content"> {renderedComponent()}</div>
    </Fragment>
  )
}
