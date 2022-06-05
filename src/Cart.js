import React from "react";
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
	getTotal = (arr) => {
		let total = 0;
		for (let element of arr) {
			total += element.amount;
		}
		// this.setState({ total: total.toFixed(2) });
		if (arr.length >= 3) {
			total *= 0.9; ///10% discount
		}
		return total.toFixed(2);
	};
	render() {
		const { currentCart } = this.props;
		return (
			<div className="Cart">
				<h2>Cart</h2>
				<ol>
					<p className="hidden">No items in cart.</p>
					{/* <CartItem name={element.name} amount={element.amount} /> */}
					{currentCart.map((element) => {
						return (
							<CartItem
								key={element.id}
								name={element.name}
								amount={element.amount}
							/>
							// <li id={element.id}>
							// 	{element.name} - ${element.amount}
							// </li>
						);
					})}
				</ol>
				<h4>Total: ${this.getTotal(currentCart)}</h4>
			</div>
		);
	}
}
