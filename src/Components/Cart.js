
const Cart = ({cart, bonusItems}) => {

    const adoptedBirds = cart.map((bird) => {
        return <li>{bird.name}: ${bird.amount}</li>
    })

    const total = cart.reduce((acc, bird) => acc + bird.amount, 0)

    return (
    <div>
        <h3>Cart</h3>
        <p>Discount: {cart.length >= 3 ? '10%' : '0%'}</p>
        <p>Total: ${cart.length >= 3 ? (total * .9) : total}</p>
        <ol>
            {adoptedBirds}
        </ol>
        <p>Your adoptions have qualified you for the following bonus:</p>
        <ul>
        {/* New Syntax introduced by our instructors. */}
        {total >= 100 && <li>{bonusItems[0]}</li>}
        {total >= 300 && <li>{bonusItems[1]}</li>}
        {total >= 500 && <li>{bonusItems[2]}</li>}
        {total >= 1000 && <li>{bonusItems[3]}</li>}
        </ul>
    </div>

)

    

}

export default Cart