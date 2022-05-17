import React from "react";

function Cart({ cart }) {
  const cartItems = cart.map((bird) => {
    return (
      <li>
        {bird.name}: {bird.amount}
      </li>
    );
  });

  return (
    <aside>
      <h2>Cart</h2>
      <h4>Discount:%</h4>
      <h4>Total: $</h4>
      <ol className="Cart">
        {cartItems} <h4></h4>
      </ol>
      <ul className="Cart">
        <li>Stickers</li>
      </ul>
    </aside>
  );
}
export default Cart;
