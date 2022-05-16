import BirdCard from "./BirdCard"

function BirdGallery({birds, cart}) {
    const birdCards = bird.map((bird) => (
    <li key={bird.id}>
        <Birdcard bird={bird} cart={() => cart(bird)} />
    </li>
  ));
    return <ul className="bird-gallery">{birdCards}</ul>
};
    

export default BirdGallery;