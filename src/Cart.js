import { remove } from "cypress/types/lodash";
import React from "react";

class Cart extends React.Component{
    birbsAdopted = (adoptBirbs, remItem) => {
        return adoptBirbs.map((adoptedBirb, ind) => {
            return (
                <li key={ind}>
                    {adoptedBirb.name} ${adoptedBirb.amount}
                    <button onClick={() => {
                        remItem(adoptedBirb.id);
                    }}>
                        Remove
                    </button>
                </li>
            )
        });
    }

costTotal = (birbsAdopted)=>{
    return birbsAdopted.reduce((total, birb) => {
        return (total += birb.amount)
    }, 0)
};

  render() {
    const { items, birbsAdopted, remove } = this.props;

    return (
      <div className="Cart">
        <h3>Cart</h3>
        <h5>Discount: {birbsAdopted.length >= 3 ? 10 : 0}%</h5>
        <h4>Total: ${this.totalCost(birbsAdopted)}</h4>
        <ol>{this.birbsAdopted(birbsAdopted, remove)}</ol>
      </div>
    );
  }
};



export default Cart;
