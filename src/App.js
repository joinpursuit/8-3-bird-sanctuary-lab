import react from "react";
import Birds from "./Components/Birds";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import "./App.css";

class App extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      adoptedBirdsArray: [],
      birdCost: 0,
    };
  }

  handleClick(event) {
    const birdName = event.target.parentNode.children[1].innerText;
    const birdCost = parseInt(
      event.target.parentNode.children[2].innerText.slice(8)
    );

    this.setState({
      adoptedBirdsArray: this.state.adoptedBirdsArray.concat(
        `${birdName}: $${birdCost}`
      ),
      birdCost: this.state.birdCost + birdCost,
    });
  }

  render() {
    return (
      <div className="app">
        <Cart
          adoptedBirdsArray={this.state.adoptedBirdsArray}
          birdCost={this.state.birdCost}
        />
        <Birds onClick={(event) => this.handleClick(event)} />
        <Checkout />
      </div>
    );
  }
}

export default App;
