import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faPause } from '@fortawesome/free-solid-svg-icons'
import { faRepeat } from '@fortawesome/free-solid-svg-icons'


class Timer extends Component{
  formatter(n){
    return n < 10 ? `0${n}` : `${n}`;
  }

  componentDidUpdate(){
    document.querySelector('.display-wrap').classList.add('blink');    
    setTimeout(()=>{
      document.querySelector('.display-wrap').classList.remove('blink');
    },300)
  }
  
  render(){
    const { session, breaker, spent, isSession, onPlayPause, onReset } = this.props;
    
    let time = ((isSession ? session : breaker) * 60) - spent;
    let minutes = Math.floor(time/60)
    let seconds = time - minutes * 60;
    //
    let display = `${this.formatter(minutes)}:${this.formatter(seconds)}`;
    
    return(
      <div className="Timer">
        <div className={`display-wrap shadow ${isSession ? 'session' : 'break'}`}>
          <h1 id="time-left" className="display-3">{display}</h1>
          <p id="timer-label">{isSession ? 'SESSION' : 'BREAK'}</p>
        </div>
        
        <div className="button-wrap d-flex gap-2 justify-content-center">
          <Button id="start_stop" 
            variant="info"
            onClick={onPlayPause}>
            <FontAwesomeIcon icon={faPlay} />
            <FontAwesomeIcon icon={faPause} />
          </Button>
          <Button id="reset" 
            variant="secondary"
            onClick={onReset}> 
            <FontAwesomeIcon icon={faRepeat} />
          </Button>
        </div>
      </div>
    )
  }
}

export default Timer;