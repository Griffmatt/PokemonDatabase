import React, {Component} from 'react';
import KantoPokedex from './KantoPokedex';
import PokemonInfo from './PokemonInfo';
import KantoLeaders from './KantoGymLeaders';
import Teams from './Teams';
import Header from './Header';
import CatchThem from './catchThem';
import { addSavedTeam } from '../redux/ActionCreators';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return {
        pokemon: state.pokemon,
        leaders: state.leaders,
        savedTeams: state.savedTeams
       
    };
};

const mapDispatchToProps = {
    addSavedTeam
}

class Main extends Component {

     render(){
        
        const PokemonId = ({match}) => {
            return (
                <PokemonInfo
                    pokemon={this.props.pokemon.pokemon.filter(pokemon => pokemon.id === +match.params.id)[0]}
                    pokemonArr={this.props.pokemon.pokemon}
                />  
            );
        };

        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/kantoPokedex' render={() => <KantoPokedex pokemon={this.props.pokemon} />} />
                    <Route path="/kantoPokedex/:id"  component={PokemonId} />
                    <Route exact path='/kantoLeaders' render={() => <KantoLeaders leaders={this.props.leaders} />} />
                    <Route exact path='/yourTeams' render={() => <Teams pokemon={this.props.pokemon.pokemon} savedTeams={this.props.savedTeams.savedTeams} addSavedTeam={this.props.addSavedTeam}/>}/>
                    <Route exact path='/catchThem' render={() => <CatchThem pokemon={this.props.pokemon}/>} />
                    <Redirect to='/kantoPokedex' />
                </Switch>          
            </div>
        );
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps )(Main));