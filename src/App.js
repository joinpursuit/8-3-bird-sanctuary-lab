import React from "react";
import BirdCardContainer from "./BirdCardContainer";
import birdData from "./data/birds";
import bonusItems from "./data/bonusItems";
import Cart from "./Cart";

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
      </div>
    );
  }
}

export default App;
