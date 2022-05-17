import React from "react";
import "./App.css";
// import bonusItems from "./data/bonusItems";
import BirdProfile from "./BirdProfile";
import Checkout from "./Checkout";
import Cart from "./Cart";
import birdData from "./data/birds";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			//test: true,
			birdsInCart: [], //better be some bird objects
		};
	}
	render() {
		return (
			<div className="parent">
				<div className="left">
					<Cart currentCart={this.state.birdsInCart} />
					<Checkout />
				</div>
				<section>
					{birdData.map((element) => {
						return (
							<BirdProfile
								key={element.id}
								name={element.name}
								img={element.img}
								amount={element.amount}
							/>
						);
					})}
				</section>
			</div>
		);
	}
}
export default App;
