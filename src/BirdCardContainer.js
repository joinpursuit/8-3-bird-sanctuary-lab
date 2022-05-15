import React from "react";
import BirdCard from "./BirdCard";

class BirdCardContainer extends React.Component {
  render() {
    const { birdData } = this.props;
    const birdCards = birdData.map((bird) => {
      return <BirdCard data={bird} />;
    });
    console.log(birdCards);
    return <div>{birdCards}</div>;
  }
}

export default BirdCardContainer;
