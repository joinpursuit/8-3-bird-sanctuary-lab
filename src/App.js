import React from 'react';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Birdcards from './components/Birdcards';
import birdData from './data/birds';

// const App = () => {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//     </div>
//   );
// };

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <Cart />
        <Checkout />
        <Birdcards />
      </>
    );
  }
}
export default App;
