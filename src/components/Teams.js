
import React from "react";
import { Card, CardDeck, CardImg, CardTitle, CardHeader, CardBody, Row, Col, Container, Button, Form} from 'reactstrap';
import Select from "react-select";

function RenderSelectors({pokemon}){

    const options = pokemon.pokemon.map(pokemon => ({...pokemon, value: pokemon.name, label: `${pokemon.name} ${pokemon.number}`}))
    return(
            <>
                <Form>
                    <Row>
                        <Col className="col-md-4 col-12">
                            <h3>Pokemon 1</h3>
                            <Select options={options}/>
                        </Col >
                        <Col className="col-md-4 col-12">
                            <h3>Pokemon 2</h3>
                            <Select options={options}/>
                        </Col>
                        <Col className="col-md-4 col-12">
                            <h3>Pokemon 3</h3>
                            <Select options={options}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-md-4 col-12 ">
                            <h3>Pokemon 4</h3>
                            <Select options={options}/>
                        </Col>
                        <Col className="col-md-4 col-12 ">
                            <h3>Pokemon 5</h3>
                            <Select options={options}/>
                        </Col>
                        <Col className="col-md-4 col-12">
                            <h3>Pokemon 6</h3>
                            <Select options={options}/>
                        </Col>
                    </Row>
                </Form>
            </>
    )
};
    

function Teams({pokemon}){
    
        return(
            <Container>
                <Row>
                    <h2>Create A Team</h2>
                </Row>
                <Row>
                    <RenderSelectors pokemon={pokemon}/>
                </Row>
            </Container>
    )
}

export default Teams;