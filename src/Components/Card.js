import React from "react";
import Bird from "./Bird";

function Card({ birds, addToCart }) {
  const birdCard = birds.map((bird) => (
    <li key={bird.id}>
      <Bird bird={bird} addToCart={() => addToCart(bird)} />
    </li>
  ));
  return <ul className="card">{birdCard}</ul>;
}

export default Card;
