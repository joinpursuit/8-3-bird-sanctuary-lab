import React from "react";
import CartItem from "./CartItem";
import birdData from "./data/birds";

class BirdProfile extends React.Component {
	constructor() {
		super();
		this.birds = this.props;
	}
	// constructor() {
	// 	super();
	// }
	addToCart = (bird) => {
		return <CartItem name={bird.name} amount={bird.amount} />;
	};
	render() {
		return (
			<section>
				{birdData.map((element) => {
					return (
						<div className="birds card">
							<p>{element.name}</p>
							<p>Price: ${element.amount}</p>
							<img src={element.img} alt={element.name} />
							<br />
							<button onClick={this.addToCart(element)}>Adopt</button>
						</div>
					);
				})}
			</section>
		);
	}
}

export default BirdProfile;
