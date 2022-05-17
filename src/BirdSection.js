import React from "react";

function BirdGallery({birds, cart}) {
    const birbCards = birds.map((birds) => (
    <li key={birds.id}>
        <birdcard bird={birds} cart={() => cart(birds)} />
    </li>
  ));
    return <ul className="bird-gallery">{birbCards}</ul>
};
    

export default BirdGallery;