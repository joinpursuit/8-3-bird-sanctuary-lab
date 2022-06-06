import React from 'react';
import BirdCards from "./BirdsInfo";


const Cart = (props) => {
	const display = (birds) => {
		return birds.map((bird, index) => {
			return (
				<li key={index}>
					{bird.name} ${bird.amount}
				</li>
			);
		});
	};

	const calculateTotal = (birds) => {
		let total = 0;
		for (let i = 0; i < birds.length; i++) {
			total += birds[i].amount;
		}
		return total;
	};

	const handleBonus = (birds) => {
		let bonusItemsArr = [];
		let total = calculateTotal(birds);

		if (total > 1000) {
			bonusItemsArr.push(<li>{'Stickers'}</li>);
			bonusItemsArr.push(<li>{'Background for your computer'}</li>);
			bonusItemsArr.push(<li>{'Tote bag'}</li>);
			bonusItemsArr.push(<li>{'Invites to VIP live streams'}</li>);
		} else if (total >= 500) {
			bonusItemsArr.push(<li>{'Stickers'}</li>);
			bonusItemsArr.push(<li>{'Background for your computer'}</li>);
			bonusItemsArr.push(<li>{'Tote bag'}</li>);
		} else if (total >= 300) {
			bonusItemsArr.push(<li>{'Stickers'}</li>);
			bonusItemsArr.push(<li>{'Background for your computer'}</li>);
		} else if (total >= 100) {
			bonusItemsArr.push(<li>{'Stickers'}</li>);
		}
		return bonusItemsArr;
	};

	return (
		<div className='birds Cart'>
			<h4>Total: ${props.total}</h4>
			<ol>{display(props.addBird)}</ol>
			<ul>{handleBonus(props.addBird)}</ul>
		
		</div>
	);
};

export default Cart;