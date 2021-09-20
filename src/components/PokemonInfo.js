import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardTitle, CardHeader, CardBody, Row, Container, Col, CardText, Button } from 'reactstrap';

function RenderPokemonInfo({pokemon}) {
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
                                <dl>
                                    <dt>Type</dt>
                                    <dd><RenderType pokemon={pokemon}/></dd>
                                    <dt>Weaknesses</dt>
                                    <dd><RenderWeakeness pokemon={pokemon}/></dd>
                                </dl>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <CardText>
                        
                    </CardText>
                </Row>
                <Row>

                </Row>
            </CardBody>
        </Card>
    );
}

function RenderType({pokemon}){
    const type = pokemon.type.map(type => {
        return (
            <div key={pokemon.id} className="d-inline">
                <Button className={type} >{type} </Button>{" "}
            </div>
        );
    }); 
    return(
        <>
            {type}   
        </>
    )
    
}

function RenderWeakeness({pokemon}){
    const weakness = pokemon.weakness.map(weakness => {
        return (
            <div key={pokemon.id} className="d-inline">
                <Button className={weakness} >{weakness} </Button>{" "}
            </div>
        );
    }); 
    return(
        <>
            {weakness}   
        </>
    )
        
}

function PokemonInfo(props){
    return(
        <Container>
                <RenderPokemonInfo pokemon={props.pokemon} />
        </Container>
    )
}

export default PokemonInfo;
