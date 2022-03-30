
import { FETCH_POKEMONS, fetchPokemons } from '../actions/appActions'

const initialState = {
  pokemons: []
}

export const appReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_POKEMONS: {
      return {...state, pokemons: action.payload}
    }
    default:
      return state
  }
}


export const loadPokemons = () => async (dispatch, getState) => {
    const pokemonsArr = []
    fetch('https://pokeapi.co/api/v2/pokemon?limit=81')
   .then(response => response.json())
   .then(function(allpokemon){
   allpokemon.results.forEach(pokemon=>{
    fetch(pokemon.url)
    .then(response => response.json())
    .then(function(pokeData){
    pokemonsArr.push(pokeData)
    })
   }
   )
  })
  console.log(pokemonsArr)
  dispatch(fetchPokemons(pokemonsArr))
} 