import "./BirdCard.css"


function BirdCard ( {bird: {name,amount, img},cart}) {
    cart()
    return(
        <article className="birds card">
            <h4>{name}</h4>
            <p>Price: ${amount}</p>
            <img src={img} alt={name} />
            <button OnClick={cart}>Adopts</button>
        </article>
    )
}
