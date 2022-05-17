import react from "react";
import bonusItems from "../data/bonusItems";

class Cart extends react.Component {
  render() {
    let adoptedBirdsArray = this.props.adoptedBirdsArray;
    let birdCost = this.props.birdCost;

    return (
      <div className="Cart">
        <h5>Cart</h5>
        <p>Discount: {adoptedBirdsArray.length < 3 ? "0%" : "10%"}</p>
        <h4>Total: ${birdCost}</h4>
        <ol>
          {adoptedBirdsArray.map((bird) => (
            <li>{bird}</li>
          ))}
        </ol>
        <p>Your donations have qualified you for the following items:</p>
        {bonusItemsAdder(birdCost)}
      </div>
    );
  }
}

function bonusItemsAdder(total) {
  if (total >= 100 && total <= 300) {
    return (
      <ul>
        <li>{bonusItems[0]}</li>
      </ul>
    );
  }
  if (total > 300 && total <= 500) {
    return (
      <ul>
        <li>{bonusItems[0]}</li>
        <li>{bonusItems[1]}</li>
      </ul>
    );
  }
  if (total > 500 && total <= 1000) {
    return (
      <ul>
        <li>{bonusItems[0]}</li>
        <li>{bonusItems[1]}</li>
        <li>{bonusItems[2]}</li>
      </ul>
    );
  }
  if (total > 1000) {
    return (
      <ul>
        <li>{bonusItems[0]}</li>
        <li>{bonusItems[1]}</li>
        <li>{bonusItems[2]}</li>
        <li>{bonusItems[3]}</li>
      </ul>
    );
  }
}

export default Cart;
