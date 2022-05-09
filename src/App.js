import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBone } from '@fortawesome/free-solid-svg-icons'
import { fetchDogs } from './actions';
import { useDispatch, useSelector } from 'react-redux';
import { Random, Info } from './components'
import { Routes, Route } from "react-router-dom";
import {default as Layout} from './layouts'

import './styles/app.css';

function App(){

    const dispatch = useDispatch();
    const error = useSelector(state => state.error)
    
    return (
        <Routes>  
        <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Info/>}/>
            <Route path="/random" element={<Random/>}/>
        </Route>
        </Routes>
    )
}

export default App;
