import React, {useState} from "react";
import {CardImg, Row, Col, Container, Form, Card, CardHeader, Input, Label, FormGroup} from 'reactstrap';
import Select from "react-select";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function Teams({pokemon, savedTeams, addSavedTeam}){

    const [selected, setSelected] = useState([]);

    const saveTeam=()=>{
        if(selected.length === 6){
        setSelected([''])
        addSavedTeam(selected)
        }
        else{
            alert('Your team must contain 6 pokemon!')
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

    const teams = savedTeams.map(team => { return(<li className="pt-3"><Row><h2>Team {team[0].teamId}</h2></Row>{team.map( pokemon => {
        if(pokemon.teamId){
            return
        }
        else{
        return(
           <li className="list-inline-item" key={pokemon.id}>
                <CardImg src={pokemon.image} alt={pokemon.name} className="savedTeam"/>
                <h3>{pokemon.name} <br/> {pokemon.number}</h3>    
            </li>
        )}})}</li>)}
    )

    return(
        <Container>
            <Card>
                <CardHeader className="cardHeader">
                    <h2>Create A Team</h2>
                </CardHeader>
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
                                            <Select  isMulti className="mx-2 mt-2" />
                                       </Col>
                                    </Row>
                                    <Row className="mt-2">
                                        <FormGroup>
                                            <Label>Fully Evolved?</Label>
                                            <Input className="random-team-checkbox" type="checkbox" name="fullyEvolved"/> 
                                            <Label for="fullyEvolved">Include legendaries?</Label>
                                            <Input className="random-team-checkbox" type="checkbox" name="legendary"/> 
                                            <Label for="fullyEvolved">Only Pokemon You've Caught?</Label>
                                            <Input className="random-team-checkbox" type="checkbox" name="caught"/>                                                                                                                                                                 
                                        </FormGroup>
                                    </Row>
                                    <Row>
                                        <button className="saveTeamBtn btn mt-2 mx-auto"  >Get Random Team</button>
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