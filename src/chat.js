import React, { Component } from 'react'

const ChatBox = ({userValue="", chatHistory="", userValueChangeHandler=() => {}, submitHandler=() => {}}) => {
    return(
        <div>
            <form onSubmit={submitHandler}>
                <div className="form-group row">
                    <input type="text" className="form-control input-sm col-sm-8"
                        value={userValue} onVolumeChange={userValueChangeHandler}/>
                    <input type="submit" className="col-sm-3 btn btn-primary form-default-button" value="Send"/>
                </div>
                <textarea className="form-control input-sm col-sm-11" value={chatHistory}></textarea>
            </form>
        </div>
    )
}

export default ChatBox