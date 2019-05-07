import React, { Component } from "react";
import SpeechRecognition from "react-speech-recognition";
import { saveHumanInput, getAIResponse } from "../actions/";
import { connect } from "react-redux";

class Dictaphone extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  toggleDictaphone = (event, startRecording) => {
    const {
      transcript,
      resetTranscript,
      startListening,
      stopListening
    } = this.props;

    if (startRecording) {
      resetTranscript();
      startListening();
    } else {
      stopListening();

      this.props.getAIResponse(transcript);
      this.props.saveHumanInput(transcript);
    }
    event.preventDefault();
  };

  handleSubmit = event => {
    this.props.saveHumanInput(this.input.current.value);
    this.props.getAIResponse(this.input.current.value);

    event.preventDefault();
    event.target.reset();
  };

  render() {
    return (
      <div className="ui internally celled grid">
        <div className="row">
          <div className="eight wide right aligned column">
            <button
              onClick={e => this.toggleDictaphone(e, true)}
              className="massive circular ui blue icon button"
            >
              <i className="microphone icon" />
            </button>
            <button
              onClick={e => this.toggleDictaphone(e, false)}
              className="massive circular ui red icon button"
            >
              <i className="stop icon" />
            </button>
          </div>
          <div className="eight wide left middle aligned column">
            <form className="ui mini form" onSubmit={this.handleSubmit}>
              <div className="eight wide field">
                <input
                  type="text"
                  ref={this.input}
                  placeholder="Enter some text to chat!"
                />
              </div>
              <button className="ui mini compact green button" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="twenty wide left middle aligned column">
            <h4 className="ui center aligned header">Audio Input</h4>
            <div className="ui icon mini compact message">
              <i className="comment alternate icon" />
              <div
                style={{ overflow: "auto", maxHeight: "200" }}
                className="content"
              >
                <p>{this.props.transcript}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const dictaphone = SpeechRecognition({ autoStart: false })(Dictaphone);
export default connect(
  null,
  { saveHumanInput, getAIResponse }
)(dictaphone);
