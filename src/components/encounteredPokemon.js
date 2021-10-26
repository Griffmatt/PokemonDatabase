import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Card, CardBody, CardHeader, CardImg, CardTitle, CardDeck, Input, Modal, Label, Form, CardText } from 'reactstrap';

function FoundPokemon({pokemon}){
  
    return(
        <div>
            <Row>
                <h2>Catch Them!</h2>
            </Row>
            <Row>            
                <div key={pokemon.id}>
                    <div className={pokemon.location}>
                        <img src={pokemon.image} alt={pokemon.name}/>
                    </div>
                    <h2>{pokemon.name} - {pokemon.number} - {pokemon.location}</h2>
                </div>
            </Row>
        </div>
    )
}

function BattleBox({pokemon, addCaughtPokemon, caughtPokemon}){

    const [caught, setCaught] = useState(false)
    const [i, setI] = useState(0)
    const [message, setMessage] = useState('')
    const [modalIsOpen, setIsOpen] = useState(false);
    const [pokeName, setPokeName] = useState(pokemon.name)


    const openModal = () => {
      setIsOpen(true);
    }
  
    const closeModal = () => {
      setIsOpen(false);
    }
  
    
    const tryToCatch = () => {
        setI(i + 1)
        
        const randN = Math.floor(Math.random() * ((100 * pokemon.rate) - 1) + 1)
        console.log(randN)
        
        
        if (randN < 45){
            setCaught(true)                 
        }         
    }

    const addToTeam = () => {
        const gender = pokemon.gender[Math.floor(Math.random() * pokemon.gender.length)]
        const pokemonCaught = ({...pokemon, named: pokeName, gendered: gender})
        addCaughtPokemon(pokemonCaught)
        setIsOpen(false)  
      }

    function BattleButtons({pokemon}){
        if (caught){
            return(
                <Col className="col-5 mt-5 mb-5">
                    <Button className="optionBtn" onClick={openModal} >Add To PC</Button> {" "}
                    <Link to={`/locationselect/${pokemon.locationId}`}>   
                        <Button className="optionBtn">Look For New Pokemon</Button>   
                    </Link>                                                       
                </Col>  
            )
        }
        else if(i === 5){
            return(
                <Col className="col-5 mt-5 mb-5">
                    <Link to={`/locationselect/${pokemon.locationId}`}>   
                        <Button className="optionBtn">Look For New Pokemon</Button>   
                    </Link>                                                       
                </Col>  
            )
        }
        else{
            return(
                <Col className="col-5 mt-5 mb-5">
                    <Button onClick={tryToCatch}
                        className="optionBtn">Try to Catch!
                        </Button> {" "}
                    <Link to={`/locationselect/${pokemon.locationId}`}>   
                        <Button className="optionBtn">Run away!</Button>   
                    </Link>                                                       
                </Col>  
            )
        }
    }
   function BattleMessages({pokemon}) {
        useEffect(()=> {
            if(i === 0){     
                setMessage(`You have encountered ${pokemon.name}!`)      
            }
            else if(caught){  
                setMessage(`You Caught ${pokemon.name}!`)  
                
            }
            else if(i<5){
                setMessage(`The pokemon broke free you have ${5-i} pokeballs left!`)  
                
            }
            else{
                setMessage(`You have run out of pokeballs, ${pokemon.name} has escaped!`)  
            }
        })

        return(
            <h2 className="mt-5 mb-5">{message}</h2>
        )

    }            
     
    return(
        <Card>
             <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
            >
                <Card>
                    <CardHeader>
                        <CardTitle tag="h5" className="blackLink">Give your {pokemon.name} a name!</CardTitle>
                    </CardHeader>
                    <CardBody>                    
                        <Row className="mb-3">
                            <Label>Your Pokemon's name:
                                <Input type="text" defaultValue={pokemon.name} onChange={event => setPokeName(event.target.value)}/>
                            </Label>
                        </Row>
                        <Row className="mx-auto">
                            <Col>
                                <Link to={{
                                    pathname:`/caughtPokemon/${pokemon.id}`,
                                    state:{named: {pokeName}}
                            }}>
                                    <Button className="modalBtn" onClick={addToTeam} type="button">Add To Team!</Button>
                                </Link>
                            </Col>
                            <Col>
                                <Button onClick={closeModal} className="modalBtn">Don't Add To PC</Button>
                            </Col>
                        </Row>                 
                    </CardBody>
                </Card>
            </Modal>
            <Row> 
            <Col className="col-7">
                    <CardBody>
                        <BattleMessages pokemon={pokemon} caughtPokemon={caughtPokemon}/>
                    </CardBody>
            </Col> 
                <BattleButtons pokemon={pokemon}/>
            </Row>
        </Card>
    )
}

function CaughtPokemon({caughtPokemon}){

    const [filter, setFilter] = useState('');

    const pokemon = caughtPokemon.filter(pokemon => pokemon.named.toLowerCase().startsWith(filter.toLowerCase()) || pokemon.name.toLowerCase().startsWith(filter.toLowerCase()) || filter === ''  || pokemon.number.includes(filter)).map(pokemon => {
        return (
            <div key={pokemon.id} className="col-md-4 col-xs-6 mb-5">
                <CardDeck className="pt-2 shadow">      
                    <Card>
                        <CardHeader>
                        <CardImg top width="100%" src={pokemon.image} alt={pokemon.name}  />
                        </CardHeader>
                        <CardBody>
                            <CardTitle tag="h5" className="blackLink">{pokemon.named} {pokemon.number} {pokemon.gendered}</CardTitle>
                        </CardBody>
                    </Card>
                </CardDeck>
            </div>
        );
    }); 
    return(
        <Container>
            <Row>
                <h2>Caught Pokemon</h2>
            </Row>
            <Row className="mb-2">
                <Col className="col-md-4 offset-md-8" >
                    <Input id="filter"
                        name="filter"
                        type="text"
                        value={filter}
                        onChange={event => setFilter(event.target.value)}
                        autoComplete="off"
                    />
                </Col>
            </Row>
            <Row>
                {pokemon}
            </Row>
        </Container>
    )
}

function EncounteredPokemon({pokemon, addCaughtPokemon, caughtPokemon}){
    return(
        <Container>
            <FoundPokemon pokemon={pokemon} />
            <BattleBox pokemon={pokemon} addCaughtPokemon={addCaughtPokemon} caughtPokemon={caughtPokemon}/>
            <CaughtPokemon caughtPokemon={caughtPokemon}/>
        </Container>
    )
}

export default EncounteredPokemon;