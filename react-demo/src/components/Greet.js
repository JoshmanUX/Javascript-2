import React from "react";

//react component
function Greet(props) {
  console.log(props);
  return (
    <>
      <h1>
        Hello {props.firstName} {props.lastName}
      </h1>
      {props.children}
      <p>paragraph</p>
    </>
  );
}

const Greet2 = ({ firstName, lastName }) => {
  return (
    <h1>
      Hello Again {firstName} {lastName}
    </h1>
  );
};

const Greet3 = ({ firstName, lastName }) => {
  return (
    <h1>
      So....We meet again {firstName} {lastName}!
    </h1>
  );
};

export { Greet, Greet2, Greet3 };
