import React from 'react'
import SpeechRecognition from 'react-speech-recognition'

const Dictaphone = ({transcript, resetTranscript, recognition, startListening, stopListening}) => {
    recognition.lang = 'id-ID'

    const toggleDictaphone = (event) => {
        event.target.checked? startListening() : stopListening()
    }

    return (
        <div>
            <input type="checkbox" onChange={toggleDictaphone}></input>
            <button onClick={resetTranscript}>Reset</button>
            <br></br>
            <span>{transcript}</span>
        </div>)
}

export default SpeechRecognition({autoStart: false})(Dictaphone)