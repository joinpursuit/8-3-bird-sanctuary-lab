import React from "react";
//import CartItem from "./CartItem.js";

/*const addToCart = (props) => {
  <CartItem />;
};*/

const BirdCard = (props) => {
  return (
    <li>
      <h5>{props.name}</h5>
      <p>{`$${props.amount}`}</p>
      <img src={props.img} alt={`${props.name}`} />
      <button>Adopt</button>
    </li>
  );
};

//onClick={() => addToCart(props.id)}
export default BirdCard;
