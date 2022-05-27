const Bird = ({bird, handleClick}) => {
    const { name, img, id, amount } = bird
   
     return (
         <div id={id} key={id}>
             <h5>{name}</h5>
             <p>Price ${amount}</p>
             <img src={img} alt={name}/>
             <br></br>
             <button onClick={handleClick}>Adopt</button>
         </div>
       )
   
   };
   
   export default Bird;
   