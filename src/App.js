import React from 'react';
import './App.css';
import BirdBox from './Components/BirdBox';
import birdData from './data/birds';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import bonusItems from './data/bonusItems'

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			savedBirds: [

			],
		};
	}

	handleCartListener = (bird) => {
		const addToTheCart = [...this.state.savedBirds, bird];
		this.setState({
			savedBirds: addToTheCart,
		});
	};
	render() {
		return (
			<>
				{birdData.map((bird) => {
					return (
						<BirdBox
							handleCartListener={this.handleCartListener}
              bird = {bird}
							className='birds'
							key={bird.id}
							name={bird.name}
							amount={bird.amount}
							img={bird.img}
						/>
					);
				})}
				<Cart  addBird={this.state.savedBirds} 
         bonus={bonusItems}
        />
				<Checkout className='Check-out' />
			</>
		);
	}
}
export default App;