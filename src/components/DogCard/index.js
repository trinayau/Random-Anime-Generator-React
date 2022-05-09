import React from 'react';
import { useDispatch } from 'react-redux';
import { LikeButton, DeleteButton } from '..';
import {toggleLike, deleteDog} from '../../actions'

const DogCard = ({ doggo }) => {
    
    const dispatch = useDispatch(); //talks to global data store
    
    const { id, img, liked } = doggo

    const handleToggleLike = id => {
        console.log('like dog', id);
        dispatch(toggleLike(id))
    };

    const handleDelete = id => {
        console.log('delete dog', id)
        dispatch(deleteDog(id))};
    
    return (
        <div className="card">
            <img src={img} />
            <LikeButton liked={liked} handleClick={() => handleToggleLike(id)}/>
            <DeleteButton handleClick={() => handleDelete(id)}/>
        </div>

    );
}

export default DogCard;
