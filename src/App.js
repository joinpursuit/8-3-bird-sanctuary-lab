import React from 'react';
import './App.css'
import birdData from './data/birds';
import BirdCards from './Components/BirdCards'
import Cart from './Components/Cart'

//store state here and pass into components as props


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      selectedBirds: []
    }
  }

  //function to add to cart
  handleOnClick = (id) => {
    //takes an id
    //adds single bird to selected birds
    const singleBird = birdData.find(e => e.id === id)
    //this.setState((id) => {}) 
    console.log(singleBird)

    this.setState((previousState) => {
      const newSelectedBirds = this.state.selectedBirds.push(singleBird);
      return {
        selectedBirds: newSelectedBirds
      }
    })
  }

  render() {
    return <>
    <div>
      <BirdCards handleOnClick={this.handleOnClick}/>
      <Cart selectedBirds={this.state.selectedBirds}/>
    </div>
    </>;
  }
}

export default App;
