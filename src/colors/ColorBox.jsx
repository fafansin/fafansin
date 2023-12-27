import React from 'react';
import './ColorBox.scss';

function ColorBox({color, name}) {
  return (
    <div className="ColorBox" style={{backgroundColor:color}}>
      <div className="copy-container">
        <div className="box-content">
          <span>{name}</span>
        </div>
        <button className="copy-button">Copy</button>
      </div>
      <span className="see-more">MORE</span>
    </div>
  )
}

export default ColorBox