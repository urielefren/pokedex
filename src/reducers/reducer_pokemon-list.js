import {FETCH_POKEMON_LIST, FETCH_POKEMON_DATA} from '../actions/index';

export default function(state=[], action) {
    switch (action.type) {
        case FETCH_POKEMON_LIST:
            return [action.payload.data, ...state];
        case FETCH_POKEMON_DATA:
            return [action.payload.data, ...state];
    }
    return state;
}