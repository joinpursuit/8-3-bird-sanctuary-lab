import React from 'react';

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
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

 

  render() {
    const { handleFormSubmit } = this.props;
    return (
      <div className="Checkout">
        <h2>Checkout</h2>
        <form onSubmit={handleFormSubmit} className="birds">
          <label>
            First Name
            <input required type="text" onChange={this.handleFirstName}></input>
          </label>
          <label>
            Last Name
            <input required type="text" onChange={this.handleLastName}></input>
          </label>
          <label>
            Email
            <input
              required
              type="text"
              onChange={this.handleEmail}
              placeholder="user@email.com"
            ></input>
          </label>
          <label>
            Zip Code
            <input
              required
              type="number"
              onChange={this.handleZipCode}
              placeholder="90210..."
            ></input>
          </label>
          <input type="submit" text="Submit" />
        </form>
      </div>
    );
  }
}

export default Checkout;
