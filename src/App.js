import React from "react";
import "./App.css";
// import bonusItems from "./data/bonusItems";
import Checkout from "./Checkout";
import Cart from "./Cart";
import birdData from "./data/birds";
import BirdsSection from "./BirdsSection";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			//test: true,
			birdsInCart: [], //better be some bird objects
		};
	}
	addToCart = (obj) => {
		//let { value } = event.target;

		// let temp = [];
		// temp = [...this.state.birdsInCart];
		// console.log(temp);
		// temp.push(obj);
		this.setState({ birdsInCart: [...this.state.birdsInCart, obj] });
	};
	render() {
		return (
			<div className="parent">
				<div className="left">
					<Cart currentCart={this.state.birdsInCart} />
					<Checkout />
				</div>
				<section>
					<BirdsSection birdData={birdData} addToCart={this.addToCart} />
				</section>
			</div>
		);
	}
}
export default App;
