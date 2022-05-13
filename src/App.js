import React from "react";
import "./App.css";
import birdData from "./data/birds";
// import bonusItems from "./data/bonusItems";
import BirdProfile from "./BirdProfile";
import Checkout from "./Checkout";
import Cart from "./Cart";

class App extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div>
				<Cart />
				<Checkout />
				<BirdProfile birdData={birdData} />
			</div>
		);
	}
}
export default App;
