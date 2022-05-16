import "./Checkout.css";
import React from "react";

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
      this.setState({
        firstName: "",
        lastName: "",
        email: "",
        zipCode: 0,
      });
    } else {
      alert("NOOOO");
    }
  };

  render() {
    return (
      <div className="Checkout">
        <h2>Checkout</h2>
        <form onSubmit={this.handleFormSubmission} className="birds">
          <label>
            First Name
            <input type="text" onChange={this.handleFirstName}></input>
          </label>
          <label>
            Last Name
            <input type="text" onChange={this.handleLastName}></input>
          </label>
          <label>
            Email
            <input type="text" onChange={this.handleEmail}></input>
          </label>
          <label>
            Zip Code
            <input type="number" onChange={this.handleZipCode}></input>
          </label>
          <input type="submit" text="Submit" />
        </form>
      </div>
    );
  }
}

export default Checkout;
