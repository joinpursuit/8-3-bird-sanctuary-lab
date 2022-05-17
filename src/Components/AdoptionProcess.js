import react from "react";
import Cart from "./Cart";
import Checkout from "./Checkout";

class AdoptionProcess extends react.Component {
  render() {
    return (
      <div className="adoption-process">
        <Cart />
        <Checkout />
      </div>
    );
  }
}

export default AdoptionProcess;
