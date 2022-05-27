import React from 'react';
import { render } from '@testing-library/react';
import BirdGallery from './Components/BirdGallery';
import Cart from './Components/Cart';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }

  getAdoptedBird = (bird) => {
    this.setState({
      cart: [...this.state.cart, bird]
    })
  };

  render() {
    const { birdData, bonusItems } = this.props;
    const { cart } = this.state;

    return (
      <div className="app-container">
        <Cart cart={cart} bonusItems={bonusItems} />
        <BirdGallery
          getAdoptedBird={this.getAdoptedBird}
          birdData={birdData}
        />
      </div>
    );
  }
}

export default App;
