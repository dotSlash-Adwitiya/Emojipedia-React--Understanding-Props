import React from "react";
import Emoji from "./Emoji";
import emojipedia from "../emojipedia.js";

// Created function that will pass the props to the component
function createEmojis(emoji) {
  return (
    <Emoji
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {/* console.log(emojipedia); */}
        {/* Functional Programming below: */}
        {emojipedia.map(createEmojis)}
      </dl>
    </div>
  );
}

export default App;
