import React from "react";

class BirdCard extends React.Component {
  render() {
    const { img, amount, name, id } = this.props.data;
    console.log(id);

    return (
      <div className="card">
        <h4>{name}</h4>
        <p>Price: ${amount}</p>
        <img src={img} />
        <button>ADOPT</button>
      </div>
    );
  }
}

export default BirdCard;
