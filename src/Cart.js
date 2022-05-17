import React from "react";

class Cart extends React.Component {
  /**
   * Display the adopted bird as list item with bird's name and price and remove button
   * @param {[]Object} adoptedBirds - bird object, each bird object contains property of
   * id, name , and amount
   * @param {fn} removeItemHandler - function that remove the adopted object in the state
   * when the button clicked
   * @returns an array of list item with bird name , price and a remove button
   */
  displayAdoptedBirds = (adoptedBirds, removeItemHandler) => {
    return adoptedBirds.map((adoptedBird, index) => {
      return (
        <li key={index}>
          {adoptedBird.name} ${adoptedBird.amount}
          <button
            onClick={() => {
              removeItemHandler(adoptedBird.id);
            }}
          >
            Remove
          </button>
        </li>
      );
    });
  };

  totalCost = (adoptedBirds) => {
    return adoptedBirds.reduce((total, bird) => {
      return (total += bird.amount);
    }, 0);
  };

  bonusItemsHandler = (bonusItems, adoptedBirds) => {
    const cost = this.totalCost(adoptedBirds);
    let bonusItemsEarned = [];

    if (cost >= 100) {
      bonusItemsEarned.push(<li key={bonusItems[0]}>{bonusItems[0]}</li>);
    }
    if (cost >= 300) {
      bonusItemsEarned.push(<li key={bonusItems[1]}>{bonusItems[1]}</li>);
    }
    if (cost >= 500) {
      bonusItemsEarned.push(<li key={bonusItems[2]}>{bonusItems[2]}</li>);
    }
    if (cost >= 1000) {
      bonusItemsEarned.push(<li key={bonusItems[3]}>{bonusItems[3]}</li>);
    }

    return bonusItemsEarned;
  };

  render() {
    const { bonusItems, adoptedBirds, removeItemHandler } = this.props;

    return (
      <div className="Cart">
        <h3>Cart</h3>
        <h5>Discount: {adoptedBirds.length >= 3 ? 10 : 0}%</h5>
        <h4>Total: ${this.totalCost(adoptedBirds)}</h4>
        <ol>{this.displayAdoptedBirds(adoptedBirds, removeItemHandler)}</ol>
        <p>Your donations qualify you for the following items:</p>
        <h5>Bonus Items:</h5>
        <ul>{this.bonusItemsHandler(bonusItems, adoptedBirds)}</ul>
      </div>
    );
  }
}

export default Cart;
