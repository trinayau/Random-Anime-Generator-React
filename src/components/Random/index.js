import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import ShowCard from "../ShowCard";
import axios from 'axios';

const Random = () => {
    const navigate = useNavigate();
    function handleClick() {
        navigate(-1);
    }

    const [anime, setAnime] = useState({aired: {string: ''}, images: {jpg: {large_image_url: ''}}});
    
    
    useEffect(() =>{ 
        async function searchApi() {
            try{
                const result = await axios.get(`https://api.jikan.moe/v4/random/anime`);
                setAnime(result.data.data);
                // console.log(result.data.data)
               
                
            }catch(err){
                console.error(err)
            }
        }
        searchApi();
        }, [])
    
    return ( 
    <div className="randomPage">
        <ShowCard name={anime.title} summary={anime.synopsis} image={anime.images} score={anime.score} episodes={anime.episodes} aired={anime.aired} images={anime.images}/>
        </div>
    )

}
 
export default Random;
