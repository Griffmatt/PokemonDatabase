import {createStore, combineReducers } from 'redux';
import {Pokemon} from './pokemon';
import{Leaders} from './gymLeaders'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            pokemon: Pokemon,
            leaders: Leaders
        }),  
    );

    return store;
};