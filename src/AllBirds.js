import Birdcard from './Birdcard';
import birdData from './data/birds';
function displayAllBirds({ appendToCart }) {
  const birdArray = birdData.map((bird) => (
    <li key={bird.id}>
      <Birdcard bird={bird} appendToCart={() => appendToCart(bird)} />
    </li>
  ));
  return <ul className='birdCaardPanel'>{birdArray}</ul>;
}

export default displayAllBirds;
