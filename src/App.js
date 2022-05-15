import React from "react";
import BirdCardContainer from "./BirdCardContainer";
import birdData from "./data/birds";
import bonusItems from "./data/bonusItems";
import Cart from "./Cart";
import CheckOut from "./CheckOut";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      adoptedBirds: [],
    };
  }

  adoptHandler = (id, name, amount) => {
    let copyOfAdoptedBirds = [...this.state.adoptedBirds];
    // console.log(copyOfAdoptedBirdsId);
    let alreadyAdopted = copyOfAdoptedBirds.some((bird) => {
      return bird.id === id;
    });

    if (!alreadyAdopted) {
      copyOfAdoptedBirds.push({ id, name, amount });
      this.setState({
        adoptedBirds: copyOfAdoptedBirds,
      });
    }
  };

  checkOutHandler = (event) => {
    event.preventDefault();
    alert("You have adopted birds. Thank you!");
    this.setState({
      adoptedBirds: [],
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <BirdCardContainer
          birdData={birdData}
          adoptHandler={this.adoptHandler}
        />
        <Cart
          birdData={birdData}
          bonusItems={bonusItems}
          adoptedBirds={this.state.adoptedBirds}
        />
        <CheckOut
          adoptedBirds={this.state.adoptedBirds}
          checkOutHandler={this.checkOutHandler}
        />
      </div>
    );
  }
}

export default App;
