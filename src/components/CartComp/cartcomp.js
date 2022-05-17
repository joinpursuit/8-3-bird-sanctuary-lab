import { Component } from "react";
import bonusItems from "../../data/bonusItems";
import "./CartComp.scss";
import { Button } from "react-bootstrap";

class CartComp extends Component {
  addBirdToCart = (cartArr) => {
    let keyNum = 0;

    const birdsInCart = cartArr.map((bird) => {
        return (
            <li key={keyNum++}>
            {bird.name}: ${bird.amount}
            <Button
              onClick={() => this.deleteABird(cartArr, bird)}
              variant="danger"
              className="deleteBird"
            >
              X
            </Button>
          </li>
        );
      });   
      return birdsInCart;
    };
    deleteABird = (cartArr, bird) => {
        const index = cartArr.indexOf(bird);
        if (index > -1) {
            cartArr.splice(index, 1);
          }
          this.setState({
            cartArr: cartArr,
          });
        };
        addTotal = (cartArr) => {
            let totalAmount = 0;
        
            for (const price of cartArr) {
              totalAmount += price.amount;
            }
            if (!Number(totalAmount)) {
              return <h4>Total: $0</h4>;
            } else {
              return <h4>Total: ${totalAmount}</h4>;
            }
          };
        
        
          addBonuses = (cartArr) => {
            let total = 0;
            const bonusToAdd = [];
        
            for (const bird of cartArr) {
              total += bird.amount;
            }
        
            if (total >= 100 && total < 300) {
              bonusToAdd.push(bonusItems[0]);
            }
        
            if (total >= 300 && total < 500) {
              bonusToAdd.push(bonusItems[0], bonusItems[1]);
            }
        
            if (total >= 500 && total < 1000) {
              bonusToAdd.push(bonusItems[0], bonusItems[1], bonusItems[2]);
            }
        
            if (total > 1000) {
              for (const bonus of bonusItems) {
                bonusToAdd.push(bonus);
              }
            }
        
            let keyNum = 0;
            const bonuses = bonusToAdd.map((bonus) => {
              return <li key={keyNum++}>{bonus}</li>;
            });
        
            return bonuses;
          };
        
          addDiscount = (cartArr) => {
            let discount = 0;

            if (cartArr.length > 3) {
              discount = 10;
            }
        
            return <h4>Discount: {discount}%</h4>;
          };
        
          render() {
            const { cartArr } = this.props;
            return (
                <section className="cartSection Cart">
                  <h2>Cart</h2>
                  {this.addDiscount(cartArr)}
        {this.addTotal(cartArr)}
        <ol className="birdList">{this.addBirdToCart(cartArr)}</ol>
         
          <strong>
          Your donations have qualified you for the following items:
          </strong>
          <ul>{this.addBonuses(cartArr)}</ul>
      </section>
    );
  }
  }