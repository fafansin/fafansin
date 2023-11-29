import React, { Component } from 'react';
import Timer from './Timer';
import Control from './Control';

class Clock extends Component{
  breaker = 5;
  session = 25;
  delay = 1000;

  constructor(props){
    super(props);
    this.state = {
      breaker:this.breaker,
      session:this.session,
      isRunning:false,
      spent:0,
      isSession:true
    }
    //
    this.handleControl = this.handleControl.bind(this);
    this.handlePlayPause = this.handlePlayPause.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.onAlarm = this.onAlarm.bind(this);
    this.onTick = this.onTick.bind(this);
  }

  handlePlayPause(event){
    event.preventDefault();

    if(this.state.isRunning){
      clearInterval(this.intvl);
      this.setState(state => ({...state, isRunning:false}))
    }else{
      this.intvl = setInterval(this.onTick, this.delay)  
    }
  }

  onTick(){
    if(this.state.isSession){
      if(this.state.spent === this.state.session*60){
        this.onAlarm();
      }else{
        this.setState(state => ({...state, spent:state.spent + 1, isRunning:true}))
      }
    }else{
      if(this.state.spent === this.state.breaker*60){
        this.onAlarm();
      }else{
        this.setState(state => ({...state, spent:state.spent + 1, isRunning:true}))
      }
    }
  }

  onBeep(){
    document.getElementById('beep').play();
  }

  handleControl(o){
    if(!this.state.isRunning){
      if(o.target === 'session'){
        this.setState(state => ({...state, session:o.value, spent:0}))
      }else{
        this.setState(state => ({...state, breaker:o.value, spent:0}))
      }
    }
  }

  onAlarm(){
    clearInterval(this.intvl);
    document.getElementById('beep').play();
    this.setState(state => ({...state, isSession:!state.isSession, spent:0}));
    
    this.intvl = setInterval(this.onTick, this.delay);
    

  }

  handleReset(){
    clearInterval(this.intvl);
    const beeper = document.getElementById('beep');
    beeper.pause();
    beeper.currentTime = 0;
    this.setState(state => ({...state, 
      isRunning:false, 
      spent:0, 
      session:this.session, 
      breaker:this.breaker, 
      isSession:true}))
  }

  render(){
    
    return(
      <>
        <h1 className="title display-4 text-center">25 + 5 Clock</h1>
        <div className="Clock border shadow">
          <div className="control-wrap d-flex justify-content-around">
            <Control 
              id="break" 
              running={this.state.running}
              value={this.state.breaker}
              onClick={this.handleControl}
              />
            <Control 
              id="session" 
              running={this.state.running}
              value={this.state.session}
              onClick={this.handleControl}
              />
          </div>
          <div className="timer-wrap mt-2">
            <Timer 
              spent={this.state.spent}
              session={this.state.session} 
              breaker={this.state.breaker}
              isSession={this.state.isSession}
              onPlayPause={this.handlePlayPause}
              onReset={this.handleReset}
              />
          </div>
          <audio id="beep" preload="auto" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/BeepSound.wav"></audio>
        </div>
      </>
    )
  }
}
export default Clock