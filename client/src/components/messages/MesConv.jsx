import React from 'react'
import {Link,  withRouter} from 'react-router-dom'


function MesConv({conversations, currentUser, history}) {
    var other;
    function whatUser (conv){
        if(conv.from._id==currentUser._id) {return conv.to}
        else { return conv.from}
    }
    function changePage (conv){
        history.push(`/messages/${whatUser(conv)._id}`)
    }
    return (
        <div className='mes-conv-placeholder list is-hoverable'>
             {conversations.length && conversations.map((conv,i)=>(
                <a className='list-item' onClick={()=>(changePage (conv))}> {whatUser(conv).name}</a>
                
            ))}
        </div>
    )
}

export default withRouter(MesConv)
