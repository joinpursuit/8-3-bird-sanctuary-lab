import { last } from "cypress/types/lodash";
import { Component } from "react";


class Checkout extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="checkout-container">
                <form>
                    <label>First Name </label>;
                    <label>Last Name </label>;
                    <label> Email</label>;
                    <label> Zip Code</label>;
                </form>
                    <button onClick> Submit </button>
            </div>
        )

    }
}



export default Checkout;