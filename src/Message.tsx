import React from 'react'
import messageHoc from './Hoc'

interface UserMessage {
    name: string,
    message: string
}

const example = (props: any): any => <p>Hi {props.name}, {props.message}</p>

const Message = messageHoc(example)

export default Message
