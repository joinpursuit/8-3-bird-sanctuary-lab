import React from "react";

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      zip: 0,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, email, zip } = this.state;
    if (firstName && lastName && email && zip) {
      alert("You have adopted birds. Thank you!");
      //   document.getElementById("myForm").reset();
      this.setState({
        firstName: "",
        lastName: "",
        email: "",
        zip: 0,
      });
    } else {
      alert("Please fill out form.");
    }
  };

  handleFirstName = (event) => {
    this.setState({ firstName: event.target.value });
  };
  handleLastName = (event) => {
    this.setState({ lastName: event.target.value });
  };
  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  handleZip = (event) => {
    this.setState({ zip: event.target.value });
  };

  render() {
    return (
      <div className="Checkout">
        <h2>Checkout</h2>
        <form id="myForm" onSubmit={this.handleSubmit}>
          <label>
            First Name
            <br />
            <input onChange={this.handleFirstName} type="text" />
          </label>
          <label>
            Last Name
            <br />
            <input onChange={this.handleLastName} type="text" />
          </label>
          <label>
            Email
            <br />
            <input onChange={this.handleEmail} type="text" />
          </label>
          <label>
            Zip Code
            <br />
            <input onChange={this.handleZip} type="text" />
          </label>
          <input type="submit" text="Submit" className="button"></input>
        </form>
      </div>
    );
  }
}

export default Checkout;
