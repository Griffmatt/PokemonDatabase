import * as ActionTypes from './ActionTypes';

export const addPokemonToTeam = pokemon => ({
    type: ActionTypes.ADD_POKEMON_TO_TEAM,
    payload: pokemon
});

export const gymLeaders = leaders => ({
    type: ActionTypes.GYM_LEADERS,
    payload: leaders
});