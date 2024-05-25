import React from "react";

function Child(props) {
  return (
    <div>
      <button onClick={props.greetHandler}>Greetings, ahoy!</button>
    </div>
  );
}

export default Child;
