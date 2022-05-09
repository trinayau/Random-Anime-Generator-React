import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan } from '@fortawesome/free-solid-svg-icons'

export default function DeleteButton({ handleClick }) {
    return (
        <span role="button" 
                aria-label="delete" 
                className="delete-btn" 
                onClick={handleClick}>
            <FontAwesomeIcon  icon={faBan} />
        </span>
    )
}
