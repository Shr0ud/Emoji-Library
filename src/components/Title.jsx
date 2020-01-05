import React from "react";

// this is the title (name + img) of the emoji

function Title(props){

    return (

        <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">{props.img}</span>
            <span>{props.name}</span>
        </dt>

    );
}


export default Title;