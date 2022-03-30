import '../Element/Element.scss';


const CardFront = ({data, types, pokemonClass, setOpen})=> {

  const spritesList = Object.values(data.sprites).filter(sprite=>(typeof sprite == "string" ? sprite.includes(".png") && !sprite.includes("female") : false))
  const sprites = spritesList.map(sprite=>(<img key={`${sprite}`} src={`${sprite}`} alt="sprite"/>))

  return (
   
        <div className={`${pokemonClass}__item ${pokemonClass}__front`}>
          <h1 className={`${pokemonClass}__name`}>{data.name}</h1>
          <h2 className={`${pokemonClass}__types__title`}>Types: {types}</h2>
          <div className={`${pokemonClass}__sprites`}>{sprites}</div>
          <button onClick={()=>setOpen(prevState=>!prevState)}>More Details</button>
        </div>

        
  );
}

export default CardFront;


