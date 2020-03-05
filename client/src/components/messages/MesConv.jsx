import React from 'react'
import {Link} from 'react-router-dom'

export default function MesConv({conversations, currentUser}) {
    var other;
    function whatUser (conv){
        if(conv.from._id==currentUser._id) {return conv.to}
        else { return conv.from}
    }
    return (
        <div className='mes-conv-placeholder list is-hoverable'>
             {conversations.length && conversations.map((conv,i)=>(
                <Link  className='list-item' to={`/messages/${whatUser(conv)._id}`}>
                <div> {whatUser(conv).name}</div>
                </Link>
            ))}
        </div>
    )
}