function Cart({ cart, total }) {
  const cartItems = cart.map((bird) => {
    return (
      <li>
        {bird.name}: ${bird.amount}
      </li>
    )
  })

  let amount = cart.map((bird) => {
    return bird.amount
  })

  amount.reduce((a, b) => {
    return (total = a + b)
  }, 0)

  let discount = (num) => {
    if (cart.length >= 3) {
      num -= num * 0.1
    }
    console.log(num)
  }

  return (
    <div className='Cart'>
      <h2>Cart</h2>
      <h4>Discount: {discount(total)}%</h4>
      <h4>Total:${total}</h4>
      <ol>{cartItems}</ol>
    </div>
  )
}

export default Cart

// + 10% if 3 or more birds are added
// + 0% if total is less then $100 && 2 < birds are added
