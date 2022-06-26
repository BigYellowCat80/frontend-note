import { Navigate } from "react-router-dom"

import Home from "../pages/home"
import News from "../pages/home/news"
import Messages from "../pages/home/message"
import About from "../pages/about"
import Detail from "../pages/home/message/detail"

const routes = [
  {
    path: "/home",
    element: <Home />,
    children: [
      { path: "news", element: <News /> },
      {
        path: "message",
        element: <Messages />,
        children: [{ path: "detail/:id/:title", element: <Detail /> }]
      },
      { path: "", element: <Navigate to="message" /> }
    ]
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
