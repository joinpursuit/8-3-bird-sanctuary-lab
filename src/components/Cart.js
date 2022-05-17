const Cart = ({ cart, setCart, bonusItems }) => {
  let total = 0;
  const bonus = [];

  cart.map((bird) => {
    if (cart.length >= 3) {
      total += bird.amount * 0.9;
    } else {
      total += bird.amount;
    }
  });

  if (total >= 100 && total < 300) {
    bonus.push(bonusItems[0]);
  } else if (total >= 300 && total < 500) {
    bonus.push(bonusItems[0], bonusItems[1]);
  } else if (total >= 500 && total < 1000) {
    bonus.push(bonusItems[0], bonusItems[1], bonusItems[2]);
  } else if (total >= 1000) {
    bonus.push(bonusItems[0], bonusItems[1], bonusItems[2], bonusItems[3]);
  }

  return (
    <div className="Cart">
      <h2>Cart</h2>
      <h4>Discount: {cart.length >= 3 ? 10 : 0}%</h4>
      <h4>
        Total: $
        {Number(total).toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </h4>
      <ol>
        {cart.map((bird) => {
          return (
            <li>
              {bird.name}: ${bird.amount.toFixed(2)}
              <button onClick={() => setCart([])}>Delete</button>
            </li>
          );
        })}
      </ol>
      <p>Your donation has qualified you for the following items: </p>
      <ul>
        {bonus.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Cart;
