import React from 'react'
import SingleMessage from './singleMessage'
const Messages = ({ messages }) => {
    // console.log('messages : ', messages)
    return (
        messages.map(message => {
            return <SingleMessage
                singleMessage={message}
            />
        })
    )
}
export default Messages;