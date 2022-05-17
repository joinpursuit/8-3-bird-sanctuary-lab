import React from 'react'

class CheckOut extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      zipCode: "",
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
    let { firstName, lastName, email, zipCode } = this.state
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
              value={firstName}
              onChange={this.first}
            />
            <br />
            Last Name
            <br />
            <input
              id='values'
              name='lastName'
              type='text'
              value={lastName}
              onChange={this.last}
            />
            <br />
            Email
            <br />
            <input
              id='values'
              name='email'
              type='text'
              value={email}
              onChange={this.ema}
            />
            <br />
            Zip Code
            <br />
            <input
              id='values'
              name='email'
              type='number'
              value={zipCode}
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
