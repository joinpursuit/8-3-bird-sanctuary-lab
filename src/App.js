import React from 'react';
import BirdCardCollection from './Components/BirdCardCollection';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import birdData from './data/birds';
import bonusItems from './data/bonusItems';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      birdArr: [],
    };
  }

  handleAdopted = (id, name, amount) => {
    let newBird = [...this.state.birdArr];
    let chosenBird = newBird.some((bird) => {
      return bird.id === id;
    });

    if (!chosenBird) {
      newBird.push({ id, name, amount });
      this.setState({ birdArr: newBird });
    }
  };

  handleCheckout = (event) => {
    event.preventDefault();
    if (this.state.birdArr.length > 0) {
      alert('You have adopted birds. Thank you!');
      this.setState({
        birdArr: [],
      });
    } else {
      alert('Your cart is empty. Please save our bird(s)!');
    }
  };

  handleDeleteItem = (id) => {
    let newBird = [...this.state.birdArr];
    for (let i = 0; i < newBird.length; i++) {
      if (newBird[i].id === id) {
        newBird.splice(i, 1);
        break;
      }
    }
    this.setState({
      birdArr: newBird,
    });
  };

  render() {
    return (
      <div className='App'>
        <title>Birds Santuary App</title>

        <h2>Welcome to The Birds Santuary!</h2>

        <div className='app'>
          <BirdCardCollection
            birdData={birdData}
            handleAdopted={this.handleAdopted}
          />
          <Cart
            bonusItems={bonusItems}
            birdData={birdData}
            birdArr={this.state.birdArr}
            handleDeleteItem={this.handleDeleteItem}
          />
          <Checkout
            handleCheckout={this.handleCheckout}
            birdArr={this.state.birdArr}
          />
        </div>
      </div>
    );
  }
}

export default App;
