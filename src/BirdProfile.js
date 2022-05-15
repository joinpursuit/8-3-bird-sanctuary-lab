import React from "react";
import birdData from "./data/birds";

class BirdProfile extends React.Component {
	constructor() {
		super();
		this.birds = this.props;
	}
	// constructor() {
	// 	super();
	// }
	addToCart = (bird) => {};
	render() {
		return (
			<section>
				{birdData.map((element) => {
					return (
						<div className="birds card">
							<p>{element.name}</p>
							<p>Price: ${element.amount}</p>
							<img src={element.img} alt={element.name} />
							<button onClick={this.addToCart(element)}>Adopt</button>
						</div>
					);
				})}
			</section>
		);
	}
}

export default BirdProfile;
