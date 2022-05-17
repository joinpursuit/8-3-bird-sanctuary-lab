import React from 'react'
import './App.css'
import CheckOut from './Components/Checkout'
import Cart from './Components/Cart'
import BirdCard from './Components/BirdCard'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cart: [],
    }
  }

  addCart = (bird) => {
    let { cart } = this.state
    // cart.push({ bird })
    const newCart = [...cart, bird]
    this.setState({ cart: newCart })
    console.log(newCart)
  }

  render() {
    const { birdData } = this.props
    const { cart } = this.state

    return (
      <div>
        <BirdCard birdData={birdData} addCart={this.addCart} />
        <Cart cart={cart} />
        <CheckOut />
      </div>
    )
  }
}

export default App
