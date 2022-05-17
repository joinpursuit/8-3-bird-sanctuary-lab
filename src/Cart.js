function Cart({ discount, total }) {
  return (
    <div className='birdCart'>
      <h2>Cart</h2>
      <h3>Discount: {discount}%</h3>
      <h4>Total: ${total}</h4>
      <p> Your donations qualify you for the following:</p>
    </div>
  );
}
export default Cart;
