import "./BirdComp.scss";

import { Component } from "react";
import { Button } from "react-bootstrap";

import birdsData from "../../data/birds";
import CartComp from "../CartComp/CartComp";
import CheckoutComp from "../CheckoutComp/CheckoutComp";

class BirdComp extends Component {
  constructor() {
    super();
    this.state = {
      cartArr: [],
    };
  }

  renderBirdData = (birdsData) => {
    return birdsData.map((bird) => {
      return (
        <article className="birds card" key={bird.id}>
          <p>
            <strong>{bird.name}</strong>
          </p>
          <p>Price: ${bird.amount}</p>
          <img src={bird.img} alt="bird"></img>
          <Button variant="dark" onClick={() => this.clickedAdopt(bird)}>
            ADOPT
          </Button>
        </article>
      );
    });
  };

  clickedAdopt = (bird) => {
    let newCart = this.state.cartArr;
    newCart.push(bird);

    this.setState({
      cartArr: newCart,
    });
  };

  handleSubmit = () => {
    this.setState({
      cartArr: [],
    });
  };

  render() {
    const { cartArr } = this.state;

    return (
      <>
        <CartComp cartArr={cartArr} />
        <section id="birdSection">{this.renderBirdData(birdsData)}</section>
        <CheckoutComp handleSubmit={this.handleSubmit} />
      </>
    );
  }
}

export default BirdComp;
