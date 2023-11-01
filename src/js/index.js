//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import Counter from "./component/counter";

//Programa timer
let tiempo = 0;
setInterval(() => {
    tiempo++;
    ReactDOM.render(<Counter segundos={tiempo}/>, document.querySelector("#app"))
}, 1000)



//render your react application
ReactDOM.render(<Counter segundos={0}/>, document.querySelector("#app"));
