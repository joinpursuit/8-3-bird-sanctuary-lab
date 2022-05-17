import React from 'react';

class Birdcard extends React.Component {
  render() {
    const { bird, adopter } = this.props;
    // using bird and adopter to get props
    // The bird card will display its name and price
    return (
      <div className="birds card">
        <h4>{bird.name}</h4>
        <p>Price: ${bird.amount}</p>
        <img src={bird.img} alt={bird.name} />
        <button onClick={() => adopter(bird.id, bird.amount, bird.name)}>
          Adopt
        </button>
      </div>
    );
  }
}
export default Birdcard;