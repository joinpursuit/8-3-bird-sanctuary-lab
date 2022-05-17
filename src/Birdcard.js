function displaySingleBird({ bird: { name, amount, img }, handleClick }) {
  return (
    <div className='ABird'>
      <h3>{name}</h3>
      <p>Price: ${amount}</p>
      <img src={img} alt='A picture of the chosen bird.' />
      <button onClick={appendToCart}>Adopt</button>
    </div>
  );
}
export default displaySingleBird;
