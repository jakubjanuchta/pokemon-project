import '../Element/Element.scss';


const CardBack = ({data,pokemonClass, setOpen}) => {

  return (
   
      <div className= {`${pokemonClass}__item ${pokemonClass}__back`}>
        <h2>Extra details: </h2>
        <h3>Weight: {data.weight}</h3> 
        <h3>Height: {data.height}</h3> 
        <button onClick={()=>setOpen(prevState=>!prevState)}>Close details</button>
      </div>

        
  );
}

export default CardBack;


