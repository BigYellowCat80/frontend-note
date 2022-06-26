import React, { Component } from "react"
import { Button, DatePicker } from "antd"
import { SearchOutlined } from "@ant-design/icons"

import "./App.css"

export default class App extends Component {
  getDate = (date, dateString) => {
    console.log(date, dateString)
  }

  render() {
    return (
      <div>
        <div className="item buttons">
          <Button type="primary">Primary Button</Button>
          <Button type="primary" icon={<SearchOutlined />}>
            Search
          </Button>
        </div>

        <div className="item date">
          <DatePicker onChange={this.getDate} />
        </div>
      </div>
    )
  }
}
