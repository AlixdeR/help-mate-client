import React from 'react'
import OneMessage from "../../components/messages/OneMessage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots} from "@fortawesome/free-regular-svg-icons";



export default function DisplayMessages({messages}) {
    console.log('length',messages.length)
    return (
        
        <div className={messages.length ?'messages-container': 'messages-container mes-messages-placeholder'}>
        
            {messages.map((msg,i)=>(
                <div>
                <OneMessage message={msg}/>
                </div>
            ))}
            {!messages.length
            && <><FontAwesomeIcon
        className="is-clickable"
        size="10x"
        color='rgba(128, 128, 128, 0.3)'
        icon={faCommentDots}/>
        <div className='title' style={{color:'rgba(128, 128, 128, 0.3)'}}>
        Engagez la conversation
        </div> </> }
        </div>
        
    )
}
