
import React, {useState} from "react";
import { Card, CardDeck, CardImg, CardTitle, CardHeader, CardBody, Row, Col, Container, Button, Form, Input, Media} from 'reactstrap';
import Select from "react-select";


function RenderSelectors({pokemon}){

    const [selected1, setSelected1] = useState([]);
    const [selected2, setSelected2] = useState([]);
    const [selected3, setSelected3] = useState([]);
    const [selected4, setSelected4] = useState([]);
    const [selected5, setSelected5] = useState([]);
    const [selected6, setSelected6] = useState([]);

    const options = pokemon.pokemon.map(pokemon => ({...pokemon, value: pokemon.id, label: `${pokemon.name} ${pokemon.number}`}))

     const handleChange1 = e => {

        setSelected1(e)
        
      }
      const handleChange2 = e => {

        setSelected2(e)
        
      }
      const handleChange3 = e => {

        setSelected3(e)
        
      }
      const handleChange4 = e => {

        setSelected4(e)
        
      }
      const handleChange5 = e => {

        setSelected5(e)
        
      }
      const handleChange6 = e => {

        setSelected6(e)
        
      }

      let arr = []

      let selectedPokemon = arr.concat(selected1).concat(selected2).concat(selected3).concat(selected4).concat(selected5).concat(selected6)

    const selectedTeam = selectedPokemon.map(pokemon => {
        return(
            <Col className="col-2">
                <div key={pokemon.id}>
                    <CardImg src={pokemon.image} alt={pokemon.name} className="evoBackground"/>
                    <h3>{pokemon.name} <br/> {pokemon.number}</h3>   
                </div>
            </Col>
        )
    })

    return(
            <>
                <Form>
                    <Row>
                        <Col  >
                            <h3>Pokemon 1</h3>
                            <Select options={options}  onChange={handleChange1} />
                        </Col >
                        <Col>
                            <h3>Pokemon 2</h3>
                            <Select options={options} onChange={handleChange2} />
                        </Col >
                        <Col>
                            <h3>Pokemon 3</h3>
                            <Select options={options} onChange={handleChange3} />
                        </Col >
                    </Row>
                    <Row>
                        <Col>
                            <h3>Pokemon 4</h3>
                            <Select options={options} onChange={handleChange4} />
                        </Col >
                        <Col>
                            <h3>Pokemon 5</h3>
                            <Select options={options}  onChange={handleChange5} />
                        </Col >
                        <Col>
                            <h3>Pokemon 6</h3>
                            <Select options={options}  onChange={handleChange6} />
                        </Col >
                    </Row>
                </Form>
                <Row className="mt-5">
                    {selectedTeam}
                </Row>            
            </>
    )  
} 

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