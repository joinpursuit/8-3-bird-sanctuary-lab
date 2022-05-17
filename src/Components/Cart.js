function Cart({ total, cart }) {
  const cartItems = cart.map((bird) => {
    return (
      <li>
        {bird.name}: ${bird.amount}
      </li>
    );
  });

  return (
    <section className="Cart">
      <h1>Cart</h1>
      <ol className="cart-list Cart">{cartItems}</ol>
      <h4 className="total">Total: ${total}</h4>
    </section>
  );
}

export default Cart;
