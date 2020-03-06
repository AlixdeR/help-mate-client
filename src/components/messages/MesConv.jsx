import React from 'react'
import {Link,  withRouter} from 'react-router-dom'


function MesConv({conversations, currentUser, history}) {
    console.log('location',history.location)
    var other;
    function whatUser (conv){
        if(conv.from._id==currentUser._id) {return conv.to}
        else { return conv.from}
    }
    function isConvActive (conv){
        if(history.location.pathname == `/messages/${whatUser(conv)._id}`) {return true }
        else { return false}
    }
    function changePage (conv){
        history.push(`/messages/${whatUser(conv)._id}`)
    }
    return (
        <div className='mes-conv-placeholder list is-hoverable'>
             {conversations.map((conv,i)=>(
                 
                <div className={isConvActive(conv) ? 'list-item is-large one-conv is-active':'list-item one-conv'} onClick={()=>(changePage (conv))}> <p style={{'font-size' :'1.5em'}}>{whatUser(conv).name}</p></div>
                
            ))}
        </div>
    )
}

export default withRouter(MesConv)
