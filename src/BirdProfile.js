import React from "react";
import CartItem from "./CartItem";
import birdData from "./data/birds";
//import birdData from "./data/birds";

const BirdProfile = (props) => {
	const { name, img, amount } = props;
	return (
		<div className="birds card">
			<p>{name}</p>
			<p>Price: ${amount}</p>
			<img src={img} alt={name} />
			<br />
			<button>Adopt</button>
		</div>
	);
};

const addToCart= (item)=>{
	
}

export default BirdProfile;
