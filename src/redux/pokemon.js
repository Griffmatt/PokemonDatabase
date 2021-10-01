import { POKEMON } from '../shared/pokemon';
import * as ActionTypes from './ActionTypes';

export const Pokemon = (state = {
    pokemon: POKEMON
}, action) => {
switch (action.type) {
    case ActionTypes.ADD_POKEMON:
        return {...state, pokemon: action.payload};
    default:
        return state;
}
};