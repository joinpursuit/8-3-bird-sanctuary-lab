import React from 'react';

class Cart extends React.Component {
  totalPrice = (cartOfBirds) => {
    let total = 0;
    for (let bird of cartOfBirds) {
      total += bird.amount;
    }
    return total;
  };

  displaycartOfBirds = (cartOfBirds, deleter) => {
    // using idx parameter to take care of the key warnings in console
    return cartOfBirds.map((chosenBird, idx) => {
      return (
        <li key={idx}>
          {chosenBird.name} ${chosenBird.amount}
          <button
            onClick={() => {
              deleter(chosenBird.name);
            }}
          >
            Delete this Bird
          </button>
        </li>
      );
    });
  };

  discounter = (cartOfBirds) => {
    let discount = 0;
    if (cartOfBirds.length >= 3) {
      discount = 10;
    } else {
      discount = 0;
    }
    return discount;
  };

  render() {
    const { cartOfBirds, deleter } = this.props;
    return (
      <div className="Cart">
        <h2>Cart</h2>
        <h5>Discount: {this.discounter(cartOfBirds)}%</h5>
        <h4>Total: ${this.totalPrice(cartOfBirds)}</h4>
        <ol>{this.displaycartOfBirds(cartOfBirds, deleter)}</ol>
      </div>
    );
  }
}

export default Cart;
