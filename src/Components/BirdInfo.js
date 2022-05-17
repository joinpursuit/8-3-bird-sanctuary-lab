const BirdInfo = ({ bird: { name, img, amount }, addCart }) => {
  // let { name, img, amount } = birdData
 
  return (
    <div className="birds">
      <img src={img} alt='bird' />
      <br />
      {name}
      <br />${amount}
      <br />
      <button onClick={addCart}>
        Adopt
      </button>
    </div>
  )
}
export default BirdInfo
