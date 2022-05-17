import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import birdData from "./data/birds.js"

ReactDOM.render(
  <React.StrictMode>
    <App birdData={birdData} />
  </React.StrictMode>,
  document.getElementById("root")
);
