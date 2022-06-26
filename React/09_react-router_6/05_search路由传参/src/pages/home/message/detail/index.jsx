import React from "react"
import { useSearchParams } from "react-router-dom"
// import { useLocation } from "react-router-dom"

export default function Detail() {
  // version 1 常用
  const [search, setSearch] = useSearchParams() // setSearch用户更改search
  console.log("search", search.get("id")) // 002
  const id = search.get("id")
  const title = search.get("title")

  // version 2 不常用，知道即可
  // const location = useLocation()
  // console.log("location", location.search) // ?id=001&title=morning
  return (
    <div>
      <div>id: {id}</div>
      <div>title: {title}</div>
      <button
        onClick={() => {
          setSearch("?id=004&title=tomorrow")
        }}
      >
        setSearch
      </button>
    </div>
  )
}
