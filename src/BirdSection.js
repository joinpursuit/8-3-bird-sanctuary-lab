import React from "react";
import BirdCard from "./BirdCard";
import birdData from "./data/birds";

const BirdSection = () => {
  const listItems = birdData.map((bird) => {
    return (
      <BirdCard
        key={bird.id}
        img={bird.img}
        name={bird.name}
        amount={bird.amount}
        id={bird.id}
      />
    );
  });

  return (
    <div>
      <ul className="card">{listItems}</ul>
    </div>
  );
};

export default BirdSection;
