import AllBirds from './AllBirds';
import Cart from './Cart';
import Checkout from './Checkout';
import birdData from './data/birds.js';
import './App.css';
import { Component } from 'react';
//import { React } from 'react';
//import { render } from '@testing-library/react';
class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }

  /**
   * Append the selected bird to the end of the cart array.
   * @param {Object} bird
   */
  appendToCart = (bird) => {
    const cartInstance = [...this.state.cart, bird];
    this.setState({ cart: cartInstance });
  };
  render() {
    const { birds } = this.props;
    return (
      <main className='Main'>
        <section className='birdPanel'>
          <Cart cart={this.state.cart} />
          <Checkout />
          <AllBirds birds={birds} appendToCart={this.appendToCart} />
        </section>
      </main>
    );
  }
}
export default App;
