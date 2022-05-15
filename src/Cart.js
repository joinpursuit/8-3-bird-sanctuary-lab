import React from "react";

export default class Cart extends React.Component {
	constructor() {
		super();
		this.state = {
			valid: true,
			total: 0,
		};
		this.birds = this.props;
	}
	render() {
		return (
			<div className="Cart">
				<h2>Cart</h2>
				<ol>
					<li className="hidden">No items in cart.</li>
					{this.birds.map((element) => {
						return (
							<li>
								{element.name} - ${element.price.toFixed(2)}
							</li>
						);
					})}
				</ol>
				<p>empty</p>
				<h4>Total: ${this.state.total.toFixed(2)}</h4>
			</div>
		);
	}
}
