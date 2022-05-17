import { render } from "@testing-library/react";
import React from "react";
import bonusItems from "../data/bonusItems";

class Cart extends React.Component {
  constructor (props) {
    super(props);
  }

  

  render() {
    return(
      <>
        <section className="Cart">
          <h2>Cart</h2>
          <p>Discount: {this.props.discount}%</p>
          <h4>Total: $ {this.props.total}</h4>
          <ol>{(this.props.cart).map(obj => {
            return <li key={obj.id}><span>{obj.name} ${obj.amount}</span>
                    <button onClick={() => this.props.handleDelete(obj.id, obj.amount, true)}>X</button> 
                   </li>})}
          </ol>
          <p>Your donations has qualified for the following items</p>
          <ul>
            {this.props.total >= 100 && <li>{bonusItems[0]}</li>}
            {this.props.total >= 300 && <li>{bonusItems[1]}</li>}
            {this.props.total >= 500 && <li>{bonusItems[2]}</li>}
            {this.props.total >= 1000 && <li>{bonusItems[3]}</li>}
          </ul>
        </section>
      </>
    )
  }
}

export default Cart;