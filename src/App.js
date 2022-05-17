import React from "react";
//import DataSource from "./Components/Birdcards";
import Cart from "./Components/Cart.js";
import Checkout from "./Components/Checkout.js";
import birdData from "./data/birds.js";

import "./App.css";


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      count: 1,
      discount: 0,
      total: 0,
      cart: [],
      firstName: '',
      lasttName: '',
      email: '',
      zipCode: '',
      isValid: false,
      resetCart: false,
    };
  }

  addToCart = (newObj) => {
    this.setState({
      cart: [...this.state.cart, newObj]
    });
  }
  
  checkDiscount = (count, total) => {
    return (count >= 3 && total > 100) ? 10 : 0;
  }

  handleDelete = (itemId, itemAmount, remove) => {
    if(remove) {
      const newCart = this.state.cart.filter(item => item.id !== itemId);
      this.setState({ 
        cart: newCart,
        total: this.state.total - itemAmount,
        count: this.state.count - 1,
      });
    }
    this.checkDiscount(this.state.count, this.state.total);
  };

  checkoutValid = (data) => {
    //console.log(childdata)
    if(data) {
      this.setState({ 
        cart: [],
        discount: 0,
        total: 0,
      });
    }
  }

  render() {
    return (
      <>
      <header>
        <h1>Bird Sanctuary App</h1>
      </header>
      <main>
      <aside>
        <Cart cart={this.state.cart} discount={this.state.discount} total={this.state.total} handleDelete={this.handleDelete}/>
        <Checkout total={this.state.total} checkoutValid={this.checkoutValid}/>
      </aside>
      <article>
        {birdData.map(({ name, img, amount, id }) => (
          <div className='card birds' key={id}>
            <h4>{name}</h4>
            <p>Price ${amount}</p>
            <img src={img}/>
            <button onClick={() => {
              const newObj = {'id': id, 'name': name, 'amount': amount}
                this.setState({
                  count: this.state.count + 1,
                  total: this.state.total + amount,
                  discount: this.checkDiscount(this.state.count, this.state.total),
                });
                this.addToCart(newObj)
                //this.checkBonus(this.state.count)
              }}>Adopt</button>
          </div>
        ))}
      </article>
      </main>
    </>
    );
  };
}

export default App;