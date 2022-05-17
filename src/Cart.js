import React from 'react';

class Cart extends React.Component {
  totalPrice = (cartOfBirds) => {
    return cartOfBirds.reduce((total, bird) => {
      return (total += bird.amount);
    }, 0);
  };

  displaycartOfBirds = (cartOfBirds, deleter) => {
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