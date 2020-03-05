import React , {useState, useEffect} from 'react'
import DisplayMessages from "../components/messages/DisplayMessages";
import PostMessage from "../components/messages/PostMessage";
import MesConv from "../components/messages/MesConv";
import APIHandler from "../api/APIHandler";
import { useAuth } from "../auth/useAuth";

export default function Conversation({match}) {

    const { isLoading, currentUser } = useAuth();
    console.log('curentUser', currentUser )
    // const [messages, setMessages] = useState([])
    const [conversations, setConversations] = useState([])
    // const [text, setText] = useState("")
    // const [newMsg, setNewMsg] = useState(false)
    // const [user, setUser] = useState(false)
    // const textarea = React.createRef();

    // useEffect(()=>{
    //     APIHandler.get(`/messages/${match.params.to_id}`)
    //     .then(apiRes => setMessages(apiRes.data))
    //     .catch()
    // },[newMsg])

    useEffect(()=>{
        console.log('héhooo')
        APIHandler.get(`/messages/all/${currentUser._id}`)
        .then(apiRes => {
            console.log('yoooooo');
            setConversations(apiRes.data)})
        .catch()
    },[currentUser])

    return (
        <div className='conversation-page'>
        <MesConv currentUser= {currentUser} conversations={conversations} />
        </div>
    )
}
