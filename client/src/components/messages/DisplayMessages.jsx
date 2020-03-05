import React from 'react'
import OneMessage from "../../components/messages/OneMessage";



export default function DisplayMessages({messages}) {
    console.log('length',messages.length)
    return (
        <div className='messages-container'>
            {messages.length && messages.map((msg,i)=>(
                <div>
                <OneMessage message={msg}/>
                </div>
            ))}
            {!messages.length && <p>Engagez la conversation</p> }
        </div>
    )
}
