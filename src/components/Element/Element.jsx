import { useState} from 'react';
import CardFront from '../Cards/CardFront';
import CardBack from '../Cards/CardBack';
import './Element.scss';




const pokemonClass = "pokemon__list__element"

const Element = ({data}) => {
  const [open, setOpen] = useState(false)

  const types = data.types.map(({type, slot})=>(<span key={slot}>{type.name + " "}</span>))
  
  return (

      <li className={pokemonClass} key={data.id} >
        <div className={`${pokemonClass}__wrapper ${open ? `${pokemonClass}__wrapper--open`: null}`}>
          <CardFront  data={data} types={types}  pokemonClass={pokemonClass} setOpen={setOpen}/>        
          <CardBack data={data} pokemonClass={pokemonClass} setOpen={setOpen} />
        </div>
      </li>

  );
}

export default Element;



