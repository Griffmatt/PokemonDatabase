import{CAUGHT_POKEMON} from '../shared/caughtPokemon'
import * as ActionTypes from './ActionTypes';

export const CaughtPokemon = (state = {
    caughtPokemon: CAUGHT_POKEMON
}, action) => {
switch (action.type) {
    case ActionTypes.POST_CAUGHT_POKEMON:
        const pokemon = [...state.caughtPokemon, action.payload];
        return {caughtPokemon: pokemon}
    default:
        return state;
}
};