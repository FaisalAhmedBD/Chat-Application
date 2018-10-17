import React from 'react'
import { Row } from 'reactstrap'
import Messages from './Messages'
const MessageBox = ({ messages, typingMessage }) => {
    return (
        <div style={styles.messageBox} >
            <Messages messages={messages} />
            <p>{typingMessage}</p>
        </div>
    )
}
export default MessageBox
const styles = {
    messageBox: {
        minHeight: '40vh',
        backgroundColor: '#f5f5ef',
        padding:'0px'
    }
}
