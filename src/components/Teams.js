import React, {useState} from "react";
import {CardImg, Row, Col, Container, Form, Card, Input, Label, FormGroup} from 'reactstrap';
import Select from "react-select";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function Teams({pokemon, savedTeams, addSavedTeam, caughtPokemon}){

    const [selected, setSelected] = useState([]);
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [evolved, setEvolved] = useState(true);
    const [evolves, setEvolves] = useState(false);
    const [legendary, setLegendary] = useState(false);
    const [caught, setCaught] = useState(false);


    const saveTeam=()=>{
        if(selected.length === 6){
        setSelected([''])
        addSavedTeam(selected)
        }
        else{
            alert('Your team must contain 6 pokemon!')
        }
      }

      const handleTypeSelect = e => {
          setSelectedTypes(e)
    }

      const handleChange = e => {
        setSelected(e)
        setSelectedTypes(e) 
      }

      const handleCheck1 = () => {
        if(evolved === false){
            setEvolved(true)
            setEvolves(false)
        }
        else{
            setEvolves('')
            setEvolved(false)
        }
      }

      const handleCheck2 = () => {
        setLegendary(!legendary)
    }

    const handleCheck3 = () => {
        setCaught(!caught)
    }

    let filteredPokemon = caught?caughtPokemon:pokemon;

    const typesSelected = selectedTypes.map(type => type.value) 
    const options = pokemon.map(pokemon => ({...pokemon, value: pokemon.id, label: `${pokemon.name} ${pokemon.number}`}))
    const filteredOptions = filteredPokemon.filter(pokemon => (pokemon.evolves === evolved || pokemon.evolves === evolves) &&(pokemon.legendary === false || pokemon.legendary === legendary) && !typesSelected.includes(pokemon.type[0]) && !typesSelected.includes(pokemon.type[1])).map(pokemon => ({...pokemon, value: pokemon.id, label: `${pokemon.name} ${pokemon.number}`}))
    
    const typesArr = ['Bug', 'Dark', 'Dragon','Electric', 'Fairy', 'Fighting', 'Fire', 'Flying', 'Ghost', 'Grass', 'Ground', 'Ice', 'Normal', 'Poison', 'Psychic', 'Rock', 'Steel', 'Water']
    const types = typesArr.map(type => ({label: type, value: type}))

    function handleRandom(){
    const n =[]
    const randomTeam = []
    if(filteredOptions.length < 6){
        alert("You have filtered out too many pokemon to make a complete team!")
    }else{
        for(let i=0; i<6; i++){
        let rand = Math.floor(Math.random() * (filteredOptions.length));
        if (n.includes(rand)) {
            i -= 1;
            continue;
        }
        else {
        n.push(rand);
        randomTeam.push(filteredOptions[rand]);
        }
        }
        console.log(filteredOptions)
        console.log(typesSelected)
        console.log(caughtPokemon)
        setSelected(randomTeam)
        }
    }

    const selectedTeam = selected.map(pokemon => {
        return(
            <Col className="col-lg-2 col-6">
                <div key={pokemon.named?pokemon.idd:pokemon.id}>
                    <CardImg src={pokemon.image} alt={pokemon.name} className="evoBackground"/>
                    <h3>{pokemon.named?pokemon.named:pokemon.name} <br/> {pokemon.number}</h3>   
                </div>
            </Col>
        )
    })

    const teams = savedTeams.map(team => { return(<li className="pt-3"><Row><h2>Team {team[0].teamId}</h2></Row>{team.map( pokemon => {
        if(pokemon.teamId){
            return
        }
        else{
        return(
           <li className="list-inline-item" key={pokemon.named?pokemon.idd:pokemon.id}>
                <CardImg src={pokemon.image} alt={pokemon.name} className="savedTeam"/>
                <h3>{pokemon.named?pokemon.named:pokemon.name} <br/> {pokemon.number}</h3>    
            </li>
        )}})}</li>)}
    )

    return(
        <Container>
            <Row>
                <h2>Create A Team</h2>
            </Row>              
            <Card>
                <Container>
                    <Row>
                        <Tabs forceRenderTabPanel defaultIndex={1}>
                            <TabList>
                                <Tab>Select Team</Tab>
                                <Tab>Random team</Tab>
                            </TabList>
                            <TabPanel>
                                <Form>
                                    <Row>
                                        <Col>
                                            <Select options={selected.length === 6 ? [] : options}  onChange={handleChange} value={selected} isMulti className="mx-2 mt-2" />
                                        </Col >
                                    </Row>
                                </Form>
                            </TabPanel>
                            <TabPanel>
                                <Form>
                                    <Row>
                                       <Col>
                                            <label>Select types to NOT include in random team:</label>
                                            <Select  isMulti className="mx-2 mt-2" options={types} onChange={handleTypeSelect} />
                                       </Col>
                                    </Row>
                                    <Row className="mt-2">
                                        <FormGroup>
                                            <Label>Fully Evolved?</Label>
                                            <Input className="random-team-checkbox" type="checkbox" onChange={handleCheck1}/> 
                                            <Label for="fullyEvolved">Include legendaries?</Label>
                                            <Input className="random-team-checkbox" type="checkbox" onChange={handleCheck2}/> 
                                            <Label for="fullyEvolved">Only Pokemon You've Caught?</Label>
                                            <Input className="random-team-checkbox" type="checkbox" onChange={handleCheck3}/>                                                                                                                                                                 
                                        </FormGroup>
                                    </Row>
                                    <Row>
                                        <button className="saveTeamBtn btn mt-2 mx-auto"  onClick={handleRandom} type="button">Get Random Team</button>
                                    </Row>
                                </Form>
                            </TabPanel>
                        </Tabs>
                        <Row className="mt-5 mx-auto">
                            {selectedTeam}
                        </Row>   
                    </Row>
                    <Row className="offset-lg-9">
                        <Col>
                            <button className="saveTeamBtn btn mb-2" onClick={saveTeam} >Save Team</button>
                        </Col>
                    </Row>
                    <Row className="stripeBackground row-fluid">
                        <h2>Saved Teams</h2>
                    </Row>
                </Container>
                    <Row>
                        <div className="mx-auto">
                            <ol className="list-unstyled">
                                {teams}
                            </ol>
                        </div>
                    </Row>
                </Card>
        </Container>
    )  
} 

export default Teams;