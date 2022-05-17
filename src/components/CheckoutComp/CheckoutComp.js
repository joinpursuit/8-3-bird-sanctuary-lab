import { Component } from "react";

import "./CheckoutComp.scss";

class CheckoutComp extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      zip: "",
    };
  }

  formSubmitted = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, zip } = this.state;

    if (firstName && lastName && email && zip) {
      this.clearForms();
      alert("You have adopted birds. Thank you!");
    } else {
      alert("Please fill in the form completely.");
    }
  };

  handleChange = (e) => {
    let { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  zipCodeInput = (e) => {
    const { value } = e.target;

    this.setState({
      zip: value,
    });
  };

  clearForms = () => {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      zip: "",
    });
  };

  render() {
    const { firstName, lastName, email, zip } = this.state;

    return (
      <section className="checkoutSection Checkout">
        <form onSubmit={this.formSubmitted}>
          <h2>Checkout</h2>

          <label htmlFor="firstName">
            First Name
            <input
              type="text"
              name="firstName"
              id="firstName"
              onChange={this.handleChange}
              value={firstName}
            />
          </label>

          <label htmlFor="lastName">
            Last Name
            <input
              type="text"
              name="lastName"
              id="lastName"
              onChange={this.handleChange}
              value={lastName}
            />
          </label>

          <label htmlFor="email">
            Email
            <input
              type="text"
              name="email"
              id="email"
              onChange={this.handleChange}
              value={email}
            />
          </label>

          <label htmlFor="zipCode">
            Zip Code
            <input
              type="number"
              name="zipCode"
              id="zipCode"
              onChange={this.zipCodeInput}
              value={zip}
            />
          </label>

          <br></br>

          <input
            type="submit"
            value="Submit"
            onClick={this.props.handleSubmit}
          />
        </form>
      </section>
    );
  }
}

export default CheckoutComp;
