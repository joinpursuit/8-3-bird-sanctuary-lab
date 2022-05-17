import react from "react";

class Cart extends react.Component {
  render() {
    let birdsArray = this.props.adoptedBirdsArray;
    let birdCost = this.props.birdCost;

    return (
      <div className="Cart">
        <h5>Cart</h5>
        <p>Discount:</p>
        <h4>Total: ${birdCost}</h4>
        <ol>
          {birdsArray.map((bird) => (
            <li>{bird}</li>
          ))}
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
