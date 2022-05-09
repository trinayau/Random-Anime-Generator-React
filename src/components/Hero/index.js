import React from 'react';
import { useNavigate } from "react-router-dom";

const Hero = () => {
    let navigate = useNavigate();
    function handleClick() {
        const path=`/random`;
        navigate(path);
    }
    return ( 
        <div className='hero'>

        <div style={{display: "flex"}}>
            <div>
        <h1>Random Anime <br/>Generator</h1>
        <button onClick={handleClick}>Give me anime!</button>
        </div>
        <div className='doggo-hero'></div>
        </div>
        </div>
 );
}
 
export default Hero;
