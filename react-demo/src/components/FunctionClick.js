import React from "react";

function FunctionClick() {
    function clickHandler() {
     alert("Function button was clicked");
     console.log("Function click was logged.");
    }
    return (
        <>
        <button onclick={clickHandler}>Function Click</button>
        </>
    )
}

export default FunctionClick;