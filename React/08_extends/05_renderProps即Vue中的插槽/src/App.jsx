import React, { Component } from "react"

import "./App.css"
import Modal from "./components/modal"
import Friends from "./components/friends"
import Groups from "./components/groups"

export default class App extends Component {
  state = {
    friendsVisible: "none",
    groupsVisible: "none"
  }

  showFriends = () => {
    this.setState({ friendsVisible: "flex" })
  }

  showGruops = () => {
    this.setState({ groupsVisible: "flex" })
  }

  close = (string) => {
    console.log("string", string)
    this.setState({ friendsVisible: string, groupsVisible: string })
  }

  render() {
    const { friendsVisible, groupsVisible } = this.state
    return (
      <div className="container">
        <button onClick={this.showFriends}>Friends</button>
        <button onClick={this.showGruops}>Groups</button>

        <Modal
          title="Friends"
          display={friendsVisible}
          close={this.close}
          render={(title) => <Friends title={title} />}
        ></Modal>

        <Modal
          title="Groups"
          display={groupsVisible}
          close={this.close}
          render={(title) => <Groups title={title} />}
        ></Modal>
      </div>
    )
  }
}
