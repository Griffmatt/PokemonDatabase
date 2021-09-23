import React, {Component} from 'react';
import KantoPokedex from './KantoPokedex';
import PokemonInfo from './PokemonInfo';
import KantoLeaders from './KantoGymLeaders';
import Header from './Header';
import {POKEMON} from '../shared/pokemon'
import { GYM_LEADERS } from '../shared/gymLeaders';
import { Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component {
    constructor(props){
    super(props)
    this.state={
        pokemon: POKEMON,
        leaders: GYM_LEADERS
    }
}
    
     render(){
        
        const PokemonId = ({match}) => {
            return (
                <PokemonInfo
                    pokemon={this.state.pokemon.filter(pokemon => pokemon.id === +match.params.id)[0]}
                    pokemonArr={this.state.pokemon}
                />  
            );
        };

        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/kantoPokedex' render={() => <KantoPokedex pokemon={this.state.pokemon} />} />
                    <Route path="/kantoPokedex/:id"  component={PokemonId} />
                    <Route exact path='/kantoLeaders' render={() => <KantoLeaders leader={this.state.leaders} />} />
                    <Redirect to='/kantoPokedex' />
                </Switch>          
            </div>
        );
    };
}

export default Main;