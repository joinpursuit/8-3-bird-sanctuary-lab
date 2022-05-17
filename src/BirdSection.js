import BirdCard from "./BirdCard"

function BirdGallery({birds, cart}) {
    const birdCards = birds.map((birds) => (
    <li key={birds.id}>
        <Birdcard bird={birds} cart={() => cart(birds)} />
    </li>
  ));
    return <ul className="bird-gallery">{birdCards}</ul>
};
    

export default BirdGallery;