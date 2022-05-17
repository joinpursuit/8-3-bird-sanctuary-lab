import React from 'react';
import './birdbox.css';
const BirdBox = (props) => {
    return (
    <div className="card of bird">
    <h4>{props.name}</h4>
    <p>${props.amount}</p>
    <img src={props.img} alt={`${props.name}`}></img>
    <button onClick={()=>{props.handleCartListener(props.bird)}}>Adopt</button>

    </div>
    )
}

export default BirdBox;
