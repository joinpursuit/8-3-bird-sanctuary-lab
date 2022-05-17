function BirdCard({ bird: { name, amount, img }, addToCart }) {
  return (
    <div className="card birds">
      <h3>{name}</h3>
      <p>Price: ${amount}</p>
      <img src={img} alt={name} />
      <br />
      <button onClick={addToCart}>Adopt</button>
    </div>
  );
}

export default BirdCard;
