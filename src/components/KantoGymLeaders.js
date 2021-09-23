import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardDeck, CardImg, CardTitle, CardHeader, CardBody, Row, Col, Container, Button } from 'reactstrap';


function RenderLeaderItem({leader}) {
    return (
        <CardDeck className="pt-2 shadow">        
                <Card>
                    <CardHeader>
                        <div>
                            <CardTitle tag="h5" className="blackLink">{leader.name}</CardTitle>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <div className="col-sm-2">
                                <CardImg top width="50%" src={leader.image} alt={leader.name}  />                               
                                <RenderButton leader={leader}/>
                            </div>
                            <div className="col-sm-10">
                                <Row>
                                <Col>
                                    <dl>                                      
                                        <dt>Favorite Pokemon</dt>
                                        <dd><Link to={`/kantoPokedex/${leader.pokemonId}`} ><CardImg src={leader.pokemonImage} alt={`${leader.name}'S Favorite Pokemon'`} className="favPokemon" /></Link></dd>
                                    </dl>
                                </Col>
                                <Col>
                                    <dl>
                                        <dt>Region</dt>
                                        <dd>{leader.region}</dd>
                                        <dt>City</dt>
                                        <dd>{leader.city}</dd>
                                        <RenderBadge leader={leader}/>
                                    </dl>
                                </Col>
                                </Row>
                                <Row>
                                    {leader.description}
                                </Row>
                            </div>
                        </Row>
                    </CardBody>
                </Card>
        </CardDeck>
    );
}

function RenderButton({leader}){
    return(
        <div>
            <Button className={leader.pokemonType} >{leader.pokemonType}</Button>
        </div>
    )
} 

function RenderBadge({leader}){
    if(leader.gymBadge){
        return(
            <>
                <dt>Gym Badge</dt>
                <dd className="badge"><CardImg src={leader.gymBadge} alt={`${leader.name}'S Gym Badge`}/></dd>
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

function KantoLeaders(props){
    const leaders = props.leader.map(leader => {
        return (
            <div key={leader.id} className="col-12">
                <RenderLeaderItem leader={leader} />
            </div>
        );
    }); 
    return(
        <Container>
            <Row>
                {leaders}
            </Row>
        </Container>
    )
}

export default KantoLeaders;