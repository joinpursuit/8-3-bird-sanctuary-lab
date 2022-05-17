import  React from 'react';
import './cartstyle.css';

function Cart ({total, cart}) {

    const cartItems = cart.map((bird)=>{
        return (
            <li>
                {bird.name} : ${bird.amount}
            </li>
        )
    })
return (
    <aside className='aside'>
    <h2>Cart</h2>
    <h4>Discount: %</h4>
    <h4>Total: ${total}</h4>
    <ol className='cart-list Cart'></ol>
    <p>Your donations qualify you for the following items:</p>
   
    </aside>
)
}
    export default Cart;
    