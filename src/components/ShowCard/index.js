import React from "react";
import { useNavigate } from "react-router-dom";

const ShowCard = ({name, summary, score, episodes, aired,images, rating}) => {

    console.log(rating)
    // const {to} = aired;
    // console.log(to)
    
    const navigate = useNavigate();

    function handleCreate(){
        navigate('/create')
    }

    function handleBack() {
        {/* Save current id in state */}
        navigate(-1);
    }

    function handleNext() {
        {/* Save current id in state */}
        console.log('refreshed')
        window.location.reload(false);
    }
    return ( 
    <div className="random-container">
        {rating !== "R - 17+ (violence & profanity)" && rating !== "R+ - Mild Nudity" && rating !== "Rx - Hentai" ? <> <article className="show-card">
        <h1>{name}</h1>
        <p>Rating: {score !== null ? score : 'No score :('}</p>
        <p>Episodes: {episodes}</p>
        <p>Aired: {aired.string !== null ? aired.string : 'No information'}</p>
        <p>Synopsis: {summary !== null ? summary : 'No synopsis :('}</p>
        <div className="buttons">
        {/* Back Button conditional*/}
        <button onClick={handleBack}>Back</button>
        <button onClick={handleCreate}>Review!</button>
        <button onClick={handleNext}>Next</button>
        </div>
    </article> 
    <div className="random-image">
        <img src={images.jpg.large_image_url}></img>
    </div></>: <><h1>Oops, please refresh the page!</h1><button className="refresh" onClick={handleNext}>Refresh</button></>}
       
    </div>);
}
 
export default ShowCard;
