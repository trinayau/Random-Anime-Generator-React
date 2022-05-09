import React from "react";
import { Link } from "react-router-dom";
const NotFoundPage = () => {
    return (<div className="not-found">
    <h1>Hey, are you lost?</h1>
    <h1>Why don't you go home?</h1>
    <Link to="/">Back to the homepage</Link>
    </div> );
}
 
export default NotFoundPage;
