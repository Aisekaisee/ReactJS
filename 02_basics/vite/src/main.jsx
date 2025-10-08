import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import React from "react";

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click to visit google",
};

function MyApp(){
  return(
    <h1>My application</h1>
  )
}

const anotherElement = (
  <a href="http://google.com" target="_blank">
    Visit Google
  </a>
);

const aReactElement = React.createElement(
  "a", 
  { href: "http://google.com" },
  "Click to visit google"

);

createRoot(document.getElementById("root")).render(
  // What kind of input can jsx directly render
  // anotherElement -> sort of string output
  // aReactElement -> inbuilt create element 
  // MyApp() ->  functions
  <App/>
);
