import React from "react";
import BirdsAvailable from "./Components/BirdsAvailable";
import birdData from "./data/birds";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      chosenBirds: [],
    };
  }

  addToCart = (e) => {
    const { value } = e.target;
    this.setState({
      chosenBirds: [
        ...this.state.chosenBirds,
        birdData.find((bird) => bird.id === Number(value)),
      ],
    });
  };

  render() {
    const { chosenBirds } = this.state;
    return (
      <div>
        <h1>Welcome to the Bird Market</h1>
        <BirdsAvailable birds={birdData} addToCart={this.addToCart} />
        <Cart chosenBirds={chosenBirds} />
        <Checkout chosenBirds={chosenBirds} />
      </div>
    );
  }
}

export default App;
