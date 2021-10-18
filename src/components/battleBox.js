import React, {useState} from "react";
import { Link } from "react-router-dom";
import {Button, Row, Col, CardBody, Card} from 'reactstrap';

function BattleBox({pokemon}){

    const [caught, setCaught] = useState(false)
    const [i, setI] = useState(0)

    
    const tryToCatch = (e) => {
        setI(i + 1)
        e.preventDefault();
        
        const randN = Math.floor(Math.random() * ((100 * pokemon.rate) - 1) + 1)
        console.log(randN)
        
        
        if (randN < 45){
            setCaught(true)                 
        }         
    }

    function BattleButtons(){
        if (caught){
            return(
                <Col className="col-5 mt-5 mb-5">
                    <Button className="optionBtn">Add To PC</Button> {" "}
                    <Link to={`/locationselect/${pokemon.locationId}`}>   
                        <Button className="optionBtn">Look For New Pokemon</Button>   
                    </Link>                                                       
                </Col>  
            )
        }
        else if(i === 5){
            return(
                <Col className="col-5 mt-5 mb-5">
                    <Link to={`/locationselect/${pokemon.locationId}`}>   
                        <Button className="optionBtn">Look For New Pokemon</Button>   
                    </Link>                                                       
                </Col>  
            )
        }
        else{
            return(
                <Col className="col-5 mt-5 mb-5">
                    <Button onClick={tryToCatch} className="optionBtn">Try to Catch!</Button> {" "}
                    <Link to={`/locationselect/${pokemon.locationId}`}>   
                        <Button className="optionBtn">Run away!</Button>   
                    </Link>                                                       
                </Col>  
            )
        }
    }
   function BattleMessages({pokemon}) {

        if(i === 0){
            return(
                <h2 className="mt-5 mb-5">You have encountered {pokemon.name}!</h2>
                 )
        }
        else if(caught){  
            return(
                <h2 className="mt-5 mb-5">You Caught {pokemon.name}!</h2>
            )
        }
        else if(i<5){
            return(
                <h2 className="mt-5 mb-5">The pokemon broke free you have {5-i} pokeballs left!</h2>
            )
        }
        else{
            return(
                <h2 className="mt-5 mb-5">You have run out of pokeballs, The Pokemon has escaped!</h2>
            )
        }

    }            
     
    return(
        <Card>
            <Row> 
            <Col className="col-7">
                    <CardBody>
                        <BattleMessages pokemon={pokemon}/>
                    </CardBody>
            </Col> 
                <BattleButtons/>
            </Row>
        </Card>
    )
}

export default BattleBox;