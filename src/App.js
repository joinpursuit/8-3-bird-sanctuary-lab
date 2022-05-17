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
      total: 0,
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
    const { cart, total } = this.state

    return (
      <div>
        <Cart cart={cart} total={total} />
        <BirdCard birdData={birdData} addCart={this.addCart} />
        <CheckOut />
      </div>
    )
  }
}

export default App
