import React, { Component } from "react"
import { NavLink } from "react-router-dom"

// export default class MyNavLink extends Component {
//   render() {
//     console.log("this.props", this.props)
//     const { to, children } = this.props
//     return (
//       <NavLink activeClassName="active" to={to}>
//         {children}
//       </NavLink>
//     )
//   }
// }

export default class MyNavLink extends Component {
  render() {
    console.log("this.props", this.props)
    return <NavLink activeClassName="active" {...this.props}></NavLink>
  }
}
