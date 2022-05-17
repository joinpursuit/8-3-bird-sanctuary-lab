function Birdcard({ bird: { name, amount, img }, appendToCart }) {
  return (
    <div className='ABird'>
      <h3>{name}</h3>
      <p>Price: ${amount}</p>
      <img src={img} alt={name} />
      <button className='birds button' onClick={appendToCart}>
        Adopt
      </button>
    </div>
  );
}
export default Birdcard;
