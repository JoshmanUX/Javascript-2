import React from "react";
import { Component } from "react";

class Welcome extends Component {
  render() {
    return (
    <>
    <h1>Welcome {this.props.firstName} {this.props.lastName} </h1>
    </>)
  }
}

/* Class Compontent

class Welcome extends Component {
  render() {
    return (
        <div>
        <h1>Welcome to the Sh@% Show!</h1>
        <p>Multiple lines need 'div' parent (you also don't need to name the div "<>"")</p>
        </div>
    )
  }
} */

class Welcome2 extends Component {
  render() {
    return <h1>Welcome to the next show there good buddy!</h1>;
  }
}

export { Welcome, Welcome2 };
