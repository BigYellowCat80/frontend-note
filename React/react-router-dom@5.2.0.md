

#### 1. 安装

```bash
npm i react-router-dom@5.2.0
```



#### 2. App.jsx

```jsx
import React, { Component } from "react"
import { Link, Route } from "react-router-dom"
import Home from "./components/home"
import About from "./components/about"
import "./App.css"

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <h3>React Router</h3>
        <div className="container">
          <div className="nav">
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
          </div>
          <div className="content">
            <Route path="/home" component={Home}></Route>
            <Route path="/about" component={About}></Route>
          </div>
        </div>
      </div>
    )
  }
}

```



#### 3. index.js

```jsx
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import "./index.css"
import App from "./App"

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
)

```

