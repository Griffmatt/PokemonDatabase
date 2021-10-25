import {createStore, applyMiddleware } from 'redux';
import {Pokemon} from './pokemon';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {Leaders} from './gymLeaders'
import { SavedTeams } from './savedTeams';
import { Locations } from './locations';
import {CaughtPokemon} from './caughtPokemon';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage'

const config = {
    key: 'root',
    storage, 
    debug: true
}



export const ConfigureStore = () => {
    const store = createStore(
        persistCombineReducers(config, {
            pokemon: Pokemon,
            leaders: Leaders,
            savedTeams: SavedTeams,
            locations: Locations,
            caughtPokemon: CaughtPokemon
        }), 
        applyMiddleware(thunk, logger) 
    );

    const persistor = persistStore(store);

    return { persistor, store};
};