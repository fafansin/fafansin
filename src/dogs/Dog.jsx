import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link, useParams } from 'react-router-dom';
import dogsData from './data.js';
import { v4 as uuidv4 } from 'uuid';

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
          <ListGroup variant="flush" className="mb-2">
            {dogData.facts.map(fact => (<ListGroup.Item key={uuidv4()}>{fact}</ListGroup.Item>))}
          </ListGroup>
          <Link className="btn btn-info" to="/dogs">Go Back</Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Dog