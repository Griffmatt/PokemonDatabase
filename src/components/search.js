import React from "react";
import { Link } from "react-router-dom";
import {Container, Row, Button, CardText, CardImg} from 'reactstrap';


function SearchLocation({location, pokemon}){

    function randNum(e) {
        let i
        let sum = 0 
        let r=Math.random();
        for (i in e) {
          sum += e[i];
          if (r <= sum){ 
              return i;
          }
        }
      }

    const encounterRate = randNum({1:0.65, 2:0.33, 3:0.02})

    const findablePokemon = pokemon.filter(pokemon => pokemon.rate === parseInt(encounterRate));
    const randomNumber = Math.floor(Math.random() * (findablePokemon.length));
    const foundPokemon = [findablePokemon[randomNumber]]
    const foundPoke = foundPokemon[0]

    const pokemonInLocation = pokemon.map(pokemon => {
        return (
            <div key={pokemon.id} className="col">
                <li className="col mx-auto">
                    <CardImg  src={pokemon.image} alt={pokemon.name} className="evoBackground" />
                    <CardText className="blackLink">{pokemon.number} <br/> {pokemon.name}</CardText>                
                </li>
            </div>
        );
    }); 

    
    return(
        <Container>
            <div className={location.location} key={foundPoke.id} >
                <Row>
                    <Button href='/locationselect'>Click here to select A New Location!</Button>
                </Row>
                <Row >
                    <Link to={`/locationselect/${foundPoke.locationId}/${foundPoke.id}`}>
                        <Button className='locationBtn mx-auto mt-5 mb-5 ' value={location.location} type="button">Search for a pokemon in the {location.location}</Button>
                    </Link>
                </Row>
            </div>
            <Container>
                <Row>
                    <h2>Current Pokemon In This Location!</h2>
                </Row>
                <Row>
                    <div className="list-unstyled" tg="ul">
                        <Row>
                            {pokemonInLocation}
                        </Row>
                    </div>
                </Row>
            </Container>
        </Container>
    )
}

export default SearchLocation;
