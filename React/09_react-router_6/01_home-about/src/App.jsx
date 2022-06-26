import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"

import "./App.css"
import MyNavLink from "./components/myNavLink"
import Home from "./pages/home"
import About from "./pages/about"

export default function App() {
  return (
    <div>
      <div className="links">
        <MyNavLink to="/home">Home</MyNavLink>
        <MyNavLink to="/about">About</MyNavLink>
      </div>
      <div className="routes">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Navigate to="/about" />} />
        </Routes>
      </div>
    </div>
  )
}
