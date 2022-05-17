import birdData from './data/birds';
function Cart({ discount, total, cart }) {
  const cartItems = cart.map((bird) => {
    return (
      <li>
        {bird.name}: ${bird.amount}
      </li>
    );
  });
  return (
    <aside className='birdCart'>
      <h2>Cart</h2>
      <h3>Discount: {discount}%</h3>
      <h4>Total: ${total}</h4>
      <ol className='cartList'>{cartItems}</ol>
      <p> Your donations qualify you for the following:</p>
      <ul></ul>
    </aside>
  );
}
export default Cart;
