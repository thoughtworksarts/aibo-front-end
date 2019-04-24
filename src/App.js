import React, { Component } from 'react';
import './App.css';
import Test from './dictaphone'
import ChatBoxComponent from './chat'

class App extends Component {
  render() {
    return (
      <div class="wrapper">
        <Test></Test>
        <ChatBoxComponent></ChatBoxComponent>
      </div>
    );
  }
}

export default App;
