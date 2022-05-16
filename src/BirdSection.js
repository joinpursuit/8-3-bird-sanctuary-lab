import BirdCard from "./BirdCard";
import "./birdSection.css";

function BirdSection({ birds }) {
  const birdCards = birds.map((bird) => {
    return (
      <li className="birds card" key={bird.id}>
        <BirdCard name={bird.name} amount={bird.amount} img={bird.img} />
      </li>
    );
  });
  return <ul>{birdCards}</ul>;
}

export default BirdSection;
