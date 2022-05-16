import { Component } from "react";
// import bonusItems from "../../data/bonusItems";
import "./CartComp.scss";

class CartComp extends Component {
  constructor() {
    super();
    this.state = {
      discount: 0,
      total: 0,
    };
  }

  addBirdToCart = (cartArr) => {
    let amountArr = [];
    const birdsInCart = cartArr.map((birds) => {
      amountArr.push(birds.amount);
      return (
        <li key={birds.id}>
          {birds.name}: ${birds.amount}
        </li>
      );
    });

    // this.addTotal(amountArr);
    return birdsInCart;
  };

  addTotal = (amountArr) => {
    let totalAmount = 0;

    return amountArr.map((amount) => {
      totalAmount += amount;
      console.log(totalAmount);

      return this.setState({
        total: totalAmount,
      });
    });
  };

  addBonuses = (total) => {
    // check the totals value and add bonuses accordingly
  };

  addDiscount = (cartArr) => {
    // add discount depending on length of cartArr
  };

  render() {
    const { cartArr } = this.props;

    const { discount, total } = this.state;

    return (
      <section className="cartSection Cart">
        <h2>Cart</h2>
        <h4>Discount: {discount}%</h4>
        <h4>Total: ${total}</h4>
        <ol>{this.addBirdToCart(cartArr)}</ol>
        <p>
          <strong>
            Your donations has qualified you for the following items:
          </strong>
        </p>
        {this.addBonuses(total)}
      </section>
    );
  }
}

export default CartComp;
