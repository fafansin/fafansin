import React from 'react';
import './ColorBox.scss';

function ColorBox({color, name}) {
  return (
    <div className="ColorBox" style={{backgroundColor:color}}>
      <span>{name}</span>
      <span>MORE</span>
    </div>
  )
}

export default ColorBox