import React from "react";
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
  render() {
    const { birds } = this.props;
    return (
      <div>
        <h1>Bird Sanctuary</h1>
        <BirdSection birds={birds} />;
        <Cart />
        <Checkout />
      </div>
    );
  }
}

export default App;
