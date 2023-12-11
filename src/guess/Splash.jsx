import { Card, Button } from 'react-bootstrap';
import Confetti from 'react-confetti';

function Splash({total, onAgain, onSettings}) {
  return (
    <Card className="Game border shadow">
      <Confetti recycle={false} width={window.innerWidth} height={window.innerHeight} gravity={.05} numberOfPieces={1000} tweenDuration={8000}/>
      <Card.Body className="text-center">
        <Card.Title>Congratulations!</Card.Title> 
        <Card.Text>{`You guessed the number in ${total} attempts!`}</Card.Text>
        <Button variant="primary mx-2" onClick={onAgain}>Play Again!</Button>
        <Button variant="info mx-2" onClick={onSettings}>Reset Settings</Button>
      </Card.Body>
    </Card>
  )
}

export default Splash