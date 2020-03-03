import React from 'react'

export default function OneComment({comment}) {
    
    return (
        <div className='comment'>
            <p className="ad-details">{comment.text}</p>
            {/* <p className="ad-details">{comment.rate}</p> */}
        </div>
    )
}
