import React from 'react'
import { Row } from 'reactstrap'
import Messages from './Messages'
const MessageBox = ({ messages, typingMessage }) => {
    return (
        <Row style={styles.messageBox}>
            <Messages messages={messages} />
            <p>{typingMessage}</p>
        </Row>
    )
}
export default MessageBox
const styles = {
    messageBox: {
        minHeight: '40vh',
        backgroundColor: '#f5f5ef'
    }
}
