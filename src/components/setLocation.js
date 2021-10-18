import React from "react";
import { Link } from "react-router-dom";
import {Container, Row, Button} from 'reactstrap';


function SelectLocation(props){

    const locationBtns = props.locations.locations.map(location => {
        return(
            <div key={location.id} className="p-1 col-xl-6 mx-auto">
                <Link to={`/locationselect/${location.id}`}>
                    <Button  className={`${location.location} locationBtn`}  value={location.location}>{location.location}</Button>
                </Link>
            </div>
        )})

    return(
        <Container>
            <Row>
                <h2>Catch Them!</h2>
            </Row>
            <Row>
                {locationBtns} 
            </Row> 
        </Container> 
    )
        
}

export default SelectLocation;