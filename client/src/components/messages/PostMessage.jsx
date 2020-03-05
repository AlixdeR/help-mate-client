import React from 'react'


export default function PostMessage({handleSubmit, handleChange, textarea}) {
    

    return (
        <div className='post-message-container'>
        <form className='is-small' onSubmit={handleSubmit} >
            <textarea className="textarea is-small" ref={textarea} onChange={handleChange}id="story" name="story"
          >
          It was a dark and stormy night...
          </textarea>
          <button className='button is-rounded is-primary'>Envoyer</button>
            </form>
        </div>
    )
}
