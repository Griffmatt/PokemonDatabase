import {createStore, combineReducers, applyMiddleware } from 'redux';
import {Pokemon} from './pokemon';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {Leaders} from './gymLeaders'
import { SavedTeams } from './savedTeams';
import { Locations } from './locations';
import { CaughtPokemon } from './caughtPokemon';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            pokemon: Pokemon,
            leaders: Leaders,
            savedTeams: SavedTeams,
            locations: Locations,
            caughtPokemon: CaughtPokemon
        }), 
        applyMiddleware(thunk, logger) 
    );

    return store;
};