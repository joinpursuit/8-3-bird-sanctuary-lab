import "./Cart.css";
import React from "react";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      arrayOfAmounts: [],
    };
  }
  addCartItem = (array) => {
    return (
      <ol>
        {array.map((element) => (
          <li key={element.id} id="listItem">
            {`${element.name}`}
            <h4>{`$${element.amount}`}</h4>
          </li>
        ))}
      </ol>
    );
  };

  addBonusItem = (bonusArray) => {
    return <li>{bonusArray[0]}</li>;
  };

  render() {
    const { array, bonusArray } = this.props;
    return (
      <div className="Cart left-side">
        <h3>Cart</h3>
        <p>{`Discount: 0%`}</p>
        <p>{`Total: 0`}</p>
        {this.addCartItem(array)}
        <ul>{this.addBonusItem(bonusArray)}</ul>
      </div>
    );
  }
}

export default Cart;
