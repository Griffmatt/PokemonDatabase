import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Card, CardBody, CardHeader, CardImg, CardTitle, CardDeck, Input} from 'reactstrap';

function Pc({caughtPokemon, addCaughtPokemon}){

    const [filter, setFilter] = useState('');

    const pokemon = caughtPokemon.filter(pokemon => pokemon.named.toLowerCase().startsWith(filter.toLowerCase()) || pokemon.name.toLowerCase().startsWith(filter.toLowerCase()) || filter === ''  || pokemon.number.includes(filter) || pokemon.gender.includes(filter)).map(pokemon => {
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
                <h2>Your PC</h2>
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

export default Pc;