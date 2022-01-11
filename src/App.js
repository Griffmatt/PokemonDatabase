import React, { Component } from 'react';
import Main from "./components/Main";
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import { PersistGate } from 'redux-persist/integration/react';


const {persistor, store} = ConfigureStore();

class App extends Component {
    render() {
        return ( 
            <Provider store={store}>
                <BrowserRouter>
                <PersistGate persistor={persistor}>        
                    <div className="App">
                        <Main />
                    </div>
                </PersistGate>
                </BrowserRouter>  
            </Provider>
        );
    }
}

export default App;


