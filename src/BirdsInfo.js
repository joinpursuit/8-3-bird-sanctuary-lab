import React from 'react';
import BirdCardsCss from './BirdInfo.css';

const BirdCards = (props) => {
    return (
    <div className="bird-cards">
    <h4>{props.name}</h4>
    <p>{props.amount}</p>
    <img id='bird-pic'src={props.img} alt={`${props.name}`}></img>
    <button onClick={()=>{props.handleCart(props.bird)}}>Adopt</button>

    </div>
    )
}

export default BirdCards;
