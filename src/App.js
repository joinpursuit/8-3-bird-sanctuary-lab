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
            <img src={img}/>
            <h4 key={id}> {name} </h4>
            <p> {amount} </p>
          </div>
        ))}
      </article>
    </main>
  );
};

export default App;
