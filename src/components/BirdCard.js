const BirdCard = ({ name, amount, img, id, cart, setCart }) => (
  <div className="birds">
    <h2>{name}</h2>
    <p>Price: ${amount.toFixed()}</p>
    <img src={img} alt={name} width="200px" height="200px" />
    <br />
    <button
      className="button"
      value={id}
      onClick={() => setCart([...cart, { name, amount }])}
    >
      Adopt
    </button>
  </div>
);

export default BirdCard;
