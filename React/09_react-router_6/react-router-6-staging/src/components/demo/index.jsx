import React from "react"
import { useInRouterContext } from "react-router-dom"

export default function Demo() {
  console.log("Demo - useInRouterContext", useInRouterContext())
  return <div>Demo</div>
}
