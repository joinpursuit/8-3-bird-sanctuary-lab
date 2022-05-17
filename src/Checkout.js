import { Component } from 'react';

class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      fName: '',
      lName: '',
      email: '',
      zipcode: '',
    };
  }

  firstNameInput = (event) => {
    this.setState({ fName: event.target.value });
  };
  lastNameInput = (event) => {
    this.setState({ lName: event.target.value });
  };

  emailInput = (event) => {
    this.setState({ email: event.target.value });
  };

  zipcodeInput = (event) => {
    this.setState({ zipcode: event.target.value });
  };

  formSubmit = (event) => {
    event.preventDefault();
    const { fName, lName, email, zipcode } = this.state;
    if (fName && lName && email && zipcode) {
      alert('Purchase successful. Thank you for your patronage.');
    } else if (
      fName !== true &&
      lName !== true &&
      email !== true &&
      zipcode !== true
    ) {
      alert('No birds adopted, Have a nice day.');
    }
  };

  render() {
    return (
      <aside>
        <h3>Checkout</h3>
        <form onSubmit={this.formSubmit}>
          <label>First Name</label>
          <input type='text' onChange={this.firstNameInput}></input>
          <label>Last Name</label>
          <input type='text' onChange={this.lastNameInput}></input>
          <br />
          <label> Email </label>
          <input type='text' onChange={this.emailInput}></input>
          <label>Zip Code</label>
          <input type='text' onChange={this.zipcodeInput}></input>
          <input type='submit' text='Make Purchase' />
        </form>
      </aside>
    );
  }
}
export default Checkout;
