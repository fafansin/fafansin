import { useState } from 'react';
import ColorBox from './ColorBox';
import { v4 as uuidv4 } from 'uuid';
import PaletteHeader from './PaletteHeader';
import PaletteFooter from './PaletteFooter';
import './Palette.scss';

function Palette({palette}) {
  const [ level, setLevel ] = useState(500);
  const [ format, setFormat ] = useState('hex');

  function handleChangeLevel(value){
    setLevel(value);
  }

  function handleChangeFormat(value){
    setFormat(value);
  }

  return (
    <div className="Palette">
      <PaletteHeader level={level} changeLevel={handleChangeLevel} format={format} changeFormat={handleChangeFormat}/>
      <div className="Palette-colors">
        {palette.colors[level].map(color => (
            <ColorBox key={uuidv4()} 
              paletteId={palette.id}
              colorId={color.id}
              color={color[format]} 
              name={color.name} />
          ))}
      </div>
      <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji}/>
    </div>
  )
}

export default Palette