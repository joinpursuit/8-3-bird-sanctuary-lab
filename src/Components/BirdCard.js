import BirdInfo from './BirdInfo'

const BirdCard = ({ birdData, addCart }) => {
  const birdCard = birdData.map((bird) => {
    return (
      <article key={bird.id}>
        <BirdInfo
          bird={bird}
          // name={bird.name}
          // img={bird.img}
          // amount={bird.amount}
          addCart={() => addCart(bird)}
        />
      </article>
    )
  })

  return <div className='card'>{birdCard}</div>
}

export default BirdCard
