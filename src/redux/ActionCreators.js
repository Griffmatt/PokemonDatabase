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

export const postSavedTeam = savedTeams => ({
    type: ActionTypes.POST_SAVED_TEAM,
    payload: savedTeams
});
