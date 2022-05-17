import { Component } from "react"
import BirdPics from "./Components/BirdPics";
import Cart from "./Components/Cart"
import Checkout from "./Components/Checkout"
import "./App.css";




class App extends Component {
constructor() {
super();
this.state = {
  cart: [],
}
}

addToCart = (bird) => {
  [...this.state.cart]
}
  render () {
  const {birds} = this.props;

    return (
    <div className="App">
      <h1>Save a bird</h1>
      <div className="app-grid">
        <Cart cart={this.state.cart}/>
        <Checkout/>
        <BirdPics birds={birds} addToCart={this.addToCart}/> 
      </div>

    </div>
    
  );
};
}

export default App;
