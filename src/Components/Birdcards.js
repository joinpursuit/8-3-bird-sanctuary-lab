import React from "react";

import birdData from "../data/birds.js";

class Birdcards extends React.Component {
  constructor () {
    super();
    this.state = {

    };
  }

  
  render() {

    return(
      <>
        {birdData.map(({ name, img, amount, id }) => (
          <div className='card birds' key={id}>
            <h4>{name}</h4>
            <p>Price ${amount}</p>
            <img src={img}/>
            <button onClick={() => {
              const newObj = {'id': id, 'name': name, 'amount': amount}
                this.setState({
                  count: this.state.count + 1,
                  total: this.state.total + amount,
                  discount: this.checkDiscount(this.state.count, this.state.total),
                });
                this.addToCart(newObj)
              }}>Adopt</button>
          </div>
        ))}
      </>
    );
  }
}

export default Birdcards;
