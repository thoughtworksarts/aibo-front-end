import React, { Component } from "react";
import SpeechRecognition from "react-speech-recognition";
import { saveHumanInput, getAIResponse } from "../actions/";
import { connect } from "react-redux";

class Dictaphone extends Component {
  render() {
    const {
      transcript,
      resetTranscript,
      startListening,
      stopListening
    } = this.props;

    const toggleDictaphone = (event, startRecording) => {
      if (startRecording) {
        resetTranscript();
        startListening();
      } else {
        stopListening();

        //initiate our action creators
        this.props.getAIResponse(transcript);
        this.props.saveHumanInput(transcript);
      }
      event.preventDefault();
    };

    return (
      <div className="ui two column centered grid">
        <div className="eight column centered row">
          <div className="column">
            <button
              onClick={e => toggleDictaphone(e, true)}
              className="massive circular ui blue icon button"
            >
              <i className="microphone icon" />
            </button>
          </div>
          <div className="column">
            <button
              onClick={e => toggleDictaphone(e, false)}
              className="massive circular ui red icon button"
            >
              <i className="stop icon" />
            </button>
          </div>
        </div>

        <div className="column">
          <div className="ui horizontal divider">Input</div>
          <div className="ui mini visible message">{transcript}</div>
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
