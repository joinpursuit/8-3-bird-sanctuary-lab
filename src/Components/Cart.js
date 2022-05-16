import React from "react";

class Cart extends React.Component {
  discountChecker() {
    const { chosenBirds } = this.props;
    return chosenBirds.length < 3 ? 0 : 10;
  }
  sumCart() {
    const { chosenBirds } = this.props;
    let sum = chosenBirds.reduce((acc, bird) => acc + bird.amount, 0);
    return sum * (1 - this.discountChecker() / 100);
  }
  render() {
    const { chosenBirds } = this.props;
    return (
      <section className="cart">
        <h3>Cart</h3>
        <h4>Discount: {this.discountChecker()}%</h4>
        <h4>Total: ${this.sumCart()} </h4>
        <ol>
          {chosenBirds.map((bird, idx) => {
            return (
              <li key={idx}>
                {bird.name} : ${bird.amount}
              </li>
            );
          })}
        </ol>
        <h4>Bonus</h4>
      </section>
    );
  }
}

export default Cart;
