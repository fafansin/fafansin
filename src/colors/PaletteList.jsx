import React from 'react';
import seedColors from './seedColors.js';
import { Link } from 'react-router-dom';

function PaletteList() {
  
  return (
    <div className="PaletteList">
      <h1>React Colors</h1>
      <ul>
        {seedColors.map(palette => (<li key={palette.id}><Link to={`/palettes/${palette.id}`}>{palette.paletteName}</Link></li>))}
      </ul>
    </div>
  )
}

export default PaletteList