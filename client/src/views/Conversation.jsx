import React , {useState, useEffect} from 'react'
import DisplayMessages from "../components/messages/DisplayMessages";
import PostMessage from "../components/messages/PostMessage";
import MesConv from "../components/messages/MesConv";
import APIHandler from "../api/APIHandler";
import { useAuth } from "../auth/useAuth";

export default function Conversation({match, location}) {

    const { isLoading, currentUser } = useAuth();
    console.log('curentUser', currentUser )
    const [messages, setMessages] = useState([])
    const [conversations, setConversations] = useState([])
    const [text, setText] = useState("")
    const [newMsg, setNewMsg] = useState(false)
    const [user, setUser] = useState(false)
    const textarea = React.createRef();

    useEffect(()=>{
        APIHandler.get(`/messages/${match.params.to_id}`)
        .then(apiRes => setMessages(apiRes.data))
        .catch()
    },[newMsg, location])

    useEffect(()=>{
        console.log('héhooo')
        APIHandler.get(`/messages/all/${currentUser._id}`)
        .then(apiRes => {
            console.log('yoooooo');
            setConversations(apiRes.data)})
        .catch()
    },[currentUser, location])

    const handleChange = e =>{
        setText(e.target.value)
    }

    const handleSubmit = e =>{
    
        e.preventDefault();
        textarea.current.value =''
        
        APIHandler.post(`/messages/${match.params.to_id}`, {text})
        .then(apiRes => {setNewMsg(true)
        })
        .catch()
    }
    return (
        <div className='conversation-page'>
        <MesConv currentUser= {currentUser} conversations={conversations} />
        <div className='conversation-placeholder'>
            <DisplayMessages  messages={messages}/>
            <PostMessage textarea={textarea} handleSubmit={handleSubmit} handleChange={handleChange} />
        </div>
        </div>
    )
}
