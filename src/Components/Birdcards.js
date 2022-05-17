import React from "react";

import birdData from "../data/birds.js";

class DataSource extends React.Component {
  constructor () {
    super();
    this.state = {
      count: 1,
      discount: 0,
      total: 0,
      cart: [],
    };
  }

  addToCart = (id, name, amount) => {

    this.setState({
      cart: [...this.state.cart, `${name}: $${amount}`]
    });
  }

  handleClick = (event) => {
    console.log('this is:', event);
  }

  checkDiscount = (count, total) => {
    return (count >= 3 && total > 100) ? 10 : 0;
  }

  render() {

    return(
      <>
        <aside>
          <section className="Cart">
            <h2>Cart</h2>
            <p>Discount: {this.state.discount}%</p>
            <h4>Total: ${this.state.total}</h4>
            <ol>{
            (this.state.cart).map(item => {
              return <li >{item}</li>
            })
            }</ol>
            <p>Your donations has qualified for the following items</p>

          </section>
          <section className="checkout">
            <h2>Checkout</h2>
            <form onSubmit={this.handleFormSubmit} onReset={this.handleFormReset}>
              <label>First Name</label>
              <input 
                id="firstName" 
                name="firstName"
                type="text"
                value={this.state.firstName}
                onChange={this.handleTextChange}
              />
              <label>Last Name</label>
              <input 
                id="lasttName" 
                name="lasttName"
                type="text"
                value={this.state.lasttName}
                onChange={this.handleTextChange}
              />
              <label>Email</label>
              <input 
                id="email" 
                name="email"
                type="text"
                value={this.state.email}
                onChange={this.handleTextChange}
              />
              <label>Zip Code</label>
              <input 
                id="zipCode" 
                name="zipCode"
                type="number"
                value={this.state.zipCode}
                onChange={this.handleTextChange}
              />
              <button type="submit">Submit</button>
            </form>
          </section>
        </aside>
        <article>
          {birdData.map(({ name, img, amount, id }) => (
            <div className='card birds'>
              <h4 key={id}>{name}</h4>
              <p>Price ${amount}</p>
              <img src={img}/>
              {/* <button onClick={() => this.setState({ total: this.state.total + amount})}>Adopt</button> */}
              {/* <button onClick={(e) => this.handleClick(e, {amount})}>Adopt</button> */}
              <button onClick={() => {
                // console.log(name)
                  //this.checkDiscount();
                  this.setState({
                    count: this.state.count + 1,
                    
                    total: this.state.total + amount,
                    discount: this.checkDiscount(this.state.count, this.state.total),
                  });
                  this.addToCart(id, name, amount)
                  //this.checkDiscount(this.state.count);
                }}>Adopt</button>
            </div>
          ))}
        </article>
      </>
    );
  }
}

export default DataSource;
