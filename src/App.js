import React from "react";
import BirdHome from "./Components/BirdHome";
import birdData from "./data/birds";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import bonusItems from "./data/bonusItems";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pickBirds: [],
    };
  }

  addToCart = (e) => {
    const { value } = e.target;
    this.setState({
      pickBirds: [
        ...this.state.pickBirds,
        birdData.find((bird) => bird.id === Number(value)),
      ],
    });
  };

  removeFromCart = (bird) => {
    const { pickBirds } = this.state;
    function removeItemOnce(arr, value) {
      const index = arr.indexOf(value);
      if (index > -1) {
        arr.splice(index, 1);
      }
      return arr;
    }
    this.setState({
      pickBirds: removeItemOnce(pickBirds, bird),
    });
  };

  FormSubmit = (e) => {
    e.preventDefault();
    alert("You have adopted a beautiful bird. Thank you very much!");
    this.setState({
      pickBirds: [],
    });
  };

  render() {
    const { pickBirds } = this.state;
    return (
      <div>
        <h1>Welcome to the Bird Sanctuary</h1>
        <BirdHome birds={birdData} addToCart={this.addToCart} />
        <Cart
          pickBirds={pickBirds}
          bonusItems={bonusItems}
          removeFromCart={this.removeFromCart}
        />
        <Checkout handleFormSubmit={this.handleFormSubmit} />
      </div>
    );
  }
}

export default App;

