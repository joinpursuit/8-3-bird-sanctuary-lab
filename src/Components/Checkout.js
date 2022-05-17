import react from "react";

class Checkout extends react.Component {
  render() {
    return (
      <form
        className="Checkout"
        onSubmit={() => alert("You have adopted birds. Thank you!")}
      >
        <h5>Checkout</h5>
        <label htmlFor="first-name">
          First Name: <input id="first-name" type="text" />
        </label>

        <label htmlFor="last-name">
          Last Name: <input id="last-name" type="text" />
        </label>

        <label htmlFor="email">
          Email: <input id="email" type="email" />
        </label>

        <label htmlFor="zipcode">
          Zip Code: <input id="zipcode" type="number" />
        </label>

        <input className="submit-button" type="submit" value="Submit" />
      </form>
    );
  }
}

export default Checkout;
