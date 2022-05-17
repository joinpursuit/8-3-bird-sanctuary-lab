import React from 'react';

class Birdcard extends React.Component {
  render() {
    const { bird, adopter } = this.props;
    //or i can do {adopter, name, id, img, amount}=this.props.

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
