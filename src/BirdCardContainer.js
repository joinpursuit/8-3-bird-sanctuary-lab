import React from "react";
import BirdCard from "./BirdCard";

class BirdCardContainer extends React.Component {
  render() {
    const { birdData, adoptHandler } = this.props;

    const birdCards = birdData.map((bird) => {
      return <BirdCard data={bird} key={bird.id} adoptHandler={adoptHandler} />;
    });

    return <div>{birdCards}</div>;
  }
}

export default BirdCardContainer;
