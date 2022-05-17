import { Component } from "react";
import bonusItems from "../../data/bonusItems";
import "./CartComp.scss";

import { Button } from "react-bootstrap";

class CartComp extends Component {
  addBirdToCart = (cartArr) => {
    let keyNum = 0;

    const birdsInCart = cartArr.map((bird) => {
      return (
        <li key={keyNum++}>
          {bird.name}: ${bird.amount}
          <Button
            onClick={() => this.deleteABird(cartArr, bird)}
            variant="danger"
            className="deleteBird"
          >
            X
          </Button>
        </li>
      );
    });

    return birdsInCart;
  };

  deleteABird = (cartArr, bird) => {
    const index = cartArr.indexOf(bird);

    if (index > -1) {
      cartArr.splice(index, 1);
    }

    this.setState({
      cartArr: cartArr,
    });
  };

  addTotal = (cartArr) => {
    let totalAmount = 0;
    let discount = 0;

    for (const price of cartArr) {
      totalAmount += price.amount;
    }

    if (cartArr.length > 3) {
      discount = 10;
      totalAmount -= totalAmount * 0.1;
    }

    return (
      <div>
        <h5>Discount: {discount}%</h5>
        <h4>Total: ${totalAmount}</h4>
      </div>
    );
  };

  addBonuses = (cartArr) => {
    let total = 0;
    const bonusToAdd = [];

    for (const bird of cartArr) {
      total += bird.amount;
    }

    if (total >= 100 && total < 300) {
      bonusToAdd.push(bonusItems[0]);
    }

    if (total >= 300 && total < 500) {
      bonusToAdd.push(bonusItems[0], bonusItems[1]);
    }

    if (total >= 500 && total < 1000) {
      bonusToAdd.push(bonusItems[0], bonusItems[1], bonusItems[2]);
    }

    if (total >= 1000) {
      for (const bonus of bonusItems) {
        bonusToAdd.push(bonus);
      }
    }

    let keyNum = 0;
    const bonuses = bonusToAdd.map((bonus) => {
      return <li key={keyNum++}>{bonus}</li>;
    });

    return bonuses;
  };

  render() {
    const { cartArr } = this.props;

    return (
      <section className="cartSection Cart">
        <h2>Cart</h2>
        {this.addTotal(cartArr)}
        <ol className="birdList">{this.addBirdToCart(cartArr)}</ol>
        <p>
          <strong>
            Your donations have qualified you for the following items:
          </strong>
        </p>
        <ul>{this.addBonuses(cartArr)}</ul>
      </section>
    );
  }
}

export default CartComp;
