import React from "react";
import "./BirdsInfo";
import birdData from "./data/birds";
import BirdsInfoCSSS from "./BirdInfo.css";

class BirdsInfo extends React.Component {
    render () {
        const { bird } = this.props;
        return (
            <section>
          {birdData.map((bird) => {
               const {name,amount,img,ig} = bird;
            
          return(
              <div id="birds-list">
            <ul className="card">
<li>
            <h3>{name}</h3>
            <p>${amount}</p>
            <img src={img} alt="{name}"/>
            <button type="Submit">Adopt</button>
            </li>
            </ul>  
            </div>
            )
          })
            }
        </section>
        );
    }
}
export default BirdsInfo;
