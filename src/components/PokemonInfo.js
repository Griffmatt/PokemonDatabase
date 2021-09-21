import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardTitle, CardHeader, CardBody, Row, Container, Col, CardText, Button, ButtonGroup} from 'reactstrap';

function RenderPokemonInfo({pokemon, pokemonArr}) {
    return (
        <Card>
            <CardHeader>
                <Row>
                    <Link to="/kantoPokedex" className="d-flex"><i className="fa fa-arrow-left fa-lg" aria-hidden="true"/></Link> 
                    <CardTitle className="infoTitle">
                        {pokemon.name} {pokemon.number}
                    </CardTitle>
                </Row>
            </CardHeader>
            <CardBody>
                <Row>
                    <div className="col-sm-4 offset-lg-2">
                        <CardImg  src={pokemon.image} alt={pokemon.name}  />
                    </div>
                    <Col className="col-lg-4">
                        <Card className="p-2">
                            <Row>
                            <Col>
                                <dl>
                                    <dt>Height</dt>
                                    <dd>{pokemon.height}</dd>
                                    <dt>Category</dt>
                                    <dd>{pokemon.category}</dd>
                                </dl>
                            </Col>
                            <Col>
                                <dl>
                                    <dt>Weight</dt>
                                    <dd>{pokemon.weight}</dd>
                                    <dt>Gender</dt>
                                    <dd>{pokemon.gender[0]} {pokemon.gender[1]}</dd>
                                </dl>
                            </Col>
                            </Row>
                            <Row>
                                <dt>Description</dt>
                                <CardText>{pokemon.description}</CardText>
                            </Row>
                            <Row>
                                    <dt>Type</dt>
                                        <div className="col-10 col-sm-8 offset-1 offset-sm-2 col-xl-6 offset-xl-3">
                                            <RenderType pokemon={pokemon}/> 
                                        </div>                      
                                    <dt>Weaknesses</dt>
                                        <div className="col-10 col-sm-8 offset-1 offset-sm-2 col-xl-6 offset-xl-3 ">
                                            <RenderWeakeness pokemon={pokemon} className="col col-lg-4"/>
                                        </div>                                
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <h2 bolder="true">Evolution Line</h2>
                    <div className="" tg="ul">
                        <RenderEvolotions pokemonArr={pokemonArr} pokemonId={pokemon.evolutionId} />
                    </div>
                </Row>
            </CardBody>
        </Card>
    );
}


function RenderType({pokemon}){
    const type = pokemon.type.map(type => {
        return (
            <div key={type} className="p-1 col-6 mx-auto">
                <Button  className={type}>{type} </Button>
            </div>
        );
    }); 
    return(
        <div>
            <Row>
                {type} 
            </Row>  
        </div>
    )
    
}
function RenderWeakeness({pokemon}){
    const weakness = pokemon.weakness.map(weakness => {
        return (
            <div className="p-1 col-6 mx-auto" key={weakness}>
                <Button className={weakness}>{weakness} </Button>{" "}
            </div>
        );
    }); 
    return(
        <>
            <div>
                <Row>
                    {weakness}
                </Row>
            </div>   
        </>
    )
        
}
function RenderEvolotions ({pokemonArr, pokemonId}) {
    const evolutions = pokemonArr.filter(evolution => evolution.evolutionId === pokemonId).map(evolution => {
        if(evolution.evolves===true && window.innerWidth > 800){
        
        return(
            <div key={evolution.id} className="col-4">
                <li className="col-6">
                <Link to={`/kantoPokedex/${evolution.id}`}>
                    <CardImg  src={evolution.image} alt={evolution.name} className="evoLink" />
                    <CardText className="blackLink">{evolution.number} <br/> {evolution.name}</CardText>
                </Link>
                </li>
            </div>
        )
        }
        else{
            return(
                <div key={evolution.id} className="col-4">
                    <li className="col-6">
                    <Link to={`/kantoPokedex/${evolution.id}`}>
                        <CardImg  src={evolution.image} alt={evolution.name} className="evoLink" />
                        <CardText className="blackLink">{evolution.number} <br/> {evolution.name}</CardText>
                    </Link>
                    </li>
                </div>
            )
        }
    })
    return(
        <div>
            <Row>
                {evolutions}
            </Row>
        </div>
    )
}

function PokemonInfo(props){
    return(
        <Container>
                <RenderPokemonInfo pokemon={props.pokemon} pokemonArr={props.pokemonArr}/>
        </Container>
    )
}

export default PokemonInfo;
