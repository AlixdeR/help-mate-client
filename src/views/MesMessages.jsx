import React , {useState, useEffect} from 'react'
import DisplayMessages from "../components/messages/DisplayMessages";
import PostMessage from "../components/messages/PostMessage";
import MesConv from "../components/messages/MesConv";
import APIHandler from "../api/APIHandler";
import { useAuth } from "../auth/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots} from "@fortawesome/free-regular-svg-icons";

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
        <div className='conversation-placeholder mes-messages-placeholder'>
        <FontAwesomeIcon
        className="is-clickable"
        size="10x"
        color='rgba(128, 128, 128, 0.3)'
        icon={faCommentDots}/>
        <div className='title' style={{color:'rgba(128, 128, 128, 0.3)'}}>Discutez avec la communauté</div>
        </div>
        </div>
    )
}
