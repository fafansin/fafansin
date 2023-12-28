import { useState } from 'react'
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Slider from '@mui/material/Slider';
import './PaletteHeader.scss';

function PaletteHeader({level, changeLevel, format, changeFormat}) {
  const [ open, setOpen ] = useState(false);
  
  function handleFormatChange(event){
    changeFormat(event.target.value);
    setOpen(true);
  }
  function handleClose(event){
    setOpen(false);
  }

  return (
    <header className="PaletteHeader">
      <div className="logo">
        <AdUnitsIcon/>
        <a href="/">reactcolorpicker</a>
      </div>
      <div className="wrap">
        <div className="slider-container">
          <span>Level: {level}</span>
          <Slider defaultValue={level} marks={true} className="slider" aria-label="color level" min={100} max={900} step={100} onChange={changeLevel}/>
        </div>
        <div className="select-container">
          <Select name="format" onChange={handleFormatChange} label="Format" value={format}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
          </Select>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
          Format Changed!
        </Alert>
      </Snackbar>
    </header>
  )
}

export default PaletteHeader
