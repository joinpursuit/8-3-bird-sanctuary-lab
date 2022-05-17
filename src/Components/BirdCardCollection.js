import React from 'react';
import BirdCard from './BirdCard';

class BirdCardCollection extends React.Component {
  render() {
    const { birdData, handleAdopted } = this.props;
    const birdCards = birdData.map((birdInfo) => {
      return (
        <BirdCard
          birdInfo={birdInfo}
          key={birdInfo.id}
          handleAdopted={handleAdopted}
        />
      );
    });
    return <div className='birds'>{birdCards}</div>;
  }
}

export default BirdCardCollection;
