import React from 'react';
import './Checkout.css';

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      zipCode: '',
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

  render() {
    const { handleCheckout } = this.props;
    return (
      <div className='Checkout'>
        <form onSubmit={handleCheckout}>
          <h3>Checkout</h3>
          <label htmlFor='firstName'>First Name</label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            onChange={this.handleFirstName}
            required
          ></input>
          <label htmlFor='lastName'>Last Name</label>
          <input
            type='text'
            id='lastName'
            name='lastName'
            onChange={this.handleLastName}
            required
          ></input>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            onChange={this.handleEmail}
            required
          ></input>
          <label htmlFor='zipCode'>Zip Code</label>
          <input
            type='number'
            id='zipCode'
            name='zipCode'
            onChange={this.handleZipCode}
            required
          ></input>
          <input className='submit-button' type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default Checkout;
