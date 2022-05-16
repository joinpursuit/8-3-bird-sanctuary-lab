import "./birdCard.css";

const BirdCard = (props) => {
  return (
    <div className="birds card">
      <h5>{props.name}</h5>
      <p>{`$${props.amount}`}</p>
      <img src={props.img} alt={`${props.name}`} />
      <button>Adopt</button>
    </div>
  );
};

export default BirdCard;
