import displaySingleBird from './BirdCard';
import birdData from './data/birds.js';
import { React } from 'react';
import { render } from '@testing-library/react';
class App extends React.Component {
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
    return <main></main>;
  }
}
export default App;
