import React from "react";

class Checkout extends React.Component {
  render() {
    return (
      <div className="checkout">
        <h4>Checkout</h4>
        <form>
          <label for="firstname">First Name</label>
          <input type="text" id="firstName" name="firstName"></input>
          <label for="lastname">Last Name</label>
          <input type="text" id="lastName" name="lastName"></input>
          <label for="email">E-mail Address</label>
          <input name="email" id="email" type="email"></input>
          <label for="zip">Zip Code</label>
          <input id="zip" name="zip" type="number"></input>
          <br></br>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default Checkout;
