import React from "react";
import BirdsAvailable from "./Components/BirdsAvailable";
import birdData from "./data/birds";

class App extends React.Component {
  super() {}
  render() {
    return (
      <div>
        <BirdsAvailable birds={birdData} />
      </div>
    );
  }
}

export default App;
