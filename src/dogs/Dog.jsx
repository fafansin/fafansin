import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams } from 'react-router-dom';
import dogsData from './data.js';

function Dog() {
  const { dogId }= useParams();
  const dogData = dogsData.find((element) => element.name === dogId)
  
  return (
    <div className="Dog container d-flex justify-content-center pt-5">
      <Card className="shadow border" style={{width:"350px"}}>
        <Card.Img variant="top" src={`${process.env.PUBLIC_URL}${dogData.src}`}/>
        <Card.Body>
          <Card.Title>{dogData.name}</Card.Title>
          <Card.Text>{dogData.age} yrs old</Card.Text>
          <ListGroup variant="flush">
            {dogData.facts.map(fact => (<ListGroup.Item>{fact}</ListGroup.Item>))}
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Dog