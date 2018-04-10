import axios from 'axios';

const APIPokedex = 'https://pokeapi.co/api/v2/pokemon/';

export const FETCH_POKEMON_LIST = 'FETCH_POKEMON_LIST';
export const FETCH_POKEMON_DATA = 'FETCH_POKEMON_DATA';

export function fetchPokemonList(next) {
    let url = APIPokedex;//`${APIPokedex}/${generation}/`;
    if(next && next !== '') 
        url = next;
    const request = axios.get(url);
    return {
        type: FETCH_POKEMON_LIST,
        payload: request
    }
}

export function fetchPokemonData(url) {
    const request = axios.get(url);
    return {
        type: FETCH_POKEMON_DATA,
        payload: request
    }
}