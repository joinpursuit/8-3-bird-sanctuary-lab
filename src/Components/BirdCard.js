import React from "react";

class BirdCard extends React.Component {
  render() {
    return (
      <div className="card">
        <h5>{this.props.name}</h5>
        <p>Price: {this.props.amount}</p>
        <img src={this.props.img} alt="Bird Profile Picture" width="100px" />
        <button>Adopt</button>
      </div>
    );
  }
}

export default BirdCard;
