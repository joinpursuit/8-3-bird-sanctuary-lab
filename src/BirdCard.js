import React from "react";

class BirdCard extends React.Component {
  render() {
    const { img, amount, name, id } = this.props.data;
    const { adoptHandler } = this.props;
    // console.log(id);

    return (
      <div className="card birds">
        <h4>{name}</h4>
        <p>Price: ${amount}</p>
        <img src={img} />
        <button onClick={() => adoptHandler(id, name, amount)}>ADOPT</button>
      </div>
    );
  }
}

export default BirdCard;
