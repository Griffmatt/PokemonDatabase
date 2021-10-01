import * as ActionTypes from './ActionTypes';

export const addPokemon = pokemon => ({
    type: ActionTypes.ADD_POKEMON,
    payload: pokemon
});

export const gymLeaders = leaders => ({
    type: ActionTypes.ADD_GYM_LEADERS,
    payload: leaders
});
