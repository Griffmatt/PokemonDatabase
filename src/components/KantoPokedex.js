import React, {useState} from 'react';
import Pagination from './pagination';
import { Link } from 'react-router-dom';
import { Card, CardDeck, CardImg, CardTitle, CardHeader, CardBody, Row, Container, Button, Input, Col } from 'reactstrap';


function RenderPokemonItem({pokemon}) {
    return (
        <CardDeck className=" shadow">
            <Link to={`/kantoPokedex/${pokemon.id}`}>         
                <Card>
                    <CardHeader>
                    <CardImg  height="100%" width="auto" src={pokemon.image} alt={pokemon.name}  />
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
    const[currentPage, setCurrentPage]=useState(1)
    const[pokemonPerPage]=useState(42)
    const [filter, setFilter] = useState('');

    const indexOfLastPokemon = currentPage * pokemonPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage
    const paginate = (pageNumber) => {setCurrentPage(pageNumber); setFilter('')};

    let currentPokemon = filter===''?props.pokemon.pokemon.slice(indexOfFirstPokemon, indexOfLastPokemon):props.pokemon.pokemon


    const pokedex = currentPokemon.filter(pokemon => pokemon.name.toLowerCase().startsWith(filter.toLowerCase()) || filter === ''  || pokemon.number.includes(filter)).map(pokemon => {
        return (
            <div key={pokemon.id} className="col-md-4 col-xs-6 pokeCard ">
                <RenderPokemonItem pokemon={pokemon} />
            </div>
        ); 
    }); 

    return(
        <Container>
            <Row>
                <h2>Pokedex</h2>
            </Row>
            <Row >
                <Col className="col-md-4 offset-md-8" >
                    <Input id="filter"
                        name="filter"
                        type="text"
                        value={filter}
                        onChange={event => setFilter(event.target.value)}
                        autoComplete="off"
                        placeholder='Search For a Pokemon'
                    />
                </Col>
            </Row>
            <Row>
                <Col className="col-12 d-flex justify-content-center">
                    <Pagination
                        paginate={paginate}
                    />
                </Col>
            </Row>
            <Row className="pb-5">
                {pokedex}
            </Row>
        </Container>
    )
}

export default KantoPokedex;