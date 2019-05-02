import React, { Component } from "react";
import ChatBox from "./ChatBox";
import Dictaphone from "./Dictaphone";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Dictaphone />
        <div className="ui horizontal divider">Chat Log</div>
        <ChatBox />
      </div>
    );
  }
}

export default App;
