import BirdCard from "./BirdCard";
import "./BirdSection.css";

function BirdSection({ birds, addToCart }) {
  const birdCards = birds.map((bird) => {
    return (
      <li className="birds grid-item" key={bird.id}>
        <BirdCard bird={bird} handleClick={() => addToCart(bird)} />
      </li>
    );
  });
  return <ul className="grid">{birdCards}</ul>;
}

export default BirdSection;
