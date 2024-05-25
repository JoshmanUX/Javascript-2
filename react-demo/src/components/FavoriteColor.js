import React, { useState } from "react";
import "../App.css";

function FavoriteColor() {
  const [color, setColor] = useState("red");
  return (
    <>
      <h1>
        My favorite color is <span className={color}>{color}</span>
      </h1>
      <button onClick={() => setColor("green")}>Green</button>
      <button onClick={() => setColor("blue")}>Blue</button>
      <button onClick={() => setColor("yellow")}>Yellow</button>
      <button onClick={() => setColor("orange")}>Orange</button>
      <button onClick={() => setColor("red")}>Red</button>
    </>
  );
}

export default FavoriteColor;
