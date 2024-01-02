import React from 'react';
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
// import IconButton from '@mui/material/IconButton';

const DraggableBox = styled('div')(({color}) => ({
  width: "20%",
  height: "25%",
  margin: "0 auto",
  display: "inline-block",
  position: "relative",
  cursor: "pointer",
  marginBottom: "-7.5px",
  backgroundColor: color,
  '& .boxContent':{
    position: "absolute",
    padding: "10px",
    width: "100%",
    left: "0px",
    bottom: "0px",
    color: "black",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between",
    alignItems:"center",
    '& .deleteIcon':{
      color:"rgba(0,0,0,0.5)",
      transition: "all 0.3s ease-in-out",
      '&:hover':{
        color:"white",
        transform: "scale(1.5)"
      }
    }
  }
}));

function DragableColorBox({color, name, remove}) {
  function handleClick(event){
    remove(name)
    console.log("delete this")
  }
  return (
    <DraggableBox color={color}>
      <div className="boxContent">
        <span>{name}</span>
        <DeleteIcon className="deleteIcon" onClick={handleClick}/>
      </div>
    </DraggableBox>
  )
}

export default DragableColorBox