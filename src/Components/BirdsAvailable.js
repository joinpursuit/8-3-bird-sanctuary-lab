import React from "react";

class BirdsAvailable extends React.Component {
  render() {
    const { birds } = this.props;
    return (
      <section>
        <h1>Welcome to the Bird Shop</h1>
        {birds.map((bird) => {
          const { name, amount, img, id } = bird;
          return (
            <article className="birds" key={id}>
              <h3>{name}</h3>
              <p>Price: ${amount}</p>
              <img src={img} alt={name} width="300" height="300" />
              <p>
                <button type="button">Adopt</button>
              </p>
            </article>
          );
        })}
      </section>
    );
  }
}

export default BirdsAvailable;
