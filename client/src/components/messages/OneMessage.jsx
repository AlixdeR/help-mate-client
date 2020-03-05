import React from 'react'
import { useAuth } from "../../auth/useAuth";


export default function OneMessage({message}) {
    const { isLoading, currentUser } = useAuth();

    return (
        <article className={message.from == currentUser._id? "me is-dark message msg" : "you message is-info msg"} >
             
            <div class="message-body">
            {message.text}
            </div>
        </article>
    )
}
