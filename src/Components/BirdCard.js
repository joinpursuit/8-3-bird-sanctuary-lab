import React from 'react';
import './BirdCard.css';

class BirdCard extends React.Component {
  render() {
    const { img, amount, name, id } = this.props.birdInfo;
    const { handleAdopted } = this.props;

    return (
      <div className='bird card'>
        <h4>{name}</h4>
        <p>Price: ${amount}</p>
        <img src={img} alt={name} />
        <button
          className='birds'
          onClick={() => handleAdopted(id, name, amount)}
        >
          ADOPT
        </button>
      </div>
    );
  }
}

export default BirdCard;
