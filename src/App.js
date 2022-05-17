import { render } from '@testing-library/react';
import BirdGallery from './Components/BirdGallery';
import Cart from './Components/Cart'
import './App.css';

const App = (props) => {
  const { birdData, bonusItems } = props;

  return (
    <div>
      <div className="birds">
        {birdData.map((bird) => {
          return (
            <BirdGallery
              name={bird.name}
              img={bird.img}
              id={bird.id}
              amount={bird.amount}
            />
          );
        })}
      </div>
        <Cart />
    </div>
  );
};

export default App;
