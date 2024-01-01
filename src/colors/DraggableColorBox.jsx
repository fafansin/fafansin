import React from 'react';
import { styled } from '@mui/material/styles';

const DraggableBox = styled('div', {name:"astig"})(({color}) => ({
  width: "20%",
  height: "25%",
  margin: "0 auto",
  display: "inline-block",
  position: "relative",
  cursor: "pointer",
  marginBottom: "-7.5px",
  backgroundColor: color
}));

function DragableColorBox({color}) {
  return (
    <DraggableBox color={color}/>
    // <div className="DragableColorBox" style={{backgroundColor:color}}>{color}</div>
  )
}

export default DragableColorBox