import React from 'react'

class CheckOut extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      zipCode: '',
    }
  }
  handleSubmit = (event) => {
    event.preventDefault()
    alert('You have adopted birds. Thank you!')
  }

  first = (event) => {
    const { value } = event.target
    this.setState({ firstName: value })
  }
  last = (event) => {
    const { value } = event.target
    this.setState({ lastName: value })
  }

  ema = (event) => {
    const { value } = event.target
    this.setState({ email: value })
  }

  zipcode = (event) => {
    const { value } = event.target
    this.setState({ zipcode: value })
  }
  render() {
    return (
      <div>
        <div>
          <h2>Checkout</h2>
          <form onSubmit={this.handleSubmit}>
            First Name
            <br />
            <input
              id='values'
              name='firstName'
              type='text'
              onChange={this.first}
            />
            <br />
            Last Name
            <br />
            <input
              id='values'
              name='lastName'
              type='text'
              onChange={this.last}
            />
            <br />
            Email
            <br />
            <input id='values' name='email' type='text' onChange={this.ema} />
            <br />
            Zip Code
            <br />
            <input
              id='values'
              name='email'
              type='number'
              onChange={this.zipcode}
            />
            <br />
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default CheckOut
