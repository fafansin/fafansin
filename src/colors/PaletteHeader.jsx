import React from 'react'
import Form from 'react-bootstrap/Form';
import './PaletteHeader.scss'

function PaletteHeader({level, changeLevel}) {
  
  return (
    <header className="PaletteHeader">
      <div className="logo">
        <a href="/">reactcolorpicker</a>
      </div>
      <div className="slider-container">
        <span>Level: {level}</span>
        <Form.Range className="slider" value={level} min="100" max="900" step="100" onChange={changeLevel}/>
      </div>
      
    </header>
  )
}

export default PaletteHeader
