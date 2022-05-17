import React from "react";

class Checkout extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      firstName: '',
      lasttName: '',
      email: '',
      zipCode: '',
      isValid: false,
    };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    // >> Validating the fields
    if(this.state.isValid) {
      alert('You have adopted birds. Thank you!');
      this.handleFormReset();
    }
  }

  handleFormReset = (event) => {
      this.setState({
        firstName: '',
        lasttName: '',
        email: '',
        zipCode: '',
        isValid: false,
        formErrors: {firstName: '', lasttName: '', email: '', zipCode: ''},
        firstNamelValid: false,
        lastNamelValid: false,
        emailValid: false,
        zipCodeValid: false,
        formValid: false
      });
  }

  handleTextFirstNameChange = (event) => {
    const { value } = event.target;
    if (value !== ''){
      this.setState({
        firstName: value,
        isValid: true,
      });
    }
  }
  handleTextLastNameChange = (event) => {
    const { value } = event.target;
    if (value !== ''){
      this.setState({
        lasttName: value,
        isValid: true,
      });
    }
  }
  handleTextEmailChange = (event) => {
    const { value } = event.target;
    if (value !== ''){
      this.setState({
        email: value,
        isValid: true,
      });
    }
  }
  handleTextZipCodeChange = (event) => {
    const { value } = event.target;
    if (value !== ''){
      this.setState({
        zipCode: value,
        isValid: true,
      });
    }
  }

  render() {
    return(
      <>
        <section className="Checkout">
          <h2>Checkout</h2>
          <form onSubmit={this.handleFormSubmit} onReset={this.handleFormReset}>
            First Name
            <input 
              id="firstName" 
              name="firstName"
              type="text"
              value={this.state.firstName}
              onChange={this.handleTextFirstNameChange}
            />
            Last Name
            <input 
              id="lasttName" 
              name="lasttName"
              type="text"
              value={this.state.lasttName}
              onChange={this.handleTextLastNameChange}
            />
            Email
            <input 
              id="email" 
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleTextEmailChange}
            />
            Zip Code
            <input 
              id="zipCode" 
              name="zipCode"
              type="number"
              value={this.state.zipCode}
              onChange={this.handleTextZipCodeChange}
            />
            <input type="submit" value="Submit" onClick={() => this.props.checkoutValid(true)}/>
          </form>
        </section>
      </>
    )
  };

}

export default Checkout;