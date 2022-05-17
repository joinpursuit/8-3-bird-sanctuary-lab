//total
//discount after 3 birds
//update the total as a bird is inputed 
//a remove option for each selection 
//whihc birds have you selected already
//log props make sure youre selecting single bird
import React from 'react'
import birdData from '../data/birds';

class Cart extends React.Component {

    render(){
        const { newSelectedBirds } = this.props
        
        //function to stack birds
        const addtoCart = () => {
            
        }

        return(
            <div className="Cart">
                <h3>Cart</h3>
                <h4>Total:</h4>
                <ol>
                    <li></li>
                </ol>
            </div>
        )
    }
}

export default Cart;