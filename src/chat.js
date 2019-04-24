import React, { Component } from 'react'


class ChatBoxComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chatHistory: ""
        }
        this.handleSubmission = this.handleSubmission.bind(this)
    }

    handleSubmission(chatMessage){
        this.setState({
            chatHistory: "Me: " + chatMessage + "\n" + this.state.chatHistory
        })

        fetch('https://aibo-back-end.herokuapp.com/functional_chat')
            .then(resp => resp.json())
            .then(response => this.setState({
                chatHistory: "Bot: " + response.intent + "\n" + this.state.chatHistory
            }))
    }

    render() {
        return (
            <ChatBox chatHistory={this.state.chatHistory} submitHandler={this.handleSubmission}></ChatBox>
        )
    }
}

const ChatBox = ({chatHistory="", submitHandler=() => {}}) => {
    let _chatMessage

    const handleSubmit = (event) => {
        event.preventDefault()
        submitHandler(_chatMessage.value)
        _chatMessage.value = ""
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group row">
                    <input type="text" className="form-control input-sm col-sm-8"
                        ref={input => _chatMessage = input}/>
                    <input type="submit" className="col-sm-3 btn btn-primary form-default-button" value="Send"/>
                </div>
                <textarea className="form-control input-sm col-sm-11" readOnly value={chatHistory}></textarea>
            </form>
        </div>
    )
}

export default ChatBoxComponent