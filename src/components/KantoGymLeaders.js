import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardDeck, CardImg, CardTitle, CardHeader, CardBody, Row, Col, Container, Button } from 'reactstrap';


function RenderleaderItem({leaders}) {
    return (
        <CardDeck className="pt-2 shadow">        
                <Card>
                    <CardHeader>
                        <div>
                            <CardTitle tag="h5" className="blackLink">{leaders.name}</CardTitle>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <div className="col-sm-2">
                                <CardImg top width="50%" src={leaders.image} alt={leaders.name}  />                               
                                <RenderButton leaders={leaders}/>
                            </div>
                            <div className="col-sm-10">
                                <Row>
                                <Col>
                                    <dl>                                      
                                        <dt>Favorite Pokemon</dt>
                                        <dd><Link to={`/kantoPokedex/${leaders.pokemonId}`} ><CardImg src={leaders.pokemonImage} alt={`${leaders.name}'S Favorite Pokemon'`} className="favPokemon" /></Link></dd>
                                    </dl>
                                </Col>
                                <Col>
                                    <dl>
                                        <dt>Region</dt>
                                        <dd>{leaders.region}</dd>
                                        <dt>City</dt>
                                        <dd>{leaders.city}</dd>
                                        <RenderBadge leaders={leaders}/>
                                    </dl>
                                </Col>
                                </Row>
                                <Row>
                                    <div className="col-10 mx-auto">
                                        <hr/>
                                        {leaders.description}
                                    </div>
                                </Row>
                            </div>
                        </Row>
                    </CardBody>
                </Card>
        </CardDeck>
    );
}

function RenderButton({leaders}){
    return(
        <div className="mt-1">
            <Button className={leaders.pokemonType} >{leaders.pokemonType}</Button>
        </div>
    )
} 

function RenderBadge({leaders}){
    if(leaders.gymBadge){
        return(
            <>
                <dt>Gym Badge</dt>
                <dd className="badge"><CardImg src={leaders.gymBadge} alt={`${leaders.name}'S Gym Badge`}/></dd>
            </>
        )
    }
    else{
        return(
            <>
                <dt>Gym Badge</dt>
                <dd>N/A</dd>
            </>
        )
    }
}

function Kantoleaders(props){
    const leader = props.leaders.leaders.map(leaders => {
        return (
            <div key={leaders.name} className="col-12">
                <RenderleaderItem leaders={leaders} />
            </div>
        );
    }); 
    return(
        <Container>
            <Row>
                <h2>Kanto leaders</h2>
            </Row>
            <Row>
                {leader}
            </Row>
        </Container>
    )
}

export default Kantoleaders;