import{SAVED_TEAMS} from '../shared/savedTeams'
import * as ActionTypes from './ActionTypes';

export const SavedTeams = (state = {
    savedTeams: SAVED_TEAMS
}, action) => {
switch (action.type) {
    case ActionTypes.POST_SAVED_TEAM:
        const teams = [...state.savedTeams, [{teamId: state.savedTeams.length + 1},...action.payload]];
        return {savedTeams: teams}
    default:
        return state;
}
};
