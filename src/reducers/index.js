import {combineReducers} from 'redux';
import PokemonListReducer from './reducer_pokemon-list';

const rootReducer = combineReducers({
    pokemons: PokemonListReducer
});

export default rootReducer;