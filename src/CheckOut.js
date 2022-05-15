import React from "react";

class CheckOut extends React.Component {
  render() {
    const { checkOutHandler } = this.props;
    console.log(checkOutHandler);
    return (
      <div className="Checkout">
        <form onSubmit={checkOutHandler}>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName"></input>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName"></input>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email"></input>
          <label htmlFor="zipCode">Zip Code</label>
          <input type="number" id="zipCode" name="zipCode"></input>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default CheckOut;
