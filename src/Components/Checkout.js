import react from "react";

class Checkout extends react.Component {
  render() {
    return (
      <form className="checkout">
        <h5>Checkout</h5>
        <label>First Name</label>
        <input type="text" />
        <label>Last Name</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <label>Zipcode</label>
        <input type="number" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Checkout;
