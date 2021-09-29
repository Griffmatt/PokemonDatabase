import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Card, CardDeck, CardImg, CardTitle, CardHeader, CardBody, Row, Container, Button, Input, Col } from 'reactstrap';


function RenderPokemonItem({pokemon}) {
    return (
        <CardDeck className="pt-2 shadow">
            <Link to={`/kantoPokedex/${pokemon.id}`}>         
                <Card>
                    <CardHeader>
                    <CardImg top width="100%" src={pokemon.image} alt={pokemon.name}  />
                    </CardHeader>
                    <CardBody>
                        <CardTitle tag="h5" className="blackLink">{pokemon.name} {pokemon.number}</CardTitle>
                            <RenderButton pokemon={pokemon}/>
                    </CardBody>
                </Card>
            </Link>
        </CardDeck>
    );
}

function RenderButton({pokemon}){
    if(pokemon.type.length > 1){
        return(
            <div>
                <Button className={pokemon.type[0]} >{pokemon.type[0]}</Button> <Button className={pokemon.type[1]} >{pokemon.type[1]}</Button>
            </div>
        )}
    else {
        return(<Button className={pokemon.type[0]}>{pokemon.type[0]}</Button>)
    }
    
}

function KantoPokedex(props){

    const [filter, setFilter] = useState('');

    const pokedex = props.pokemon.pokemon.filter(pokemon => pokemon.name.toLowerCase().startsWith(filter.toLowerCase()) || filter === ''  || pokemon.number.includes(filter)).map(pokemon => {
        return (
            <div key={pokemon.id} className="col-md-4 col-xs-6">
                <RenderPokemonItem pokemon={pokemon} />
            </div>
        );
    }); 
    return(
        <Container>
            <Row>
                <h2>Pokedex</h2>
            </Row>
            <Row>
                <Col className="col-md-4 offset-md-8" >
                    <Input id="filter"
                        name="filter"
                        type="text"
                        value={filter}
                        onChange={event => setFilter(event.target.value)}
                        autocomplete="off"
                    />
                </Col>
            </Row>
            <Row>
                {pokedex}
            </Row>
        </Container>
    )
}

export default KantoPokedex;