import './BirdboxCard.css';


function BirdboxCard({ bird: { name, amount, img }, addToCart})  { 
addToCart()
return (
        <article className="birds card">
       <h4>{name}</h4>
       <p> Price: {amount} </p>
       <img src ={img} alt={name}/>
       <button onClick={addToCart}>Adopt</button>
        </article>
    );
}


export default BirdboxCard;
















