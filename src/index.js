import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import birdData from "./data/birds";

ReactDOM.render(
  <React.StrictMode>
    <App birdData={birdData}/>
  </React.StrictMode>,
  document.getElementById("root")
);
