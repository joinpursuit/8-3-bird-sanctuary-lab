import React from "react";
import BirdGallery from "./Components/BirdGallery";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }

  addToCart = (bird) => {
    // console.log("adding bird to cart", bird.name);
    const newCart = [...this.state.cart, bird];
    this.setState({ cart: newCart });
  };

  render() {
    const { birds } = this.props;
    return (
      <div>
        <div className="left">
          <Cart cart={this.state.cart} />
          <Checkout />
        </div>
        <BirdGallery birds={birds} addToCart={this.addToCart} />
      </div>
    );
  }
}
export default App;
