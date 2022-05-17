import React from "react";

function Bird({ bird: { name, amount, img }, addToCart }) {
  return (
    <div className="birds card">
      <h4>{name}</h4>
      <p>Price: ${amount}</p>
      <img src={img} alt={name} />
      <button onClick={addToCart}>Adopt</button>
    </div>
  );
}

export default Bird;
