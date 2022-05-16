import React from 'react';
import birdData from '../data/birds';

class Birdcard extends React.Component {
  render() {
    let birdy = birdData.map((bird) => {
      return (
        <div className="card">
          <h4>{bird.name}</h4>
          <img src={bird.img} alt="bird" />
          <p>Price: ${bird.amount}</p>
          <button>Adopt</button>
        </div>
      );
    });
    return <div>{birdy}</div>;
  }
}

export default Birdcard;
