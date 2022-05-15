import React from "react";
import birdData from "./data/birds.js"
import "./App.css";


const App = () => {
  return (
    <main>
      <aside>
        <section className="cart">
          <h2>Cart</h2>
        </section>
        <section className="checkout">
        <h2>Checkout</h2>
        </section>
      </aside>
      <article>
        {birdData.map(({ name, img, amount, id }) => (
          <div className='card'>
            <h4 key={id}>{name}</h4>
            <p>Price ${amount}</p>
            <img src={img}/>
            <button>Adopt</button>
          </div>
        ))}
      </article>
    </main>
  );
};

export default App;
