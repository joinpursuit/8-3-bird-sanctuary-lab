import React from 'react';
import './App.css';
import Birdcards from './Components/Birdcards';
import birdData from './data/birds';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';

const App = () => {
	return (
		<>
			{birdData.map((bird) => {
				return (
					<Birdcards
						className='birds'
						key={bird.id}
						name={bird.name}
						amount={bird.amount}
						img={bird.img}
					/>
				);
			})}
			<Cart className='Cart'></Cart>
			<Checkout className='Check-out' />
		</>
	);
};

export default App;
