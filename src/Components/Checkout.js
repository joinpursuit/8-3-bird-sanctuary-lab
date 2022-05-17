import react from "react";

class Checkout extends react.Component {
  render() {
    return (
      <form
        className="Checkout"
        onSubmit={() => alert("You have adopted birds. Thank you!")}
      >
        <h5>Checkout</h5>
        <label for="first-name">First Name</label>
        <input id="first-name" type="text" />
        <label for="last-name">Last Name</label>
        <input id="last-name" type="text" />
        <label for="email">Email</label>
        <input id="email" type="email" />
        <label for="zipcode">Zip Code</label>
        <input id="zipcode" type="number" />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Checkout;
