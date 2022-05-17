
const BirdGallery = (props) => {
 const { name, img, id, amount } = props

  return (
      <div id={id} key={`${id}`}>
          <h4>{name}</h4>
          <p>Price ${amount}</p>
          <img src={img} alt={`${name}`}/>
          <br></br>
          <button>Adopt</button>
      </div>
    )

};

export default BirdGallery;
