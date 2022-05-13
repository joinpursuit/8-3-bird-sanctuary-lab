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
	render() {
		return (
			<section>
				{birdData.map((element) => {
					return (
						<div className="Bird">
							<h3>{element.name}</h3>
							<p>Price: ${element.amount}</p>
							<img src={element.img} alt={element.name} />
						</div>
					);
				})}
			</section>
		);
	}
}

export default BirdProfile;
