import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {

    const navigate = useNavigate();

    const[title, setTitle] = useState('');
    const[body, setBody] = useState('');
    const[author, setAuthor] = useState('Yoshi');
    const [isPending, setIsPending] = useState(false);

    function handleSubmit() {
        const path=`/random`;
        navigate(path);
    }
    
    return (
        <div className="create">
            <h2>Add a review!</h2>
            <form onSubmit={handleSubmit}>
                <label>Review Title:</label>
                <input type="text" 
                onChange={(e) => setTitle(e.target.value)} 
                value={title}
                aria-label="Title"></input>
                <label>Review Body:</label>
                <textarea required
                value={body}
                onChange={(e)=> setBody(e.target.value)}>
                </textarea>
                <label>Review Author:</label>
                <select
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}>
                    <option value="Kakashi">Kakashi</option>
                    <option value="Naruto">Naruto</option>
                    <option value="Sakura">Sakura</option>
                    <option value="Sasuke">Sasuke</option>
                </select>
                <button>Add review</button>
            </form>
        </div>
     );
}
 
export default Create;
