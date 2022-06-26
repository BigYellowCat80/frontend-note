import React, { Component } from "react"
import "./index.css"

export default class Modal extends Component {
  close = () => {
    const { close } = this.props
    close("none")
  }

  render() {
    const { display, title } = this.props
    return (
      <div className="modal" style={{ display }}>
        <div className="content">
          <header>
            <h3>This is the title from App: {title}</h3>
            <div className="close" onClick={this.close}>
              X
            </div>
          </header>

          {this.props.render(title)}
        </div>
      </div>
    )
  }
}
