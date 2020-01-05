import React from "react";
import emojipedia from "../emojipedia";
import Emoji from "./Emoji";

function App() {

  // function to create an emoji as they are looped
  function createEmoji(entry){

    return (
      <Emoji  
        key = {entry.id}
        emoji = {entry.emoji}
        name = {entry.name}
        meaning = {entry.meaning}
      />
    );
   
  }

  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>

      <dl className="dictionary">

        {emojipedia.map(createEmoji)}

      </dl>
    </div>
  );
  
}

export default App;
