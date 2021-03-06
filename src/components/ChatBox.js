import React, { Component } from "react";
import { connect } from "react-redux";

class ChatBox extends Component {
  renderChatLog = () => {
    return this.props.chatHistory.map((message, index) => {
      return <p key={index}>{message}</p>;
    });
  };

  render() {
    return (
      <div style={{ overflow: "auto", maxHeight: 200 }} className="segment">
        <div className="column">
          <div className="ui mini visible message">{this.renderChatLog()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    chatHistory: state.chatHistory
  };
};

export default connect(
  mapStateToProps,
  null
)(ChatBox);
