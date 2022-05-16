import React from "react";

export default function CartItem(props) {
	return (
		<li>
			{" "}
			{props.name}- ${props.amount}
		</li>
	);
}
