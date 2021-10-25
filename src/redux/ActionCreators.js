import * as ActionTypes from './ActionTypes';

export const addPokemon = pokemon => ({
    type: ActionTypes.ADD_POKEMON,
    payload: pokemon
});

export const gymLeaders = leaders => ({
    type: ActionTypes.ADD_GYM_LEADERS,
    payload: leaders
});

export const addSavedTeam = savedTeams => dispatch => {
    dispatch(postSavedTeam(savedTeams));   
};

export const postCaughtPokemon = caughtPokemon => ({
    type: ActionTypes.POST_CAUGHT_POKEMON,
    payload: caughtPokemon
});

export const addCaughtPokemon = CaughtPokemon => dispatch => {
    dispatch(postCaughtPokemon(CaughtPokemon));   
};

export const postSavedTeam = savedTeams => ({
    type: ActionTypes.POST_SAVED_TEAM,
    payload: savedTeams
});

export const addLocation = location => ({
    type: ActionTypes.ADD_LOCATION,
    payload: location
});
