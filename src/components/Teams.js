import React, {useState} from "react";
import {CardImg, Row, Col, Container, Form} from 'reactstrap';
import Select from "react-select";

function Teams({pokemon, savedTeams, addSavedTeam}){

    const [selected, setSelected] = useState([]);

    const saveTeam=()=>{
        if(selected.length === 6 || selected.length === 3){
        setSelected([''])
        addSavedTeam(selected)
        }
        else{
            alert('Your team must contain either 3 or 6 pokemon!')
        }
      }
      const handleChange = e => {
        setSelected(e) 
      }
    

    const options = pokemon.map(pokemon => ({...pokemon, value: pokemon.id, label: `${pokemon.name} ${pokemon.number}`}))

    const selectedTeam = selected.map(pokemon => {
        return(
            <Col className="col-lg-2 col-6">
                <div key={pokemon.id}>
                    <CardImg src={pokemon.image} alt={pokemon.name} className="evoBackground"/>
                    <h3>{pokemon.name} <br/> {pokemon.number}</h3>   
                </div>
            </Col>
        )
    })

    const teams = savedTeams.map(pokemon => {
        return(
            <Col>
                <div key={pokemon.id}>
                    <CardImg src={pokemon.image} alt={pokemon.name} className="evoBackground"/>
                    <h3>{pokemon.name} <br/> {pokemon.number}</h3>   
                </div>
            </Col>
        )}
    )

    return(
        <Container>
        <Row>
            <h2>Create A Team</h2>
        </Row>
        <Row>
            <Form>
                    <Row>
                        <Col  >
                            <Select options={selected.length === 6 ? [] : options}  onChange={handleChange} value={selected} isMulti />
                        </Col >
                    </Row>
                </Form>
                <Row className="mt-5">
                    {selectedTeam}
                </Row>   
        </Row>
        <Row>
            <button className="saveTeam btn mb-2 mx-auto" onClick={saveTeam} >Save Team</button>
        </Row>
        <Row>
            {teams}
        </Row>
    </Container>
    )  
} 

export default Teams;