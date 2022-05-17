import "./BirdCard.css";

const BirdCard = ({ bird, handleClick }) => {
  const { name, img, amount } = bird;
  return (
    <div className="birds card">
      <section>
        <h5>{name}</h5>
        <p>{`$${amount}`}</p>
        <img src={img} alt={`${name}`} />
        <button className="button" onClick={handleClick}>
          Adopt
        </button>
      </section>
    </div>
  );
};

export default BirdCard;
