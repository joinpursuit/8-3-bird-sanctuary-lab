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

  /**
   * Update the state with new adopted bird object, each bird object contains property of
   * id, name , and amount
   * @param {number} id - id of the bird
   * @param {String} name - name of the bird
   * @param {number} amount - price of the bird
   */
  adoptHandler = (id, name, amount) => {
    let copyOfAdoptedBirds = [...this.state.adoptedBirds];
    copyOfAdoptedBirds.push({ id, name, amount });
    this.setState({
      adoptedBirds: copyOfAdoptedBirds,
    });
  };

  /**
   * After user submit the form, if inputs are valid, alert success purchase, and empty
   * the cart. Otherwise alert error
   * @param {Event} event - submit event
   */
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

  /**
   * Remove the object inside the state array according to the given bird id and update
   * the state
   *
   * @param {number} id - bird id
   */
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
