import "./App.scss";

import BirdComp from "./components/BirdComp/BirdComp";

const App = () => {
  return (
    <div>
      <header id="birdHeader">
        <h1 id="testing">Bird Sanctuary</h1>
      </header>
      <section id="widgets">
        <BirdComp />
      </section>
    </div>
  );
};

export default App;
