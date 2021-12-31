import React, { useState } from 'react';

import './Title.css'

function Title(props){
    
    const [title, setTitle] = useState(props.title);

    function clickHandler(event){
        event.target.classList.add("selected-input");        
    }

    function hoverHandler(event){
        event.target.classList.add("highlight");
    }

    function hoverLeaver(event){
        event.target.classList.remove("highlight");
    }

    function onBlurHandler(event){
        //only fire this at the end of the editing session
        event.target.classList.remove("selected-input");
        setTitle(event.target.innerHTML);
    }



    return (
        <div>
            <input className="title" onFocus={clickHandler} onMouseOver={hoverHandler} onMouseOut={hoverLeaver} onBlur={onBlurHandler} defaultValue={title}    />
        </div>
    );
}
export default Title;