import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import birds from "./data/birds"

ReactDOM.render(
  <React.StrictMode>
    <App birds={birds} />
  </React.StrictMode>,
  document.getElementById("root")
);
