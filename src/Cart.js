import React from "react";

export default class Cart extends React.Component {
	constructor() {
		super();
		this.state = {
			valid: true,
		};
	}
	render() {
		return (
			<div>
				<h2>Cart</h2>
				<p>empty</p>
			</div>
		);
	}
}
