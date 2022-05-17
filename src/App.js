import { Component } from "react";
import data from "./data/birds";
import Birdcard from "./Component/Birdcard";
import Checkout from "./Component/Checkout";
import Cart from "./Component/cart";


class App extends Component {
  constructor(){
    super ()
    this.state = {
      birdProduct: data,
      lastName: " ",
      firstName: " ",
      email: " ",
      zipCode: [],
    }
  }

  buyingComplete = () =>{
   const {lastName, firstName, email, zipCode} = this.state;
  if(lastName !== " "|| firstName !== " "|| email !== ""){
    alert("You Have adopted birds. Thank you!")
    this.setState({
      
    })
  }
}

render (){
  let productDataArr = this.state.birdProduct.map((product) =>{
    return <Birdcard product={product}/>
  })
  return (
  <div>
      <h4></h4>;
        {productDataArr}
      <Cart/>
      <Checkout/>
  </div>
  )
};

}






export default App;
