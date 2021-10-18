import { LOCATIONS } from '../shared/locations';
import * as ActionTypes from './ActionTypes';

export const Locations = (state = {
    locations: LOCATIONS
}, action) => {
switch (action.type) {
    case ActionTypes.ADD_LOCATION:
        return {...state, locations: action.payload};
    default:
        return state;
}
};