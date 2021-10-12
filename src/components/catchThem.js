import React, {useState} from "react";
import {Button, Row, Container, Col, CardBody, Card} from 'reactstrap';


const locations = [{location: "Cave"}, {location: "Field"}, {location: "Forest"}, {location: "Mountain"}, {location: "Ocean"}]

function CatchThem({pokemon}){

    const [locationSelected, setLocation] = useState("");
    const [searching, setSearching] = useState(false);
    const [encounterRate, setEncounterRate] = useState();
    const [message, setMessage] = useState("")
    
    let i = 0

    const selectedLocation= (e)=>{
        setLocation(e.target.value)
    }

    const backToSelect = () => {
        setLocation("")
    }

    const backToSearch = () => {
        setSearching(false)
    }

    const tryToCatch = () => {
        i++
        
        const randN = Math.floor(Math.random() * ((100 * encounterRate) - 1) + 1)
        console.log(randN)
        
        
        if (randN < 50){
            alert("You Caught the Pokemon!")
            
            setSearching(false)              
            
        }
        else if (i < 5){
            alert(`The pokemon broke free you have ${5-i} pokeballs left!`)
        }
        else{
            setSearching(false)
            alert("You have run out of pokeballs, The Pokemon has escaped!")
            i = 0
        }
             
        
    }

    const handleSearching = () => {
        const randNum = Math.floor(Math.random() * (100 - 1) + 1)
        console.log(randNum)
        setSearching(true)
    
        if(randNum < 66){
            setEncounterRate(1);
        }
        else if( randNum > 98){
            setEncounterRate(3);
        }
        else{
            setEncounterRate(2);
        }
    }

    function SelectLocation(){
        const locationBtns = locations.map(location => {
            return(
                <div key={location.location} className="p-1 col-xl-6 mx-auto">
                    <Button  className={`${location.location} locationBtn`} onClick={selectedLocation} value={location.location}>{location.location}</Button>
                </div>
            )})
    
        return(
            <Row>
                {locationBtns} 
            </Row>  
        )
            
    }

    function SearchLocation(){
        return(
            <div className={locationSelected} >
                <Row>
                    <Button onClick={backToSelect}>Click here to select A New Location!</Button>
                </Row>
                <Row className=" mt-5 mb-5">
                    <Button className='locationBtn mx-auto' onClick={handleSearching} value={locationSelected}>Search for a pokemon in the {locationSelected}</Button>
                </Row>
            </div>
        )
    }

    function EncounteredPokemon(){
        const findablePokemon = pokemon.pokemon.filter(pokemon => pokemon.location === locationSelected && pokemon.rate === encounterRate);
        const randomNumber = Math.floor(Math.random() * (findablePokemon.length));
        const foundPokemon = [findablePokemon[randomNumber]].map(pokemon => {
            console.log(findablePokemon)
            return(
                <div key={pokemon.id}>
                    <img src={pokemon.image}></img>
                    <h2>{pokemon.name} - {pokemon.number} - {pokemon.location}</h2>
                    <Card>
                        <Row>
                            <Col className="col-7">
                                    <CardBody>
                                        <h2>{message}</h2>
                                    </CardBody>
                            </Col>
                            <Col className="col-5">
                                    <Button onClick={tryToCatch} className="optionBtn">Try to Catch!</Button> {" "}   
                                    <Button onClick={backToSearch} className="optionBtn">search for a new pokemon in the {pokemon.location}!</Button>                                                          
                            </Col>                  
                        </Row>
                    </Card>
                </div>
            )}
            )
        
        return(
            <div>
                {foundPokemon}
            </div>
        )
    }

    if(!locationSelected){
        console.log(locationSelected)
    return(
        <Container>
            <Row>
                <h2>Catch Them!</h2>
            </Row>
            <Row>
                 <SelectLocation/>   
            </Row>
        </Container>
    )}
    else if(locationSelected && searching){
        
        return(
            <Container>
                <Row>
                    <h2>Catch Them!</h2>
                </Row>
                <Row>
                    <EncounteredPokemon/>
                </Row>
            </Container>
        )
    }
    else{
        return(
            <Container>
                <Row>
                    <h2>Catch Them!</h2>
                </Row>
                <Row>
                    <SearchLocation/>
                </Row>
            </Container>
        )
    }
}

export default CatchThem;