import React from 'react';
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import DeleteIcon from '@mui/icons-material/Delete';
import './MiniPalettes.scss';

function MiniPalettes({id, paletteName, emoji, colors, onDelete}) {
  let navigate = useNavigate();

  function handleClick(event){
    navigate(`/palettes/${id}`);
  }

  function onClickDelete(event){
    event.stopPropagation();
    onDelete(id);
  }



  return (
    <div className="MiniPalettes" onClick={handleClick}>
      <DeleteIcon className="deleteIcon" style={{transition: "all 0.3s ease-in-out"}} onClick={onClickDelete}/>
      <div className="colors">
        {colors.map(color => (
          <div className="miniColorBoxes" key={uuidv4()} style={{backgroundColor:color.color}}></div>
        ))}
      </div>
      <h5 className="title">{paletteName} <span className="emoji">{emoji}</span></h5>
    </div>
  )
}

export default MiniPalettes