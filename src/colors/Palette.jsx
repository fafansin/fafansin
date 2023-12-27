import { useState } from 'react';
import ColorBox from './ColorBox';
import { v4 as uuidv4 } from 'uuid';
import './Palette.scss';
import PaletteHeader from './PaletteHeader';

function Palette({palette}) {
  const [ level, setLevel ] = useState(500);

  function handleChangeLevel(event){
    setLevel(event.target.value);
  }
  return (
    <div className="Palette">
      <PaletteHeader level={level} changeLevel={handleChangeLevel}/>
      <div className="Palette-colors">
        {palette.colors[level].map(color => (<ColorBox key={uuidv4()} color={color.hex} name={color.name} />))}
      </div>
    </div>
  )
}

export default Palette