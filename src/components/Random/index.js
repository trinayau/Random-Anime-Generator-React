import React from "react";
import { useNavigate } from "react-router-dom";
import ShowCard from "../ShowCard";

const Random = () => {
    const navigate = useNavigate();



    function handleClick() {
        navigate(-1);
    }
    return ( 
    <div className="randomPage">
        <ShowCard/>
        </div>
    )

}
 
export default Random;
