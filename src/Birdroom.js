import React from 'react';
import Birdcard from './Birdcard';



class Birdroom extends React.Component {
  render() {
    const { birdData, adopter } = this.props;
    const birdy = birdData.map((bird) => {
      return <Birdcard 
      bird={bird} 
      key={bird.id} 
      adopter={adopter} />;
    });

    return <div className="Birdroom">{birdy}</div>;
  }
}
export default Birdroom;