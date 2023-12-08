import React from 'react'
import { Card, Button } from 'react-bootstrap';

function Splash({total, onAgain, onSettings}) {
  return (
    <Card className="Game border shadow">
      <Card.Body className="text-center">
        <Card.Title>Congratulations!</Card.Title> 
        <Card.Text>{`You guessed the number in ${total} attempts!`}</Card.Text>
        <Button variant="primary" onClick={onAgain}>Play Again!</Button>
        {/* <Button variant="info" onClick={onSettings}>Reset Settings</Button> */}
      </Card.Body>
    </Card>
  )
}

export default Splash