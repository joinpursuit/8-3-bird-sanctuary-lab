import React from 'react';
import './App.css';
import BirdCards from './BirdsInfo';
import birdData from './data/birds';
import Cart from './Cart';
import Checkout from './Checkout'
import bonusItems from './data/bonusItems'

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			selectedBirds: [

			],
		};
	}

	handleCart = (bird) => {
		const addBirdToCart = [...this.state.selectedBirds, bird];
		this.setState({
			selectedBirds: addBirdToCart,
		});
	};
	render() {
		return (
			<>
				{birdData.map((bird) => {
					return (
						<BirdCards
							handleCart={this.handleCart}
              bird = {bird}
							className='birds'
							key={bird.id}
							name={bird.name}
							amount={bird.amount}
							img={bird.img}
						/>
					);
				})}
				<Cart  addBird={this.state.selectedBirds} 
         bonus={bonusItems}
        />
				<Checkout className='Check-out' />
			</>
		);
	}
}

export default App;