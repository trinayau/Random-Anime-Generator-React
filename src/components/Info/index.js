import React from 'react';
import { useNavigate } from "react-router-dom";

const Info = () => {
    let navigate = useNavigate();
    function handleClick() {
        const path=`/random`;
        navigate(path);
    }
    return ( 
        <div className='info'>
        <h2>Click the button above to see what anime you should watch next!</h2>
        
        

        </div>
 );
}
 
export default Info;
