import Bird from "./Bird"

const BirdGallery = ({birdData, getAdoptedBird}) => {
 const allBirds = birdData.map((bird) => {
    return <Bird bird={bird} handleClick={() => getAdoptedBird(bird)}/>
 })

  return (
      <div className="birds">
          {allBirds}
      </div>
    )

};

export default BirdGallery;
