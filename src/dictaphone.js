import React from 'react'
import SpeechRecognition from 'react-speech-recognition'
import styles from './dictaphone.module.css';

const Dictaphone = ({transcript, resetTranscript, recognition, startListening, stopListening}) => {
    recognition.lang = 'en-US'

    const toggleDictaphone = (event) => {
        if(event.target.checked){
            resetTranscript()
            startListening()
        }
        else{
            stopListening()
        }
    }

    return (
        <div>
            <input className={`${styles.tgl} ${styles.tgl_flip}`} id="cb5" type="checkbox" onChange={toggleDictaphone}/>
            <label className={styles.tgl_btn} data-tg-off="Off" data-tg-on="On" htmlFor="cb5"></label>
            <br></br>
            <span>{transcript}</span>
        </div>)
}

export default SpeechRecognition({autoStart: false})(Dictaphone)