import React from 'react';
import MiniPalettes from './MiniPalettes';
import { Link, useOutletContext } from 'react-router-dom';
import './PaletteList.scss';


function PaletteList() {
  const [ palettes, setPalettes ] = useOutletContext();
  function onDelete(id){
    setPalettes(palettes.filter(item => item.id !== id))
  }
  return (
    <div className="PaletteList">
      <div className="container">
        <nav className="nav">
          <h1>React Colors</h1>
          <Link to="/palettes/new">Create Palette</Link>
        </nav>
        <div className="palettes">
          {palettes.map(palette => ( <MiniPalettes key={palette.id} {...palette} onDelete={onDelete}/>))}
        </div>
      </div>
    </div>
  )
}

export default PaletteList