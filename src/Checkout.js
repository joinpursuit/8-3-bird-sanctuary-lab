import React from "react";
import CheckoutCss from "./Checkout.css";

export class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      zip: 0,
      complete: "",
    };
  }

  handleCheckout = (event) => {
    event.preventDefault();
    const { value } = event.target;
    console.log(value);

    alert("You have adopted birds. Thank you!");
    const handleFirstName = (event) => {
      this.setState({ firstName: event.target.value });
    };

    const handleLastName = (event) => {
      this.setState({ lastName: event.target.value });
    };

    const handleEmail = (event) => {
      this.setState({ email: event.target.value });
    };

    const handleZipCode = (event) => {
      this.setState({ zipCode: event.target.value });
    };
    //     if(this.state.lastName && this.state.firstName && this.state.zip && this.state.email){
    // this.setState({
    //     complete: true});
    // } else this.setState({

    //     complete: false,
    // });
  };
  render() {
    const { handleCheckout } = this.state;
    return (
      <div id='checkout-section'>
        <h2>Checkout</h2>
        <form id="Checkout" onSubmit={this.handleCheckout} className="">
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
            <input type="email" onChange={this.handleEmail}></input>
          </label>
          <label>
            Zip Code
            <input type="text" onChange={this.handleZipCode}></input>
          </label>
          <input id="checkout-button" type="submit"></input>
        </form>
      </div>
    );
  }
}

export default Checkout;
