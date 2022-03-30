
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import Element from '../Element/Element'

import './List.scss';
import Select from 'react-select'

const List = () =>{


  const [showRing, setShowRing] = useState(true)
  const [numberOfPokemons, setNumberOfPokemons] = useState(21)

  const [nameFilter, setNameFilter] = useState("")
  const [typeFilter, setTypeFilter] = useState([])

  const options = []

  let pokemonList = useSelector(state=> state.pokemons)
  const listSize = pokemonList.length

  useEffect(()=>{
    if(pokemonList) setTimeout(()=>setShowRing(false), 1000)
  }, [pokemonList])

  if(nameFilter !== ""){
    pokemonList = pokemonList.filter(pokemon => pokemon.name.includes(nameFilter.toLowerCase()))
  }
  
  if(typeFilter.length>0){
      const filterArray = typeFilter.map(singleFilter=> singleFilter.value)
      pokemonList = pokemonList.filter(singlePokemon => {
        let counter = 0
        singlePokemon.types.forEach(singleType=> (filterArray.includes(singleType.type.name)) ?counter++ : null )
        return (counter>=filterArray.length) ? true : false
      })
    }



  let pokemons = (pokemonList.map((pokemon, index)=>{
    pokemon.types.forEach(el=>{
      const obj = {value: el.type.name, label: el.type.name.charAt(0).toUpperCase() + el.type.name.slice(1)}
      if(!options.some(e => e.value === obj.value)) options.push(obj)
      }
    )
   
    if(index<numberOfPokemons) return (<Element data={pokemon} key={pokemon.id}/>) 
    else return null
    }

  ))
  


  const ring = (<div className="lds-ring__wrapper">
  <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
  </div>)

  const oneElementFlag = (pokemons.length % 3 === 1) ? true : false

  

  return (
    <>
      {showRing ? ring : null}
      <div className="pokemon__inputs">
        <label htmlFor="nameFilter">Name Filter</label>
        <input name="nameFilter" type="text" className="input input__name" placeholder='Search by name' value={nameFilter} onChange={e => setNameFilter(e.target.value)}/>
        <label htmlFor="typeFilter">Type Filter</label>
        <Select
        id="input__select"
        isMulti
        name="typeFilter"
        options={options}
        className="basic-multi-select input input__type"
        classNamePrefix="select"
        placeholder='Search by type'
        closeMenuOnSelect={false}
        value={typeFilter}
        onChange={e => setTypeFilter(e) }
        />
      </div>
      

      <div className="pokemon">
        <ul className={`pokemon__list ${oneElementFlag ? "pokemon__list__one" : null}`}>
          {pokemons}
        </ul>
        {(numberOfPokemons <= listSize) && !nameFilter && !typeFilter.length>0  ? <button className="pokemon__button" onClick={()=>{setNumberOfPokemons(prevState => prevState+12)}}>Load More</button> : null}
      </div>

    </>
  );
}

export default List;