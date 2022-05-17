import BirdCard from "./BirdCard";

function BirdGallery({ birds, addToCart }) {
  const birdCards = birds.map((bird) => (
    <section key={bird.id}>
      <BirdCard bird={bird} addToCart={() => addToCart(bird)} />
    </section>
  ));
  return <article className="bird-gallery">{birdCards}</article>;
}

export default BirdGallery;
