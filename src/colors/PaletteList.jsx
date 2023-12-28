import React from 'react';
import seedColors from './seedColors.js';
import MiniPalettes from './MiniPalettes';
import './PaletteList.scss';

function PaletteList() {
  
  return (
    <div className="PaletteList">
      <div className="container">
        <nav className="nav">
          <h1>React Colors</h1>
        </nav>
        <div className="palettes">
          {seedColors.map(palette => ( <MiniPalettes key={palette.id} {...palette} />))}
        </div>
      </div>
    </div>
  )
}

export default PaletteList