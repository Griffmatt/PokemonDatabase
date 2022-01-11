import React from 'react';
import { Link} from 'react-router-dom';
import { Card, CardImg, CardTitle, CardHeader, CardBody, Row, Container, Col, CardText, Button} from 'reactstrap';

function RenderPokemon({pokemon}) {

    return (
        <Card>
            <CardHeader className="cardHeader">
                <Row>
                    <CardTitle className="infoTitle">
                        <h2>
                            You caught a {pokemon.name},<br/>
                            they have been added to your PC!
                        </h2>
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
                                    <dd>{pokemon.gender[0]}</dd>
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
                <Col className="col mt-5 mb-5">
                    <Link to={'/pc'}>
                    <Button className="optionBtn mb-1">Go To PC</Button>
                    </Link>
                     {" "}
                    <Link to={`/locationselect/${pokemon.locationId}`}>   
                        <Button className="optionBtn mb-1">Look For New Pokemon</Button>   
                    </Link>                                                       
                </Col> 
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

function CaughtPokemon({pokemon}){
    return(
        <Container>
                <RenderPokemon pokemon={pokemon}/>
        </Container>
    )
}

export default CaughtPokemon;