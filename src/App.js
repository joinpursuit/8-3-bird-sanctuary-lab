import React from "react";
import birdData from "./data/birds";
import bonusItems from "./data/bonusItems";
import Cart from "./Cart";
import Checkout from "./Checkout";
import BirdSection from "./BirdSection";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
 birbsInCart: [],
    }
    this.birdData = this.props
  }

  // birbCart = (bird) => {
  //   return <CartItem name={bird.name} amount={bird.amount} />
  // }

  adoption = (id, name, amount) => {
    let birbCopy = [...this.state.birbsInCart];
    birbCopy.push({id,name,amount});
    this.setState({birbsInCart: birbCopy,})
  }

  birbCart = (bird) => {
    console.log("...Adding bird:", bird.name);
    const newCart = [...this.state.cart, bird];
    this.setState({cart: newCart})
  };

  checkingOut = (evt) => {
    evt.preventDefault();
    if (this.state.birbsInCart.length > 0) {
      alert("You have adopted birds. Thank You!");
      this.setState({birbsInCart});
    } else {
      alert("You haven't adopted any birds yet!");
    }
  }

  removeBirb = (id) => {
    let birbCopys = [...this.state.birbsInCart];
    for (let i = 0; i < birbCopys.length; i++) {
      if (birbCopys[i].id === id) {
        birbCopys.splice(i, 1);
        break;
      }
    }
    this.setState({
      birbsInCart: birbCopys,
    });
  };

  render(){
    const {birbs, bonusItems,} = this.props 
    return (
    <div className="parent">
      <div className="left">
        <BirdSection birdData={birdData} adoption={this.adoption}/>
        <Cart bonusItems={bonusItems} birbsInCart={this.state.birbsInCart} removeBirb={this.removeBirb}/>
        <Checkout />
        </div>
        <BirdProfile birdData ={this.props} />
      <Checkout checkingOut={this.checkingOut} />
    </div>
  );
  }
};

export default App;
