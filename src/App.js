import { Component } from "react";
import "./App.css";
// import bounusItems from "./data/bonusItems";
// import BirdInfo from "./data/birds";
import Checkout from "./checkout";
import Cart from "./cart";
import Profiles from "./birdGallery";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }

  addToCart = (bird) => {
    console.log("...Adding bird to cart");
  };

  render() {
    const { birds, bounusItems } = this.props;
    return (
      <div>
        <h1>Save a bird</h1>
        <div>
          <Cart bounusItems={bounusItems} cart={this.state.cart} />
          <Checkout />
          <BirdGallery birds={birds} addToCart={this.addToCart} />
        </div>
      </div>
    );
  }
}

export default App;
