import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import {faFaceGrinSquintTears, faFaceLaugh, faFaceSmile, faFaceMeh, faFaceFrown} from '@fortawesome/free-solid-svg-icons';



function Joke({id, joke, score=3, handleVote}) {

  function handleUp(event){
    handleVote({id:id, score:score+1})
  }

  function handleDown(event){
    handleVote({id:id, score:score-1})
  }
  
  return (
    <div className="Joke border-bottom d-flex align-items-center">
      <div className="votes d-flex">
        <Button id="up" variant="outline" onClick={handleUp}><FontAwesomeIcon icon={faArrowUp} /></Button>
        <div className="score my-shadow">{score}</div>
        <Button id="down" variant="outline" onClick={handleDown}><FontAwesomeIcon icon={faArrowDown} /></Button>
      </div>
      <div className="d-flex justify-content-between align-items-center gap-2" style={{width:"100%"}}>
        <p>{joke}</p>
        <div className="rate my-shadow">
          <FontAwesomeIcon beat icon={score > 14 ? faFaceGrinSquintTears : score > 9 ? faFaceLaugh :  score > 4 ? faFaceSmile : score > 2 ? faFaceMeh :faFaceFrown} />
        </div>
      </div>
    </div>
  )
}

export default Joke