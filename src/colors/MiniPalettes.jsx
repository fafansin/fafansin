import React from 'react';
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import './MiniPalettes.scss';

function MiniPalettes({id, paletteName, emoji, colors}) {
  let navigate = useNavigate();

  function handleClick(event){
    navigate(`/palettes/${id}`);
  }

  return (
    <div className="MiniPalettes" onClick={handleClick}>
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