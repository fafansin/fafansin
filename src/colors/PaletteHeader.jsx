import React from 'react'
import Form from 'react-bootstrap/Form';
import './PaletteHeader.scss';
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function PaletteHeader({level, changeLevel, format, changeFormat}) {
  return (
    <header className="PaletteHeader">
      <div className="logo">
        <AdUnitsIcon/>
        <a href="/">reactcolorpicker</a>
      </div>
      <div className="slider-container">
        <span>Level: {level}</span>
        <Form.Range className="slider" value={level} min="100" max="900" step="100" onChange={changeLevel}/>
      </div>
      <div className="select-container">
        <Select name="format" onChange={changeFormat} label="Format" value={format}>
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
        </Select>
      </div>
      
    </header>
  )
}

export default PaletteHeader
