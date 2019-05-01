import React, { Component } from "react";
import Dictaphone from "./Dictaphone";

class ChatBoxComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatHistory: ""
    };
    this.handleSubmission = this.handleSubmission.bind(this);
  }

  handleSubmission(chatMessage) {
    this.setState({
      chatHistory: "Me: " + chatMessage + "\n" + this.state.chatHistory
    });

    fetch("https://aibo-back-end.herokuapp.com/functional_chat")
      .then(resp => resp.json())
      .then(response =>
        this.setState({
          chatHistory: "Bot: " + response.intent + "\n" + this.state.chatHistory
        })
      );
  }

  render() {
    return (
      <ChatBox
        chatHistory={this.state.chatHistory}
        submitHandler={this.handleSubmission}
      />
    );
  }
}

const ChatBox = ({ chatHistory = "", submitHandler = () => {} }) => {
  let _chatMessage;

  const handleSubmit = event => {
    event.preventDefault();
    submitHandler(_chatMessage.value);
    _chatMessage.value = "";
  };

  //   return (
  //     <div>
  //       <form onSubmit={handleSubmit}>
  //         <div className="form-group row">
  //           <input
  //             type="text"
  //             className="form-control input-sm col-sm-8"
  //             ref={input => (_chatMessage = input)}
  //           />
  //           <input
  //             type="submit"
  //             className="col-sm-3 btn btn-primary form-default-button"
  //             value="Send"
  //           />
  //         </div>
  //         <textarea
  //           className="form-control input-sm col-sm-11"
  //           readOnly
  //           value={chatHistory}
  //         />
  //       </form>
  //     </div>
  //   );

  return (
    <div>
      <Dictaphone style={{ justifyContent: "center" }} />
      {/* <Text Input Component></Text> */}
    </div>
    // <div className="">
    //   <form className="ui form">
    //     <div className="field">
    //       <label>Simple AI Bot</label>
    //       {/* <button className="ui button" type="submit">
    //       Submit
    //     </button> */}
    //       <Test />
    //     </div>
    //     <div className="field">
    //       <label>Enter some text to interact with the AI.</label>
    //       <input type="text" ref={input => (_chatMessage = input)} />
    //     </div>
    //   </form>
    // </div>

    //   <form className="ui form" onSubmit={handleSubmit}>
    //     <div className="field">
    //       <label>Please enter some text</label>
    //       <input type="text" ref={input => (_chatMessage = input)} />
    //       <input
    //         type="submit"
    //         className="col-sm-3 btn btn-primary form-default-button"
    //         value="Send"
    //       />
    //     </div>
    //     <textarea
    //       className="form-control input-sm col-sm-11"
    //       readOnly
    //       value={chatHistory}
    //     />
    //   </form>
    // </div>
  );
};

export default ChatBoxComponent;
