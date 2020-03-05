import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";


export default function PostMessage({handleSubmit, handleChange, textarea}) {
    

    return (
        <div className='post-message-container'>
        <form className='message-form is-small' onSubmit={handleSubmit} >
            <textarea className="input is-large" ref={textarea} onChange={handleChange}id="story" name="story" placeholder='Ecrivez-ici'>
          </textarea>
          <button className='button msg-btn is-primary'><FontAwesomeIcon
        className="is-clickable"
        size="2x"
        icon={faPaperPlane }/></button>
        </form>
        </div>
    )
}
