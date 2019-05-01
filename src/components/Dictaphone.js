import React from "react";
import SpeechRecognition from "react-speech-recognition";

const Dictaphone = ({
  transcript,
  resetTranscript,
  recognition,
  startListening,
  stopListening
}) => {
  recognition.lang = "en-US";

  const toggleDictaphone = (event, startRecording) => {
    if (startRecording) {
      resetTranscript();
      startListening();
    } else {
      stopListening();
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
        <div className="ui horizontal divider">Response</div>
        <div className="ui message">{transcript}</div>
      </div>
    </div>
  );
};

export default SpeechRecognition({ autoStart: false })(Dictaphone);
