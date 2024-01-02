import { useState } from 'react';
import './Box.scss';

function Box() {
  const [color, setColor] = useState(randomColor());

  function handleClick(event){
    setColor(randomColor());
  }
  function randomColor(){
    let color = "rgba(";
    for(let i = 0; i < 3; i++){
      color = `${color} ${Math.floor(Math.random() * 255)}${i < 2 ? ',' : ')'}`;
    }
    return color;
  }

  return (
    <div onClick={handleClick} 
      className="Box border" 
      style={{backgroundColor:color}}>
    </div>
  )
}

export default Box