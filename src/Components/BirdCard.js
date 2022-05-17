import React from "react";

class BirdCard extends React.Component {
  render() {
    return (
      <div className="card">
        <br></br>
        <p>
          <strong>{this.props.name}</strong>
        </p>
        <p>Price: ${this.props.amount}</p>
        <img src={this.props.img} alt="Bird Profile" width="100px" />
        <button className="adopt-button" onClick={this.props.onClick}>
          Adopt
        </button>
      </div>
    );
  }
}

export default BirdCard;
