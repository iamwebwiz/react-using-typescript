import React from 'react'

interface UserMessage {
    name: string,
    message: string
}

const Message = (props: any): any => <p>Hi {props.name}, {props.message}</p>

export default Message
