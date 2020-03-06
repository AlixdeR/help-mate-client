import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar} from "@fortawesome/free-solid-svg-icons"
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons"

export default function StarsRating({n}) {
    return (
        <>
        <div>{[...Array(n)].map((e, i) => <span key={i}><FontAwesomeIcon
            icon={faStar} color='gold'/></span>)}
        {[...Array(5-n)].map((e, i) => <span key={i}><FontAwesomeIcon
            icon={farStar} color='gold'/></span>)}
        </div>
        </>
    )
}
