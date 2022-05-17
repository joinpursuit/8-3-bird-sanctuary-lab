import Card from "./Components/Card";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      total: [],
    };
  }

  addToCart = (bird) => {
    const newCart = [...this.state.cart, bird];
    this.setState({ cart: newCart });
    console.log("adding", bird.amount, newCart);
  };


  render() {
    const { birds } = this.props;
    return (
      <div className="App">
        <div>
          <Cart birds={birds} cart={this.state.cart} />
          <Checkout />
          <Card birds={birds} addToCart={this.addToCart} />
        </div>
      </div>
    );
  }
}

export default App;
