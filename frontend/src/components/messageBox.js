import React from 'react'
import { Row } from 'reactstrap'
import Messages from './Messages'
const MessageBox = ({ messages, typingMessage }) => {
    return (
        <div style={styles.messageBox} className='col-sm-10 col-md-8 col-lg-8 col-12-6 offset-sm-1 offset-md-2 offset-lg-2 offset-xl-3'>
            <Messages messages={messages} />
            <p>{typingMessage}</p>
        </div>
    )
}
export default MessageBox
const styles = {
    messageBox: {
        minHeight: '40vh',
        backgroundColor: '#f5f5ef'
    }
}
