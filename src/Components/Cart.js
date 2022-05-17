import React from "react";

class Cart extends React.Component {
  discountBird() {
    const { pickBirds } = this.props;
    return pickBirds.length < 3 ? 0 : 10;
  }
  sumCart() {
    const { pickBirds } = this.props;
    let sum = pickBirds.reduce((acc, bird) => acc + bird.amount, 0);
    return sum * (1 - this.discountBird() / 100);
  }
  BonusPlus() {
    const { bonusItems } = this.props;
    if (this.sumCart() >= 1000) {
      return bonusItems;
    } else if (this.sumCart() >= 500) {
      return bonusItems.slice(0, 3);
    } else if (this.sumCart() >= 300) {
      return bonusItems.slice(0, 2);
    } else if (this.sumCart() >= 100) {
      return bonusItems.slice(0, 1);
    } else {
      return bonusItems.slice(0, 0);
    }
  }
  render() {
    const { pickBirds, removeFromCart } = this.props;
    return (
      <section className="Cart">
        <h3>Cart</h3>
        <h5>Discount: {this.discountBird()}%</h5>
        <h4>Total: ${this.sumCart()}</h4>
        <ol>
          {pickBirds.map((bird, idx) => {
            return (
              <li key={idx}>
                {bird.name} : ${bird.amount}
                <button type="submit" onClick={() => removeFromCart(bird)}>
                  Remove Bird
                </button>
              </li>
            );
          })}
        </ol>
        <p>Your donation has qualified you for the following Bonus</p>
        <ul>
          {this.BonusPlus().map((item, idx) => {
            return <li key={idx}>{item}</li>;
          })}
        </ul>
      </section>
    );
  }
}

export default Cart;