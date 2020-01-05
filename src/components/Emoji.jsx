import React from "react";
import Description from "./Description";
import Title from "./Title";

// This is 1 emoji panel

function Emoji(props){

    return(
        <div className = "term">
            <Title img = {props.emoji} name = {props.name}/>
            <Description content = {props.meaning}/>
        </div>
    );

}



export default Emoji;