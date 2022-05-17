import React from "react";


class BirdCard extends React.Component  {
    render() {
        const {img, amount, name, id} = this.props.birbInfo;
        const {adoption} = this.props;

        return (
            <div className="card birds">
                <h4>{name}</h4>
                <p>Price: ${amount}</p>
                <img src={img} alt={name} />
                <button onClick={()=> adoption(id,name,amount)}>Adopt</button>
            </div>
        )
    }
}

export default BirdCard;