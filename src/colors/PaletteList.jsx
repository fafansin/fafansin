import React from 'react';
import MiniPalettes from './MiniPalettes';
import { Link, useOutletContext } from 'react-router-dom';
import './PaletteList.scss';


function PaletteList() {
  const [ palettes ] = useOutletContext();
  return (
    <div className="PaletteList">
      <div className="container">
        <nav className="nav">
          <h1>React Colors</h1>
          <Link to="/palettes/new">Create Palette</Link>
        </nav>
        <div className="palettes">
          {palettes.map(palette => ( <MiniPalettes key={palette.id} {...palette} />))}
        </div>
      </div>
    </div>
  )
}

export default PaletteList