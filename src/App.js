import React from "react";
import "./App.css";
import BirdSection from "./BirdSection";
import Cart from "./Cart";
import Checkout from "./Checkout";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }

  addToCart = (bird) => {
    console.log(bird.name);
    const newCart = [...this.state.cart, bird];
    this.setState({
      cart: newCart,
    });
  };
  render() {
    const { birds, bonusItems } = this.props;
    return (
      <div className="App">
        <h1>Bird Sanctuary</h1>
        <div>
          <BirdSection birds={birds} addToCart={this.addToCart} />;
          <Cart array={this.state.cart} bonusArray={bonusItems} />
          <Checkout />
        </div>
      </div>
    );
  }
}

export default App;
