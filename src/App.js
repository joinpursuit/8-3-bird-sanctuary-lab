import React from "react";
import birdData from "./data/birds";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
 birdInCart: [],
    }
    this.birdData = this.props
  }

  addToCart = (bird) => {
    return <CartItem name={bird.name} amount={bird.amount} />
  }

  render(){ return (
    <div className="parent">
      <div className="left">
        <Cart birds={this.birdData} />
        <Checkout />
        </div>
        <BirdProfile birdData ={this.props} />
      <h1>Hello, world!</h1>
    </div>
  );
  }
};

export default App;
