import { Navigate } from "react-router-dom"

import Home from "../pages/home"
import About from "../pages/about"

const routes = [
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/",
    element: <Navigate to="/about" />
  }
]

export default routes
