export const FETCH_POKEMONS = "FETCH_POKEMONS";


export const fetchPokemons = (pokemons) => ({
  type: FETCH_POKEMONS,
  payload: pokemons,
});