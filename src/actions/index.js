import axios from 'axios';

const APIPokedex = 'http://pokeapi.co/api/v2/pokemon';

export const FETCH_POKEMON_LIST = 'FETCH_POKEMON_LIST';

export function fetchPokemonList(generation) {
    const url = `${APIPokedex}/${generation}/`;
    const request = axios.get(url);
    return {
        type: FETCH_POKEMON_LIST,
        payload: request
    }
}