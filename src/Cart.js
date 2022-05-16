import React from "react";
import birdData from "./data/birds";
import CartItem from "./CartItem";

export default class Cart extends React.Component {
	constructor() {
		super();
		this.state = {
			discount: false,
			total: 0,
		};
		//this.birds = this.props;
	}
	render() {
		return (
			<div className="Cart">
				<h2>Cart</h2>
				<ol>
					<p className="hidden">No items in cart.</p>
					{/* <CartItem name={birdData[0].name} amount={birdData[0].amount} /> */}
					{/* {birdData.map((element) => {
						return (
							<li id={element.id}>
								{element.name} - ${element.amount}
							</li>
						);
					})} */}
				</ol>
				<h4>Total: ${this.state.total.toFixed(2)}</h4>
			</div>
		);
	}
}
