import React from 'react';

const BirdCards = (props) => {
    return (
    <div>
    <h3>{props.name}</h3>
    <p>{props.amount}</p>
    <img src={props.img} alt={`${props.name}`}></img>
    <button>Adopt</button>
   
    </div>
    )
}

export default BirdCards;
