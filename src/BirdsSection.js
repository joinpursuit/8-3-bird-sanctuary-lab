import React from "react";
import BirdProfile from "./BirdProfile";

export default function BirdsSection(props) {
	const { birdData, addToCart } = props;
	return (
		<div>
			{birdData.map((element) => {
				return (
					<BirdProfile
						key={element.id}
						name={element.name}
						img={element.img}
						amount={element.amount}
						clickteezy={() => addToCart(element)}
					/>
				);
			})}{" "}
		</div>
	);
}
