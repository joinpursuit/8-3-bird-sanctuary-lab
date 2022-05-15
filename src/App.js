import BirdCardContainer from "./BirdCardContainer";
import birdData from "./data/birds";
import bonusItems from "./data/bonusItems";

const App = () => {
  return (
    <div>
      <BirdCardContainer birdData={birdData} />
    </div>
  );
};

export default App;
