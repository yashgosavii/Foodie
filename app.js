// importing react and react-dom

import React from "react";
import ReactDOM from "react-dom/client";

// core react element
// const heading = React.createElement('h1',{id: "heading"}, "Hello World!");

// JSX
const heading = (
  <h1 id="heading" className="header">
    Hello JSX!
  </h1>
);

// React Functinal Component

const HeadingComponent = () => {
    return <h1 id="heading"> Namaste React!</h1>
}

// const HeadingComponent = () => (
//     <h1 id="heading"> Namaste React!</h1>
// )

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(HeadingComponent());
root.render(<HeadingComponent/>);

