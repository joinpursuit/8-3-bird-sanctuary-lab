function Cart({ cart }) {
  const cartItems = cart.map((bird) => {
    return (
      <li>
        {bird.name}: ${bird.amount}
      </li>
    )
  })

  return (
    <div className='Cart'>
      <h2>Cart</h2>
      <h4>Discount:</h4>
      <h4>Total:</h4>
      <ol>{cartItems}</ol>
    </div>
  )
}

export default Cart
