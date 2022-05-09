import React from 'react';
import { useNavigate } from "react-router-dom";

const Hero = () => {
    let navigate = useNavigate();
    function handleClick() {
        const path=`/random`;
        navigate(path);
    }

    function handleDoggo() {
        navigate('/')
    }
    return ( 
        <div className='hero'>

        <div style={{display: "flex"}}>
            <div>
        <a href='/'><h1>Random Anime <br/>Generator</h1></a>
        <button onClick={handleClick}>Give me anime!</button>
        </div>
        <div className='doggo-hero' onClick={handleDoggo}></div>
        </div>
        </div>
 );
}
 
export default Hero;
