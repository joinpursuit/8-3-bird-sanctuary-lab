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

bonus = (items, birbsAdopted) => {
    const cost = this.costTotal(birbsAdopted);
    let itemsEarned = [];

    if (cost >= 100) {
      itemsEarned.push(<li key={items[0]}>{items[0]}</li>);
    }
    if (cost >= 300) {
      itemsEarned.push(<li key={items[1]}>{items[1]}</li>);
    }
    if (cost >= 500) {
      itemsEarned.push(<li key={items[2]}>{items[2]}</li>);
    }
    if (cost >= 1000) {
      itemsEarned.push(<li key={items[3]}>{items[3]}</li>);
    }

    return itemsEarned;
  };

  render() {
    const { items, birbsAdopted, removeItemHandler } = this.props;

    return (
      <div className="Cart">
        <h3>Cart</h3>
        <h5>Discount: {birbsAdopted.length >= 3 ? 10 : 0}%</h5>
        <h4>Total: ${this.totalCost(birbsAdopted)}</h4>
        <ol>{this.displaybirbsAdopted(birbsAdopted, removeItemHandler)}</ol>
        <p>Your donations qualify you for the following items:</p>
        <h5>Bonus Items:</h5>
        <ul>{this.itemsHandler(items, birbsAdopted)}</ul>
      </div>
    );
  }
};



export default Cart;
