import {FETCH_POKEMON_LIST} from '../actions/index';

export default function(state=[], action) {
    switch (action.type) {
        case FETCH_POKEMON_LIST:
            return [action.payload.data, ...state];
    }
    return state;
}