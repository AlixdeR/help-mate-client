import React from 'react'
import OneComment from '../comments/OneComment'

export default function DisplayComments({comments}) {
    return (
        <div className='display-comments'>
            {!comments && <p> <strong>PAS ENCORE DE COMMENTAIRE !</strong></p>}
            {comments && comments.map((comment, i)=>(
                <div key={i}>
                <OneComment comment={comment} />
                </div>
            ))}
        </div>
    )
}
