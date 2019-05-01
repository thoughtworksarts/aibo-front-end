import React, { Component } from "react";
import ChatBoxComponent from "./ChatBox";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <ChatBoxComponent />
      </div>
    );
  }
}

export default App;
