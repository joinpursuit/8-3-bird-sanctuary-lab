import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import BIRDS from "./data/birds";
import BONUSITEMS from "./data/bonusItems";

ReactDOM.render(
  <React.StrictMode>
    <App birds={BIRDS} bounsItems={BONUSITEMS} />
  </React.StrictMode>,
  document.getElementById("root")
);
