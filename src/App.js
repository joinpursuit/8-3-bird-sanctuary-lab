import React from 'react';
import './App.css';
import Cart from './Cart';
import Checkout from './Checkout';
import Birdroom from './Birdroom';
import birdData from './data/birds';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cartOfBirds: [],
    };
  }

  // thanks for the idea of creating a copy cart, Myra.
  adopter = (id, amount, name) => {
    let newCart = [...this.state.cartOfBirds];
    newCart.push({ id, amount, name });
    this.setState({
      cartOfBirds: newCart,
    });
  };

  // check if the cart is empty. if not, display success message
  handleFormSubmit = (e) => {
    e.preventDefault();
    if (this.state.cartOfBirds.length > 0) {
      alert('You have adopted birds. Thank you!');
      this.setState({
        cartOfBirds: [],
      });
    } else {
      alert('Please Adopt Something. Everything Must Go');
    }
  };

  // tough logic here.
  deleter = (name) => {
    let updatedCart = [...this.state.cartOfBirds];
    for (let i = 0; i < updatedCart.length; i++) {
      if (updatedCart[i].name === name) {
        updatedCart.splice(i, 1);
      }
    }
    this.setState({
      cartOfBirds: updatedCart,
    });
  };

  render() {
    return (
      <div className="app">
        <h1>Bird Adoption Sale!!!</h1>
        <p>(Cash only)</p>
        <Birdroom birdData={birdData} adopter={this.adopter} />
        <Cart cartOfBirds={this.state.cartOfBirds} deleter={this.deleter} />
        <Checkout handleFormSubmit={this.handleFormSubmit} />
      </div>
    );
  }
}

export default App;
