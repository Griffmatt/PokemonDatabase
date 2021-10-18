import React from "react";
import { Row } from 'reactstrap';

function EncounteredPokemon({pokemon}){
    const gender = pokemon.gender[(Math.floor(Math.random() * (pokemon.gender.length)))]
  
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
                    <h2>{pokemon.name} - {pokemon.number} - {pokemon.location} - {gender}</h2>
                </div>
            </Row>
        </div>
    )
}

export default EncounteredPokemon;