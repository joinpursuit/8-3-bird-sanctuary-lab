import birdData from "./data/birds";
import bonusItems from "./data/bonusItems";
import BirdCards from "./components/BirdCards";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <BirdCards birdData={birdData} cart={cart} setCart={setCart} />
      <Cart
        birdData={birdData}
        cart={cart}
        setCart={setCart}
        bonusItems={bonusItems}
      />
      <Checkout cart={cart} setCart={setCart} />
    </div>
  );
};

export default App;
