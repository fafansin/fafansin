import { useState } from 'react';
import ColorBox from './ColorBox';
import { v4 as uuidv4 } from 'uuid';
import PaletteHeader from './PaletteHeader';
import PaletteFooter from './PaletteFooter';
import { useParams, useOutletContext } from 'react-router-dom';
import { generatePalette } from './colorHelpers';
import './Palette.scss';

function Palette() {
  const { id } = useParams();
  const [ palettes ] = useOutletContext(); 
  //
  const [ level, setLevel ] = useState(500);
  const [ format, setFormat ] = useState('hex');

  
  const palette = generatePalette(findPalette(id))

  function findPalette(id){
    return palettes.find((palette) => palette.id === id)
  }

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