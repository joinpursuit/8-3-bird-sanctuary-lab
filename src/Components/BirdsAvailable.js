import React from "react";
import "./BirdsAvailable.css";

class BirdsAvailable extends React.Component {
  render() {
    const { birds, addToCart } = this.props;
    return (
      <section className="birdmarket">
        {birds.map((bird) => {
          const { name, amount, img, id } = bird;
          return (
            <article className="bird" key={id}>
              <h3>{name}</h3>
              <p>Price: ${amount}</p>
              <img src={img} alt={name} width="300" height="300" />
              <p>
                <button onClick={addToCart} type="button" value={id}>
                  Adopt
                </button>
              </p>
            </article>
          );
        })}
      </section>
    );
  }
}

export default BirdsAvailable;
