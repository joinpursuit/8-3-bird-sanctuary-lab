import React from "react";

export default class Checkout extends React.Component {
	constructor() {
		super();
		this.state = {
			valid: true,
		};
	}
	render() {
		return (
			<div>
				<h2>Checkout</h2>
				<p>No items to check out.</p>
			</div>
		);
	}
}
