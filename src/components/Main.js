import React, {Component} from 'react';
import KantoPokedex from './KantoPokedex';
import PokemonInfo from './PokemonInfo';
import KantoLeaders from './KantoGymLeaders';
import Teams from './Teams';
import Header from './Header';
import SelectLocation from './setLocation';
import SearchLocation from './search';
import EncounteredPokemon from './encounteredPokemon';
import BattleBox from './battleBox';
import { addSavedTeam } from '../redux/ActionCreators';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';



const mapStateToProps = state => {
    return {
        pokemon: state.pokemon,
        leaders: state.leaders,
        savedTeams: state.savedTeams,
        locations: state.locations
       
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

        const SelectedLocation = ({match}) => {
            return (
                <SearchLocation
                    location={this.props.locations.locations.filter(location => location.id === +match.params.id)[0]}  
                    pokemon={this.props.pokemon.pokemon.filter(pokemon => pokemon.locationId === +match.params.id)} 
                />  
            );
        };
        
        const FoundPoke = ({match}) => {
            return (
                <div className="container">
                    <EncounteredPokemon
                        pokemon={this.props.pokemon.pokemon.filter(pokemon => pokemon.id === +match.params.foundId)[0]}
                        location={this.props.locations.locations} 
                    />
                    <BattleBox
                        pokemon={this.props.pokemon.pokemon.filter(pokemon => pokemon.id === +match.params.foundId)[0]}
                        location={this.props.locations.locations} 
                    />
                </div>
            )
        };

        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/kantopokedex' render={() => <KantoPokedex pokemon={this.props.pokemon} />} />
                    <Route path="/kantopokedex/:id"  component={PokemonId} />
                    <Route exact path='/kantoleaders' render={() => <KantoLeaders leaders={this.props.leaders} />} />
                    <Route exact path='/yourteams' render={() => <Teams pokemon={this.props.pokemon.pokemon} savedTeams={this.props.savedTeams.savedTeams} addSavedTeam={this.props.addSavedTeam}/>}/>
                    <Route exact path='/locationselect' render={() => <SelectLocation locations={this.props.locations}/>} />
                    <Route exact path='/locationselect/:id' component={SelectedLocation} />
                    <Route exact path='/locationselect/:id/:foundId' component={FoundPoke} />
                    <Redirect to='/kantoPokedex' />
                </Switch>          
            </div>
        );
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps )(Main));