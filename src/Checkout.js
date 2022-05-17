import "./Checkout.css";
import React from "react";
import Cart from "./Cart";

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      zipCode: 0,
    };
  }

  handleFirstName = (event) => {
    this.setState({ firstName: event.target.value });
  };
  handleLastName = (event) => {
    this.setState({ lastName: event.target.value });
  };
  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  handleZipCode = (event) => {
    this.setState({ zipCode: event.target.value });
  };

  handleFormSubmission = (event) => {
    event.preventDefault();
    const { firstName, lastName, email, zipCode } = this.state;
    if (firstName && lastName && email && zipCode) {
      alert("You have adopted birds. Thank you!");
      document.getElementById("form").reset();
      document.getElementById("listItem").remove();
    } else {
      alert("NOOOO");
    }
  };

  render() {
    return (
      <div className="Checkout">
        <h2>Checkout</h2>
        <form onSubmit={this.handleFormSubmission} className="birds" id="form">
          <label>
            First Name
            <input type="text" onChange={this.handleFirstName} />
          </label>
          <label>
            Last Name
            <input type="text" onChange={this.handleLastName} />
          </label>
          <label>
            Email
            <input type="text" onChange={this.handleEmail} />
          </label>
          <label>
            Zip Code
            <input type="number" onChange={this.handleZipCode} />
          </label>
          <input type="submit" text="Submit" />
        </form>
      </div>
    );
  }
}

export default Checkout;
