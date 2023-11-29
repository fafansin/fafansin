import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import './Clock.scss';

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
            onClick={this.handleClick}>
            &#8595;
          </Button>
          <h4 id={`${id}-length`} className="value">{value}</h4>
          <Button 
            id={`${id}-increment`} 
            variant="success"
            onClick={this.handleClick}>
            &#8593;
          </Button>
        </div>
      </div>
    )
  }
}

export default Control;