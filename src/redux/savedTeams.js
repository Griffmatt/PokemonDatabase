import{SAVED_TEAMS} from '../shared/savedTeams'
import * as ActionTypes from './ActionTypes';

export const SavedTeams = (state = {
    savedTeams: SAVED_TEAMS
}, action) => {
switch (action.type) {
    case ActionTypes.POST_SAVED_TEAM:
        return {...state, savedTeams: action.payload};
    case ActionTypes.ADD_SAVED_TEAM:
        return state.concat(action.payload);
    default:
        return state;
}
};
