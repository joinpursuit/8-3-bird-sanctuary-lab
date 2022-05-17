import { useState } from "react";

const Checkout = ({ setCart }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [zipCode, setZipCode] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName && lastName && email && zipCode) {
      alert("You have adopted birds. Thank you!");
      setFirstName("");
      setLastName("");
      setEmail("");
      setZipCode("");
      setCart([]);
    } else {
      alert("Please fill out all required fields.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="Checkout">
      <h2>Checkout</h2>
      <label>
        First Name:
        <br />
        <input
          type="text"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </label>
      <label>
        Last Name:
        <br />
        <input
          type="text"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </label>
      <label>
        Email:
        <br />
        <input
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label>
        Zip Code:
        <br />
        <input
          type="number"
          value={zipCode}
          onChange={(event) => setZipCode(event.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  );
};

export default Checkout;
