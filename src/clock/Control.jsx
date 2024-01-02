import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import './Clock.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpLong, faDownLong } from '@fortawesome/free-solid-svg-icons'

class Control extends Component{
  min = 1;
  max = 60;
  
  constructor(props){
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event){
    event.preventDefault();

    const { id, value, onClick } = this.props;
    const ref = event.target.id.indexOf('increment') > -1 ? value + 1 : value - 1;
    
    if(ref >= this.min && ref <= this.max){
      onClick({target:id, value:ref});
    }
  }

  render(){
    const { id, value } = this.props;
    const title = id.charAt(0).toUpperCase() + id.slice(1);
    return(
      <div className="Control p-3">
        <h3 id={`${id}-label`}>{title} Length</h3>
        <div className="btn-wrap d-flex justify-content-between align-items-center">
          <Button id={`${id}-decrement`} 
            variant="danger"
            className="rounded-circle shadow"
            onClick={this.handleClick}>
            <FontAwesomeIcon icon={faDownLong} />
          </Button>
          <h4 id={`${id}-length`} className="value">{value}</h4>
          <Button 
            id={`${id}-increment`} 
            variant="success"
            className="rounded-circle shadow"
            onClick={this.handleClick}>
            <FontAwesomeIcon icon={faUpLong} />
          </Button>
        </div>
      </div>
    )
  }
}

export default Control;