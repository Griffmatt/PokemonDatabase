import{GYM_LEADERS} from '../shared/gymLeaders'
import * as ActionTypes from './ActionTypes';

export const Leaders = (state = {
    leaders: GYM_LEADERS
}, action) => {
switch (action.type) {
    case ActionTypes.ADD_GYM_LEADERS:
        return {...state, leaders: action.payload};
    default:
        return state;
}
};

/*import React, {Component} from "react";
import {CardImg, Row, Col, Container, Form} from 'reactstrap';
import Select from "react-select";
import { addSavedTeam } from '../redux/ActionCreators';
import { withRouter } from 'react-router-dom';
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

class Teams extends Component{
    constructor(props){
        super(props)
        this.state={
            selected: []
        }
    }

    saveTeam=()=>{
        this.props.addSavedTeam(this.state.selected)
        this.setState({selected:['']})
      }
    handleChange=(e)=>{
        this.setState({selected: e}) 
      }

    render(){

        const options = this.props.pokemon.pokemon.map(pokemon => ({...pokemon, value: pokemon.id, label: `${pokemon.name} ${pokemon.number}`}))

   const selectedTeam = this.state.selected.map(pokemon => {
        return(
            <Col className="col-lg-2 col-6">
                <div key={pokemon.id}>
                    <CardImg src={pokemon.image} alt={pokemon.name} className="evoBackground"/>
                    <h3>{pokemon.name} <br/> {pokemon.number}</h3>   
                </div>
            </Col>
        )
    })

    const teams = this.props.savedTeams.savedTeams.map(team => {
        return(team.map(pokemon =>{
        return(
            <Col>
                <div key={pokemon.id}>
                    <CardImg src={pokemon.image} alt={pokemon.name} className="evoBackground"/>
                    <h3>{pokemon.name} <br/> {pokemon.number}</h3>   
                </div>
            </Col>
        )}
    ))})
        return(
            <Container>
            <Row>
                <h2>Create A Team</h2>
            </Row>
            <Row>
                <Form>
                        <Row>
                            <Col  >
                                <Select options={this.state.selected.length === 6 ? [] : options}  onChange={this.handleChange} value={this.state.selected} isMulti />
                            </Col >
                        </Row>
                    </Form>
                    <Row className="mt-5">
                        {selectedTeam}
                    </Row>   
            </Row>
            <Row>
                <button className="saveTeam btn mb-2 mx-auto" onClick={this.saveTeam} >Save Team</button>
            </Row>
            <Row>
                {teams}
            </Row>
        </Container>
        ) 
    } 
} 

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Teams)); */