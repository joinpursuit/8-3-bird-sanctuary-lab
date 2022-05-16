import React from "react";
import BirdCardContainer from "./BirdCardContainer";
import Cart from "./Cart";
import CheckOut from "./CheckOut";
import birdData from "./data/birds";
import bonusItems from "./data/bonusItems";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      adoptedBirds: [],
    };
  }

  adoptHandler = (id, name, amount) => {
    let copyOfAdoptedBirds = [...this.state.adoptedBirds];
    copyOfAdoptedBirds.push({ id, name, amount });
    this.setState({
      adoptedBirds: copyOfAdoptedBirds,
    });
  };

  checkOutHandler = (event) => {
    event.preventDefault();
    if (this.state.adoptedBirds.length > 0) {
      alert("You have adopted birds. Thank you!");
      this.setState({
        adoptedBirds: [],
      });
    } else {
      alert("You haven't adopted any birds yet!");
    }
  };

  removeItemHandler = (id) => {
    let copyOfAdoptedBirds = [...this.state.adoptedBirds];
    for (let i = 0; i < copyOfAdoptedBirds.length; i++) {
      if (copyOfAdoptedBirds[i].id === id) {
        copyOfAdoptedBirds.splice(i, 1);
        break;
      }
    }
    this.setState({
      adoptedBirds: copyOfAdoptedBirds,
    });
  };

  render() {
    return (
      <div className="app">
        <BirdCardContainer
          birdData={birdData}
          adoptHandler={this.adoptHandler}
        />
        <Cart
          bonusItems={bonusItems}
          adoptedBirds={this.state.adoptedBirds}
          removeItemHandler={this.removeItemHandler}
        />
        <CheckOut checkOutHandler={this.checkOutHandler} />
      </div>
    );
  }
}

export default App;
