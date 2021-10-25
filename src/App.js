import React, { Component } from 'react';
import Main from "./components/Main";
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ConfigureStore } from './redux/configureStore';
import { PersistGate } from 'redux-persist/es/integration/react'


const { persistor, store } = ConfigureStore();

class App extends Component {
    render() {
        return ( 
            <Provider store={store}>
                    <BrowserRouter>
                <PersistGate
                    persistor={persistor}>
                    <Main />
                </PersistGate>
                </BrowserRouter>
            </Provider>
        );
    }
}


export default App;

