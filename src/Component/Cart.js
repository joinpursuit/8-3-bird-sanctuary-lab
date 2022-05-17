import { Component } from "react";


class Cart extends Component{
    constructor(){
        super()
    }


    render(){
        return(
            <div className="cart-container">
          <ul>
            <li ></li>
          </ul>
          <div>Subtotal: ${}</div>
          <div>Tax:  </div>
          <div>Total Update:${}</div>
      </div>
        )
    }
}

export default Cart;