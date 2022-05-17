import AllBirds from './AllBirds';
import Cart from './Cart';
import birdData from './data/birds.js';
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
  appendToCart = (bird) => {};
  render() {
    const { birds } = this.props;
    return (
      <main>
        <section></section>
        <section className='BirdPanel'>
          <AllBirds birds={birds} appendToCart={this.appendToCart} />
        </section>
      </main>
    );
  }
}
export default App;
