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
      alert("You have adopted birds. Thank you!");
    }

    this.clearForms();
  };

  clearForms = () => {
    this.setState({
      firstName: "",
    });
    this.setState({
      lastName: "",
    });
    this.setState({
      email: "",
    });
    this.setState({
      zip: "",
    });
  };

  firstNameInput = (e) => {
    let { value } = e.target;

    this.setState({
      firstName: value,
    });
  };

  lastNameInput = (e) => {
    let { value } = e.target;

    this.setState({
      lastName: value,
    });
  };

  emailInput = (e) => {
    let { value } = e.target;

    this.setState({
      email: value,
    });
  };

  zipCodeInput = (e) => {
    let { value } = e.target;

    this.setState({
      zip: value,
    });
  };

  render() {
    const { firstName, lastName, email, zip } = this.state;

    return (
      <section id="checkoutSection">
        <form className="checkoutForm" onSubmit={this.formSubmitted}>
          <h2>Checkout</h2>

          <label htmlFor="firstName">
            First Name
            <input
              type="text"
              name="firstName"
              id="firstName"
              onChange={this.firstNameInput}
              value={firstName}
            />
          </label>

          <label htmlFor="lastName">
            Last Name
            <input
              type="text"
              name="lastName"
              id="lastName"
              onChange={this.lastNameInput}
              value={lastName}
            />
          </label>

          <label htmlFor="email">
            Email
            <input
              type="text"
              name="email"
              id="email"
              onChange={this.emailInput}
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
            className="Checkout"
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
