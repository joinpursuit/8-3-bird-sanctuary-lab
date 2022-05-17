import data from "../data/birds";
import { Component } from "react";

class Birdcard extends Component {
    constructor (){
        super()
      
    }
    render(){
        let { price, name, img} = this.props.product
           
        return(
              
            <div className="birds">
               <div id="products">
                  <div>{name}</div>
                  <div>Price:${price}</div>
                  <img src={img} alt="Product Image"/>
                 <button>Adopt</button>
               </div>
             </div>  
        );      
    }
    

}

export default Birdcard;