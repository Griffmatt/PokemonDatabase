import React, {Component} from 'react';
import KantoPokedex from './KantoPokedex';
import PokemonInfo from './PokemonInfo';
import {POKEMON} from '../shared/pokemon'
import { Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component {
    constructor(props){
    super(props)
    this.state={
        pokemon: POKEMON,
    }
}
    
     render(){
        
        const PokemonId = ({match}) => {
            return (
                <PokemonInfo
                    pokemon={this.state.pokemon.filter(pokemon => pokemon.id === +match.params.id)[0]}
                    
                />  
            );
        };

        return (
            <div>
                <Switch>
                    <Route exact path='/kantoPokedex' render={() => <KantoPokedex pokemon={this.state.pokemon} />} />
                    <Route path="/kantoPokedex/:id"  component={PokemonId} />
                    <Redirect to='/kantoPokedex' />
                </Switch>          
            </div>
        );
    };
}

export default Main;