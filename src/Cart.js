import React from "react";

class Cart extends React.Component {
  displayAdoptedBirds = (adoptedBirds) => {
    return adoptedBirds.map((adoptedBird) => {
      return (
        <li key={adoptedBird.id}>
          {adoptedBird.name} ${adoptedBird.amount}
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
      bonusItemsEarned.push(<li>{bonusItems[0]}</li>);
    }
    if (cost >= 300) {
      bonusItemsEarned.push(<li>{bonusItems[1]}</li>);
    }
    if (cost >= 500) {
      bonusItemsEarned.push(<li>{bonusItems[2]}</li>);
    }
    if (cost >= 1000) {
      bonusItemsEarned.push(<li>{bonusItems[3]}</li>);
    }

    console.log("item", bonusItemsEarned);
    return bonusItemsEarned;
  };

  render() {
    const { bonusItems, adoptedBirds } = this.props;
    console.log(adoptedBirds);

    return (
      <div className="Cart">
        <h3>Cart</h3>
        <h4>Discount: {adoptedBirds.length >= 3 ? 10 : 0}%</h4>
        <h4>Total: ${this.totalCost(adoptedBirds)}</h4>
        <ol>{this.displayAdoptedBirds(adoptedBirds)}</ol>
        <h4>Bonus Items:</h4>
        <ul>{this.bonusItemsHandler(bonusItems, adoptedBirds)}</ul>
      </div>
    );
  }
}

export default Cart;
