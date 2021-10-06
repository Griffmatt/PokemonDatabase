import {createStore, combineReducers, applyMiddleware } from 'redux';
import {Pokemon} from './pokemon';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {Leaders} from './gymLeaders'
import { SavedTeams } from './savedTeams';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            pokemon: Pokemon,
            leaders: Leaders,
            savedTeams: SavedTeams
        }), 
        applyMiddleware(thunk, logger) 
    );

    return store;
};