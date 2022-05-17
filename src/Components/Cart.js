import React from 'react';
import './Cart.css';

class Cart extends React.Component {
  addBirdOnCart = (birdArr, handleDeleteItem) => {
    return birdArr.map((birdArr, ind) => {
      return (
        <li key={ind}>
          {birdArr.name} ${birdArr.amount}
          <button
            className='delete-button'
            onClick={() => {
              handleDeleteItem(birdArr.id);
            }}
          >
            Clear
          </button>
        </li>
      );
    });
  };

  calculateTotalCost = (birdArr) => {
    return birdArr.reduce((total, bird) => {
      return (total += bird.amount);
    }, 0);
  };

  addBonusToCart = (bonusItems, birdArr) => {
    const cost = this.calculateTotalCost(birdArr);
    let addedBonus = [];

    if (cost >= 100) {
      addedBonus.push(<li>{bonusItems[0]}</li>);
    }
    if (cost >= 300) {
      addedBonus.push(<li>{bonusItems[1]}</li>);
    }
    if (cost >= 500) {
      addedBonus.push(<li>{bonusItems[2]}</li>);
    }
    if (cost >= 1000) {
      addedBonus.push(<li>{bonusItems[3]}</li>);
    }
    return addedBonus;
  };

  render() {
    const { bonusItems, birdArr, handleDeleteItem } = this.props;

    return (
      <div className='Cart'>
        <h3>Cart</h3>
        <h4>Discount: {birdArr.length >= 3 ? 10 : 0}%</h4>
        <h4>Total: ${this.calculateTotalCost(birdArr)}</h4>
        <ol>{this.addBirdOnCart(birdArr, handleDeleteItem)}</ol>
        <p>Your donations qualify you for the following items:</p>
        <h5>Bonus Items:</h5>
        <ul>{this.addBonusToCart(bonusItems, birdArr)}</ul>
      </div>
    );
  }
}

export default Cart;
