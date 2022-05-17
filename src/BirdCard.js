function BirdCard({ bird: { name, amount, img } }) {
  return (
    <article>
      <h4>{name}</h4>
      <p>Price: ${amount}</p>
      <img src={img} alt={name} />
      <button onClick={addToCard}>Adpot</button>
    </article>
  );
}
export default BirdCard;
