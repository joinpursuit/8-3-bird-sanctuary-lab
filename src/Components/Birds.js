import react from "react";
import birdData from "../data/birds.js";
import BirdCard from "./BirdCard";

class Birds extends react.Component {
  render() {
    const birdsArray = birdData.slice();

    return (
      <div className="birds">
        {birdsArray.map((bird) => {
          return (
            <BirdCard
              key={bird.id}
              name={bird.name}
              img={bird.img}
              amount={bird.amount}
              onClick={this.props.onClick}
            />
          );
        })}
      </div>
    );
  }
}

export default Birds;
