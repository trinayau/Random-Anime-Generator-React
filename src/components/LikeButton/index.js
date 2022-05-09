import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export default function LikeButton({ handleClick, liked }) {
    return (
        <span role="button" 
                aria-label="like" 
                className="like-btn"
                style={{color: `${liked ? "red" : "white"}`}} 
                onClick={handleClick} >
            <FontAwesomeIcon icon={faHeart} />
        </span>
    )
}
