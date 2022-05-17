import BirdCard from "./BirdCard";

function BirdGallery({ birds, addToCart }) {
  const birdCards = birds.map((bird) => (
    <li key={bird.id}>
      <BirdCard bird={bird} addToCart={() => addToCart(bird)} />
    </li>
  ));
  return <ul className="bird-gallery">{birdCards}</ul>;
}
export default birdGallery;
