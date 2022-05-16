function birbCart({discount, total, bonusItems, cart}) {
    console.log("Cart component has cart:", cart);
    const cartItems = cart.map((bird) => {
        return (
            <li>
                {bird.name:}
            </li>
        )
    })
}