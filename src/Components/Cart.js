function Cart({ cart }) {
  const cartItems = cart.map((bird) => {
    return (
      <li>
        {bird.name}: ${bird.amount}
      </li>
    )
  })

  let sum = 0

  let amount = cart.map((bird) => {
    return bird.amount
  })

  amount.reduce((a, b) => {
    return (sum = a + b)
  }, 0)


  return (
    <div className='Cart'>
      <h2>Cart</h2>
      <h4>Discount:</h4>
      <h4>Total:${sum}</h4>
      <ol>{cartItems}</ol>
    </div>
  )
}

export default Cart
