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

  adopter = (id, amount, name) => {
    let newCart = [...this.state.cartOfBirds];
    newCart.push({ id, amount, name });
    this.setState({
      cartOfBirds: newCart,
    });
  };
  handleFormSubmit = (e) => {
    e.preventDefault();
    if (this.state.cartOfBirds.length > 0) {
      alert('You have adopted birds. Thank you!');
      this.setState({
        cartOfBirds: [],
      });
    } else {
      alert('Please adopt any cute bird of your choice.');
    }
  };
// Used if and else statement here so when a user purchases any amount of birds or not it gives this alert message.
  remover = (name) => {
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
//using remover to remove the birds the customers select
  render() {
    return (
      <div className="app">
        <h1>Welcome to Feathered Friends Sanctuary!</h1>
        <p>(Cash and debit only)</p>
        <Birdroom birdData={birdData} adopter={this.adopter} />
        <Cart cartOfBirds={this.state.cartOfBirds} remover={this.remover} />
        <Checkout handleFormSubmit={this.handleFormSubmit} />
      </div>
    );
  }
}
//Have the three components to display and click for customers


export default App;
