import { useState } from 'react';
import ColorBox from './ColorBox';
import { v4 as uuidv4 } from 'uuid';
import './Palette.scss';
import PaletteHeader from './PaletteHeader';

function Palette({palette}) {
  const [ level, setLevel ] = useState(500);
  const [ format, setFormat ] = useState('hex');

  function handleChangeLevel(event){
    setLevel(event.target.value);
  }

  function handleChangeFormat(value){
    setFormat(value);
  }

  return (
    <div className="Palette">
      <PaletteHeader level={level} changeLevel={handleChangeLevel} format={format} changeFormat={handleChangeFormat}/>
      <div className="Palette-colors">
        {palette.colors[level].map(color => (<ColorBox key={uuidv4()} color={color[format]} name={color.name} />))}
      </div>
      <footer className="Palette-footer">
        {palette.paletteName}
        <span className="emoji">{palette.emoji}</span>
      </footer>
    </div>
  )
}

export default Palette