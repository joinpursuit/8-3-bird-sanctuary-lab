import React from "react";


class Checkout extends React.Component {
    constructor(){
      super();
      this.state = {
        first: "",
        last: "",
        email: "",
        zip: "",
      };
    }

    firstName = (evt) =>{
        this.setState({first: evt.target.value});
    }

    // handleSubmission = (evt) => {
    //     evt.preventDefault();
    //     const {value} = evt.target
    //     if (this.state.valid) {
    //         "You have adopted birds."
    //     }
    // }

    lastName = (evt) =>{
        this.setState({last: evt.target.value});
    }

    mailE = (evt) =>{
        this.setState({email: evt.target.value});
    }

    zippy = (evt) =>{
        this.setState({zip: evt.target.value});
    }
  
    render(){
        const {check} = this.props;
     return (
      <div className="checkout">
          <form onSubmit={check}>
              <label htmlFor="first">First Name</label>
              <input type="text" id="first" name="first" onChange={this.firstName} required></input>
              <label htmlFor="last">Last Name</label>
              <input type="text" id="last" name="last" onChange={this.lastName} required></input>
              <label htmlFor="email">Email</label>
              <input type="text" id="email" name="email" onChange={this.mailE} required></input>
              <label htmlFor="zip">Zip Code</label>
              <input type="text" id="zip" name="zip" onChange={this.zippy} required></input>
              <input type="submit" value="Submit" />
          </form>
        <h1>Hello, world!</h1>
      </div>
    );
    }
  };
  
  export default Checkout;
  