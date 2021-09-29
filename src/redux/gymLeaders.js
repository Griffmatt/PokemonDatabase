import{GYM_LEADERS} from '../shared/gymLeaders'
import * as ActionTypes from './ActionTypes';

export const Leaders = (state = {
    leaders: GYM_LEADERS
}, action) => {
switch (action.type) {
    case ActionTypes.ADD_GYM_LEADERS:
        return {...state, leaders: action.payload};
    default:
        return state;
}
};