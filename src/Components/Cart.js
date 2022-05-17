import react from "react";

class Cart extends react.Component {
  render() {
    return (
      <div className="cart">
        <h5>Cart</h5>
        <p>Discount:</p>
        <p>Total:</p>
        <ol>
          <li>Bird to Adpot</li>
        </ol>
        <p>Your donations have qualified you for the following items:</p>
        <ul>
          <li>Bonus Item</li>
        </ul>
      </div>
    );
  }
}

export default Cart;
