import BirdboxCard from './BirdboxCard';
import './BirdPics.css';

function BirdPics({ birds, addToCart }) {
  const birdCards = birds.map((bird) => (
    <li key={bird.id}>
      <BirdboxCard bird={bird} addToCart={() => addToCart(bird)} />
    </li>
  ));
  return <ul className='bird-gallery'>{birdCards}</ul>;
}

export default BirdPics;
